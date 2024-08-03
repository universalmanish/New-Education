import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from './schema'; 

// config({ path: ".env.local" });

const sql = neon("postgresql://newDb_owner:DBq8tGQMSyo6@ep-soft-fog-a15rj9vb.ap-southeast-1.aws.neon.tech/newDb?sslmode=require");
export const db = drizzle(sql, {schema});
