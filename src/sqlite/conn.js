import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("muscletracker.db")

export default db
