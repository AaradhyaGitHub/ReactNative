// @ts-nocheck
const API_KEY = "AIzaSyAByovPaQbMrWXyRBoYEBnH7Eicl9sH5ik";

export function getMapPreview(lat, lon) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=15&size=600x300&scale=2&maptype=terrain&format=png&markers=color:red%7Clabel:P%7C${lat},${lon}&key=${API_KEY}`;

  return imagePreviewUrl;
}

export async function getAddress(lat, lon) {
  try {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${API_KEY}`;
    const response = await fetch(url); // ← Add 'await' here

    if (!response.ok) {
      throw new Error("Failed to fetch address");
    }

    const data = await response.json(); // ← Fix this line

    // Add safety check for results
    if (data.results && data.results.length > 0) {
      return data.results[0].formatted_address;
    } else {
      throw new Error("No address found");
    }
  } catch (error) {
    console.error("Error in getAddress:", error);
    throw error; // Re-throw so the calling code can handle it
  }
}
