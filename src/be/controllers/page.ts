import { Context } from 'koa'
import { Types } from 'mongoose'
import { pick } from 'ramda'

import { Image, Page } from '../models'

export const PageController = {
  show: async (ctx: Context) => {
    const page = await findAndPopulatePageById(ctx.params.id)

    ctx.response.body = page
    ctx.response.status = page ? 200 : 404
  },

  create: async (ctx: Context) => {
    const imageDocs = await makeImageDocsFromRequest(
      // @ts-ignore
      pick(['favicon', 'background'], ctx.request.body),
    )

    const page = await Page.create(
      // @ts-ignore
      new Page({ ...ctx.request.body, ...imageDocs }),
    )
    await page.save()

    ctx.response.body = await findAndPopulatePageById(page._id)
    ctx.response.status = page ? 201 : 404
  },

  update: async (ctx: Context) => {
    const page = await Page.findByIdAndUpdate(
      ctx.params.id,
      // @ts-ignore
      { ...ctx.request.body },
    ).exec()

    ctx.response.body = page
    ctx.response.status = page ? 200 : 404
  },

  destroy: async (ctx: Context) => {
    const deleted = await Page.findByIdAndDelete(ctx.params.id).exec()
    ctx.response.status = deleted ? 204 : 404
  },
}

async function findAndPopulatePageById(
  pageId: Types.ObjectId | string,
): Promise<any> {
  return Page.findById(pageId)
    .populate({
      path: 'columns',
      model: 'Column',
      populate: {
        path: 'cards',
        model: 'Card',
        populate: {
          path: 'images',
          model: 'Image',
        },
      },
    })
    .populate('background favicon', '', 'Image')
    .exec()
}

async function makeImageDocsFromRequest(images: any): Promise<any> {
  const favicon = images.favicon
    ? await new Image(images.favicon).save()
    : undefined

  const background = images.background
    ? await new Image(images.background).save()
    : undefined

  return {
    favicon,
    background,
  }
}
