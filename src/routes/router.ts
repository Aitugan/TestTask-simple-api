import { Router, Request, Response, NextFunction } from 'express'
import userRoutes from './sub-routes/user'
import balanceRoutes from './sub-routes/balance'

const router = Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello')
})
router.use('/user', userRoutes)
router.use('/balance', balanceRoutes)

export default router
