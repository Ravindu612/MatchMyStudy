import Image from "next/image";
import type { BlogPost, UnsplashCredit } from "@/data/blog/posts";

export function BlogCover({
  post,
  sizes,
  preload = false,
  className = "object-cover",
}: {
  post: Pick<BlogPost, "coverImage" | "coverImageAlt">;
  sizes: string;
  preload?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={post.coverImage}
      alt={post.coverImageAlt}
      fill
      preload={preload}
      sizes={sizes}
      className={className}
    />
  );
}

export function BlogPhotoCredit({
  credit,
  className = "text-xs text-slate-500",
}: {
  credit: UnsplashCredit;
  className?: string;
}) {
  return (
    <p className={className}>
      Photo by{" "}
      <a
        href={credit.photographerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-slate-300 underline-offset-2 hover:text-blue-600"
      >
        {credit.photographerName}
      </a>{" "}
      on{" "}
      <a
        href={credit.photoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-slate-300 underline-offset-2 hover:text-blue-600"
      >
        Unsplash
      </a>
    </p>
  );
}
