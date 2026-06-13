// Resolves a Lovable asset pointer to a URL that works in any environment,
// including localhost where /__l5e/* is not proxied.
type AssetPointer = { url: string; project_id: string };

export function assetUrl(asset: AssetPointer): string {
  if (typeof window === "undefined") return asset.url;
  const host = window.location.hostname;
  const isLovable = host.endsWith(".lovable.app") || host.endsWith(".lovableproject.com");
  if (isLovable) return asset.url;
  // On localhost / custom dev hosts, point at the stable Lovable CDN.
  return `https://project--${asset.project_id}.lovable.app${asset.url}`;
}
