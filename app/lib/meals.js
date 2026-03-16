import Database from "better-sqlite3";
const db = Database("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * from meals").all();
}
