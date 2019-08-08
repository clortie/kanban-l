import Router from 'koa-router'

import { CardController } from '../controllers'

const router = new Router<any>({
  prefix: '/cards',
})
router.post('/', CardController.create)
router.post('/:id', CardController.update)
router.delete('/:id', CardController.destroy)

export const CardRoutes = router.routes()
