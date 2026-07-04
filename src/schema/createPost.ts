import z from "zod";

export const metadataSchema = z.object({
  metadata: z.object({
    title: z.string().min(1, "Title is required"),
    author: z.string().min(1, "Author is required"),
    slug: z.string().min(1, "Slug is required"),
  }),
});

export const contentSchema = z.object({
  content: z.object({
    postData: z.string().min(1, "Post content is required"),
  }),
});

export const createPostSchema = z.object({
  step: z.enum(["metadata", "content", "review"]),
  ...metadataSchema.shape,
  ...contentSchema.shape,
});

export type CreatePostFormValues = z.infer<typeof createPostSchema>;
