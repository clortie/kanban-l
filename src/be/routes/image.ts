import Router from 'koa-router'

import { ImageController } from '../controllers'

const router = new Router<any>({
  prefix: '/images',
})
router.post('/', ImageController.create)
router.post('/:id', ImageController.update)
router.delete('/:id', ImageController.destroy)

export const ImageRoutes = router.routes()
