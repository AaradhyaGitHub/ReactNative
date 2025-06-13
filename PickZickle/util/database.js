// @ts-nocheck
import * as SQLite from "expo-sqlite";

const database = SQLite.openDatabase("places.db");

export function init() {
  database.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY NOT NULL, 
            title TEXT NOT NULL,
            imageUri TEXT NOT NULL,
            address TEXT NOT NULL, 
            lat REAL NOT NULL, 
            lon REAL NOT NULL
        )`,
      [],
      //SUCCESS CALLBACK
      () => {},
      //FAILURE CALLBACK
      (_,error) => {}
    );
  });
}
