import type {
  Enums,
  Tables,
  TablesInsert,
  TablesUpdate,
} from "@/types/database";

/**
 * Permission role stored in profiles.role (text).
 * Signup can only create student or consultant.
 */
export type AppUserRole = "student" | "consultant" | "admin";

/** Self-declared social identity stored in profiles.account_type. */
export type SocialAccountType = Enums<"profile_role">;

export type PostVisibility = Enums<"post_visibility">;
export type ContentStatus = Enums<"content_status">;
export type ReportTarget = Enums<"report_target">;
export type ReportStatus = Enums<"report_status">;

/** post_tags.target_type. Stored as text with a check constraint. */
export type PostTagTarget = "country" | "university" | "program";

export type Profile = Tables<"profiles">;
export type ProfileInsert = TablesInsert<"profiles">;
export type ProfileUpdate = TablesUpdate<"profiles">;

/** Email-free directory row from public.public_profiles. */
export type PublicProfile = Tables<"public_profiles">;

export type Follow = Tables<"follows">;
export type Block = Tables<"blocks">;

export type Post = Tables<"posts">;
export type PostInsert = TablesInsert<"posts">;
export type PostUpdate = TablesUpdate<"posts">;

export type PostMedia = Tables<"post_media">;
export type PostTag = Tables<"post_tags">;
export type PostLike = Tables<"post_likes">;

export type Comment = Tables<"comments">;
export type CommentInsert = TablesInsert<"comments">;

export type Report = Tables<"reports">;
export type ReportInsert = TablesInsert<"reports">;
