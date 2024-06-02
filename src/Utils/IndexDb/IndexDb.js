// db.js
import { openDB } from "idb";

const DB_NAME = "fileStorageDB";
const STORE_NAME = "files";

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    },
  });
};

export const saveFileToDB = async (file) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);
  const id = await store.add(file);
  await tx.done;
  return { id };
};

export const getFileFromDB = async (id) => {
  const db = await initDB();
  return db.transaction(STORE_NAME).objectStore(STORE_NAME).get(id);
};
