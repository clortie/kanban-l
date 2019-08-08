import Router from 'koa-router'

import { PageController } from '../controllers'

const router = new Router<any>({
  prefix: '/page',
})
router.get('/:id', PageController.show)
router.post('/', PageController.create)
router.patch('/:id', PageController.update)
router.delete('/:id', PageController.destroy)

export const PageRoutes = router.routes()
