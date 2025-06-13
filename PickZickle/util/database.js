// @ts-nocheck
import * as SQLite from "expo-sqlite";

// Open database using new API
const database = SQLite.openDatabaseSync("places.db");

export function init() {
  const promise = new Promise((resolve, reject) => {
    try {
      database.execSync(
        `CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY NOT NULL, 
            title TEXT NOT NULL,
            imageUri TEXT NOT NULL,
            address TEXT NOT NULL, 
            lat REAL NOT NULL, 
            lon REAL NOT NULL
        )`
      );
      resolve();
    } catch (error) {
      reject(error);
    }
  });

  return promise;
}

// Alternative async version using the new API
export async function initAsync() {
  try {
    await database.execAsync(
      `CREATE TABLE IF NOT EXISTS places (
          id INTEGER PRIMARY KEY NOT NULL, 
          title TEXT NOT NULL,
          imageUri TEXT NOT NULL,
          address TEXT NOT NULL, 
          lat REAL NOT NULL, 
          lon REAL NOT NULL
      )`
    );
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
}