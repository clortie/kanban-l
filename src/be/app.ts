import dotenv from 'dotenv'
import Koa from 'koa'
import BodyParser from 'koa-bodyparser'
import logger from 'koa-logger'

import { db, errorHandler } from './middleware'
import { CardRoutes, ColumnRoutes, ImageRoutes, PageRoutes } from './routes'

dotenv.config()

export const App = () => {
  const app = new Koa<any>()

  app.use(logger())

  app.use(errorHandler)

  app.use(db)

  app.use(BodyParser())

  app.use(PageRoutes)
  app.use(ColumnRoutes)
  app.use(CardRoutes)
  app.use(ImageRoutes)

  return app
}
