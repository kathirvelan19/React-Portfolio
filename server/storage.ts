import { type ProfileImage, type InsertProfileImage, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createProfileImage(image: InsertProfileImage): Promise<ProfileImage>;
  getLatestProfileImage(): Promise<ProfileImage | undefined>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private profileImages: Map<string, ProfileImage>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.profileImages = new Map();
    this.contactMessages = new Map();
  }

  async createProfileImage(insertImage: InsertProfileImage): Promise<ProfileImage> {
    const id = randomUUID();
    const profileImage: ProfileImage = { 
      ...insertImage, 
      id,
      uploadedAt: new Date()
    };
    this.profileImages.set(id, profileImage);
    return profileImage;
  }

  async getLatestProfileImage(): Promise<ProfileImage | undefined> {
    const images = Array.from(this.profileImages.values());
    return images.sort((a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime())[0];
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = { 
      ...insertMessage, 
      id,
      createdAt: new Date()
    };
    this.contactMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
