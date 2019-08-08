import { Context } from 'koa'

import { Image } from '../models'

export const ImageController = {
  create: async (ctx: Context) => {
    ctx.response.body = await new Image().save()
    ctx.response.status = ctx.response.body ? 201 : 404
  },

  update: async (ctx: Context) => {
    const image = await Image.findByIdAndUpdate(
      ctx.params.id,
      // @ts-ignore
      { ...ctx.request.body },
    ).exec()

    ctx.response.body = image
    ctx.response.status = image ? 200 : 404
  },

  destroy: async (ctx: Context) => {
    const deleted = await Image.findByIdAndDelete(ctx.params.id).exec()
    ctx.response.status = deleted ? 204 : 404
  },
}
