// @ts-nocheck
class Place {
  constructor(title, imageUri, address, location, dateCreated, caption) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // lat and lon properties
    this.dateCreated = dateCreated;
    this.caption = caption;
    this.id = new Date().toString() + Math.random().toString();
  }
}
