// Resolves a Lovable asset pointer to an absolute CDN URL that works in
// every environment — localhost dev, Lovable preview, and published sites.
type AssetPointer = { url: string; project_id: string };

export function assetUrl(asset: AssetPointer): string {
  return `https://project--${asset.project_id}.lovable.app${asset.url}`;
}
