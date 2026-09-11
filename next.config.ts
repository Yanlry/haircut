import type { NextConfig } from "next";

const githubPagesBasePath = "/haircut";

function normalizeBasePath(value: string | undefined) {
  if (!value || value === "/") return "";

  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withLeadingSlash.endsWith("/")
    ? withLeadingSlash.slice(0, -1)
    : withLeadingSlash;
}

const basePath = normalizeBasePath(
  process.env.NEXT_PUBLIC_BASE_PATH ??
    (process.env.GITHUB_ACTIONS === "true" ? githubPagesBasePath : "")
);

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
