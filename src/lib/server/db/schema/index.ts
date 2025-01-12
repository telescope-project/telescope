import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"
import { relations } from "drizzle-orm"

export const accounts = sqliteTable("accounts", {
  id: integer().primaryKey(),
})

export const accountsRelations = relations(accounts, ({ many }) => ({
  profiles: many(accounts),
}))

export const profiles = sqliteTable("profiles", {
  id: integer().primaryKey(),
  account: integer().references(() => accounts.id),
  displayName: text("display_name"),
  usetname: text(),
  server: text(),
})
