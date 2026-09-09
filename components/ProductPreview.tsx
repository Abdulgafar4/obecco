import Image from "next/image";
import { s } from "@/lib/style";

type ProductPreviewProps = {
  src: string;
  alt: string;
  label: string;
  aspectRatio?: string;
  parallax?: number;
  follow?: number;
  muted?: boolean;
};

export function ProductPreview({
  src,
  alt,
  label,
  aspectRatio = "16/10",
  parallax,
  follow,
  muted = false,
}: ProductPreviewProps) {
  const wrapProps: Record<string, unknown> = { style: s("position:relative;") };
  if (parallax !== undefined) wrapProps["data-parallax"] = String(parallax);
  if (follow !== undefined) wrapProps["data-follow"] = String(follow);

  return (
    <div {...wrapProps}>
      <div
        data-follow-target={follow !== undefined ? "1" : undefined}
        className="blueprint"
        style={s(
          `position:relative;aspect-ratio:${aspectRatio};background:var(--color-bg);overflow:hidden;${
            follow !== undefined ? "transition:transform 200ms linear;" : ""
          }${muted ? "opacity:0.88;" : ""}`
        )}
      >
        <i className="corner tl" />
        <i className="corner tr" />
        <i className="corner bl" />
        <i className="corner br" />
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover", objectPosition: "top center" }}
        />
        <div
          style={s(
            "position:absolute;left:clamp(12px,1.6vw,20px);bottom:clamp(12px,1.6vw,20px);display:flex;align-items:center;gap:8px;padding:6px 10px;background:color-mix(in srgb, var(--color-bg) 88%, transparent);backdrop-filter:saturate(140%) blur(10px);border:1px solid var(--color-divider);"
          )}
        >
          <span
            style={s(
              "width:6px;height:6px;background:var(--color-accent);flex-shrink:0;"
            )}
          />
          <span
            style={s(
              "font-size:9.5px;letter-spacing:0.16em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 58%, transparent);"
            )}
          >
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
