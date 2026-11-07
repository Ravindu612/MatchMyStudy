import type { Enums, Tables, TablesInsert } from "./database";

/** Permission role stored in profiles.role. Signup can only create student or consultant. */
export type AppUserRole = "student" | "consultant" | "admin";

/** Self-declared social identity stored in profiles.account_type. */
export type SocialAccountType = Enums<"profile_role">;

export type PostVisibility = Enums<"post_visibility">;
export type ContentStatus = Enums<"content_status">;

export type Profile = Tables<"profiles">;
export type PublicProfileRow = Tables<"public_profiles">;
export type Post = Tables<"posts">;
export type PostMedia = Tables<"post_media">;
export type PostLike = Tables<"post_likes">;
export type Comment = Tables<"comments">;
export type CommentInsert = TablesInsert<"comments">;
