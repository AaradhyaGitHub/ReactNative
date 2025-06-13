// @ts-nocheck
import * as SQLite from "expo-sqlite";
import { Place } from "../models/places";

// Open database using the new API
const database = SQLite.openDatabaseSync("places.db");

export function init() {
  const promise = new Promise((resolve, reject) => {
    try {
      database.execSync(`
        CREATE TABLE IF NOT EXISTS places (
          id INTEGER PRIMARY KEY NOT NULL, 
          title TEXT NOT NULL,
          imageUri TEXT NOT NULL,
          address TEXT NOT NULL, 
          lat REAL NOT NULL, 
          lon REAL NOT NULL
        )
      `);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
  return promise;
}

export function insertPlace(place) {
  const promise = new Promise((resolve, reject) => {
    try {
      const result = database.runSync(
        `INSERT INTO places (title, imageUri, address, lat, lon) VALUES (?,?,?,?,?)`,
        [
          place.title,
          place.imageUri,
          place.address,
          place.location.lat,
          place.location.lon
        ]
      );
      console.log(result);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
  return promise;
}
export function fetchPlaces() {
  const promise = new Promise((resolve, reject) => {
    try {
      const result = database.getAllSync("SELECT * FROM places");
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
  return promise;
}

// Alternative async version (cleaner)
export async function fetchPlacesAsync() {
  try {
    const result = await database.getAllAsync("SELECT * FROM places");
    return result;
  } catch (error) {
    throw error;
  }
}

// If you want to fetch a single place by ID
export function fetchPlaceById(id) {
  const promise = new Promise((resolve, reject) => {
    try {
      const result = database.getFirstSync(
        "SELECT * FROM places WHERE id = ?",
        [id]
      );
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
  return promise;
}
// Async version for single place
export async function fetchPlaceByIdAsync(id) {
  try {
    const result = await database.getFirstAsync(
      "SELECT * FROM places WHERE id = ?",
      [id]
    );
    return result;
  } catch (error) {
    throw error;
  }
}
// Alternative async version (if you prefer async/await)
export async function initAsync() {
  try {
    await database.execAsync(`
      CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY NOT NULL, 
        title TEXT NOT NULL,
        imageUri TEXT NOT NULL,
        address TEXT NOT NULL, 
        lat REAL NOT NULL, 
        lon REAL NOT NULL
      )
    `);
  } catch (error) {
    throw error;
  }
}

export async function insertPlaceAsync(place) {
  try {
    const result = await database.runAsync(
      `INSERT INTO places (title, imageUri, address, lat, lon) VALUES (?,?,?,?,?)`,
      [
        place.title,
        place.imageUri,
        place.address,
        place.location.lat,
        place.location.lon
      ]
    );
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}
