import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ProfileImageResponse {
  id: string;
  url: string;
  originalName: string;
}

export function useImageUpload() {
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: currentImage, isLoading } = useQuery<ProfileImageResponse | null>({
    queryKey: ["/api/profile-image"],
    retry: false,
  });

  const uploadMutation = useMutation({
    mutationFn: async (file: File) => {
      setUploading(true);
      const formData = new FormData();
      formData.append('image', file);
      
      const response = await apiRequest('POST', '/api/upload-profile-image', formData);
      return response.json();
    },
    onSuccess: (data: ProfileImageResponse) => {
      queryClient.setQueryData(["/api/profile-image"], data);
      toast({
        title: "Success",
        description: "Profile image uploaded successfully!",
      });
    },
    onError: (error: any) => {
      console.error('Upload error:', error);
      toast({
        title: "Upload Failed",
        description: error.message || "Failed to upload image. Please try again.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setUploading(false);
    },
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Invalid File Type",
        description: "Please upload a valid image file (JPEG, PNG, GIF, or WebP).",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File Too Large",
        description: "Please upload an image smaller than 5MB.",
        variant: "destructive",
      });
      return;
    }

    uploadMutation.mutate(file);
  };

  return {
    currentImage,
    isLoading,
    uploading,
    handleImageUpload,
  };
}
