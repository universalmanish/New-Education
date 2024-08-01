import { db } from "./db";
import { subject } from "./schema";


export const getSubjects = async () => {
  const data = await db.select().from(subject);
  return data;
};