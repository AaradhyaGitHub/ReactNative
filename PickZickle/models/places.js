// @ts-nocheck
export class Place {
  constructor(title, imageUri, location) {
    this.title = title;
    this.imageUri = imageUri;

    // More robust null checking
    if (location && typeof location === "object") {
      this.address = location.address || "Address not available";
      this.location = {
        lat: location.lat || 0,
        lon: location.lon || 0
      };
    } else {
      this.address = "Address not available";
      this.location = { lat: 0, lon: 0 };
    }

    this.id = new Date().toString() + Math.random().toString();
  }
}
