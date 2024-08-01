import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
export const subject = pgTable("subject", {
  id: serial("id").primaryKey().notNull(),
  title: text("title").notNull(),
  route: text("route").notNull(),
  imageUrl: text("image_url")
})

export type InsertUser = typeof subject.$inferInsert;
export type SelectUser = typeof subject.$inferSelect;