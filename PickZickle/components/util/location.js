const API_KEY = "";

export function getMapPreview(lat, lon) {
  const zoom = 14;
  const width = 600;
  const height = 400;
  const mapStyle = "streets"; // You can use styles like: streets, satellite, hybrid, terrain, etc.

  const imagePreviewUrl = `https://api.maptiler.com/maps/${mapStyle}/static/${lon},${lat},${zoom}/${width}x${height}.png?key=${API_KEY}`;

  return imagePreviewUrl;
}
