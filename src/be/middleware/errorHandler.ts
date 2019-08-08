import { Context } from 'koa'

export const errorHandler = async (ctx: Context, next: () => any) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = err.message
    ctx.app.emit('error', err, ctx)
  }
}
