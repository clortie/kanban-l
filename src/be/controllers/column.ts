import { Context } from 'koa'

import { Column } from '../models'

export const ColumnController = {
  create: async (ctx: Context) => {
    ctx.response.body = await new Column().save()
    ctx.response.status = ctx.response.body ? 201 : 404
  },

  update: async (ctx: Context) => {
    const column = await Column.findByIdAndUpdate(
      ctx.params.id,
      // @ts-ignore
      { ...ctx.request.body },
    ).exec()

    ctx.response.body = column
    ctx.response.status = column ? 200 : 404
  },

  destroy: async (ctx: Context) => {
    const deleted = await Column.findByIdAndDelete(ctx.params.id).exec()
    ctx.response.status = deleted ? 204 : 404
  },
}
