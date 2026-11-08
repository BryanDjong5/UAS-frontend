import Database from "better-sqlite3";

const db = new Database("restoran.db"); 

db.exec(`
  CREATE TABLE IF NOT EXISTS booking (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    nama         TEXT NOT NULL,
    no_telp      TEXT NOT NULL,
    email        TEXT NOT NULL,
    tanggal      TEXT NOT NULL,
    jumlah_orang INTEGER NOT NULL,
    acara        TEXT,
    created_at   TEXT DEFAULT CURRENT_TIMESTAMP
  )
`);

export default db;