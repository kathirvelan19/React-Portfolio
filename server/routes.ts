import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import path from "path";
import fs from "fs";
import { storage } from "./storage";
import { insertContactMessageSchema, insertProfileImageSchema } from "@shared/schema";
import { z } from "zod";

// Configure multer for file uploads
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: multerStorage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve uploaded files
  app.use('/uploads', (req, res, next) => {
    res.header('Cross-Origin-Resource-Policy', 'cross-origin');
    next();
  }, express.static(uploadDir));

  // Upload profile image
  app.post('/api/upload-profile-image', upload.single('image'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }

      const imageData = {
        filename: req.file.filename,
        originalName: req.file.originalname,
        mimeType: req.file.mimetype,
        size: req.file.size.toString(),
      };

      const validatedData = insertProfileImageSchema.parse(imageData);
      const profileImage = await storage.createProfileImage(validatedData);

      res.json({
        id: profileImage.id,
        url: `/uploads/${profileImage.filename}`,
        originalName: profileImage.originalName,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: 'Invalid image data', errors: error.errors });
      }
      console.error('Upload error:', error);
      res.status(500).json({ message: 'Failed to upload image' });
    }
  });

  // Get latest profile image
  app.get('/api/profile-image', async (req, res) => {
    try {
      const profileImage = await storage.getLatestProfileImage();
      if (!profileImage) {
        return res.status(404).json({ message: 'No profile image found' });
      }

      res.json({
        id: profileImage.id,
        url: `/uploads/${profileImage.filename}`,
        originalName: profileImage.originalName,
      });
    } catch (error) {
      console.error('Get profile image error:', error);
      res.status(500).json({ message: 'Failed to get profile image' });
    }
  });

  // Submit contact form
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      res.json({ 
        message: 'Contact message sent successfully',
        id: message.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: 'Invalid form data', errors: error.errors });
      }
      console.error('Contact form error:', error);
      res.status(500).json({ message: 'Failed to send message' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
