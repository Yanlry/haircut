type PublicPath = `/${string}`;

function withoutTrailingSlash(value: string) {
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

function normalizeBasePath(value: string | undefined) {
  if (!value || value === "/") return "";

  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withoutTrailingSlash(withLeadingSlash);
}

export const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);

export const siteUrl = withoutTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL ?? `http://localhost:3000${basePath}`
);

export function assetPath(path: PublicPath) {
  return `${basePath}${path}`;
}

export function siteAssetUrl(path: PublicPath) {
  return `${siteUrl}${path}`;
}
