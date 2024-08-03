import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from './schema'; 

// config({ path: ".env.local" });

const sql = neon("postgresql://newDb_owner:I6K0afnkLsiG@ep-still-moon-a1ax7k8p.ap-southeast-1.aws.neon.tech/newDb?sslmode=require");
export const db = drizzle(sql, {schema});
