import { Context } from 'koa'
import mongoose from 'mongoose'

export const db = async (ctx: Context, next: () => any) => {
  if (!process.env.dbConnStr) {
    throw new Error('No db connection string.')
  }

  await mongoose.connect(
    process.env.dbConnStr!,
    { useFindAndModify: false, useNewUrlParser: true },
  )

  return next()
}
