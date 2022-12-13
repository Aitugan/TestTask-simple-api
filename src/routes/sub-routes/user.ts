import { Router } from 'express'
import UsersCtrl from '../../controllers/UserController'

class UserRoutes {
  router = Router()
  usersCtrl = new UsersCtrl()

  constructor() {
    this.intializeRoutes()
  }

  intializeRoutes() {
    this.router.route('/register').post(this.usersCtrl.register)
  }
}

export default new UserRoutes().router
