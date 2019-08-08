import { Context } from 'koa'

import { Card } from '../models'

export const CardController = {
  create: async (ctx: Context) => {
    ctx.response.body = await new Card().save()
    ctx.response.status = ctx.response.body ? 201 : 404
  },

  update: async (ctx: Context) => {
    const card = await Card.findByIdAndUpdate(
      ctx.params.id,
      // @ts-ignore
      { ...ctx.request.body },
    ).exec()

    ctx.response.body = card
    ctx.response.status = card ? 200 : 404
  },

  destroy: async (ctx: Context) => {
    const deleted = await Card.findByIdAndDelete(ctx.params.id).exec()
    ctx.response.status = deleted ? 204 : 404
  },
}
