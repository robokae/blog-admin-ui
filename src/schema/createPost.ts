import z from "zod";
import { validateLength, getLengthErrorMessage } from "../util/validatorUtil";

const TITLE_MIN = 3;
const TITLE_MAX = 70;
const AUTHOR_MIN = 3;
const AUTHOR_MAX = 60;
const SLUG_MIN = 3;
const SLUG_MAX = 60;
const POST_CONTENT_MIN = 200;
const POST_CONTENT_MAX = 10_000;

export const metadataSchema = z.object({
  metadata: z.object({
    title: z
      .string()
      .trim()
      .refine(
        (value) => validateLength(value, TITLE_MIN, TITLE_MAX),
        getLengthErrorMessage("Title", TITLE_MIN, TITLE_MAX),
      ),
    author: z
      .string()
      .trim()
      .refine(
        (value) => validateLength(value, AUTHOR_MIN, AUTHOR_MAX),
        getLengthErrorMessage("Author", AUTHOR_MIN, AUTHOR_MAX),
      ),
    slug: z
      .string()
      .trim()
      .refine(
        (value) => validateLength(value, SLUG_MIN, SLUG_MAX),
        getLengthErrorMessage("Slug", SLUG_MIN, SLUG_MAX),
      ),
  }),
});

export const contentSchema = z.object({
  content: z.object({
    postData: z
      .string()
      .trim()
      .refine(
        (value) => validateLength(value, POST_CONTENT_MIN, POST_CONTENT_MAX),
        getLengthErrorMessage(
          "Post content",
          POST_CONTENT_MIN,
          POST_CONTENT_MAX,
        ),
      ),
  }),
});

export const createPostSchema = z.object({
  step: z.enum(["metadata", "content", "review"]),
  ...metadataSchema.shape,
  ...contentSchema.shape,
});

export type CreatePostFormValues = z.infer<typeof createPostSchema>;
