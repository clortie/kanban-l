import Router from 'koa-router'

import { ColumnController } from '../controllers'

const router = new Router<any>({
  prefix: '/columns',
})
router.post('/', ColumnController.create)
router.post('/:id', ColumnController.update)
router.delete('/:id', ColumnController.destroy)

export const ColumnRoutes = router.routes()
