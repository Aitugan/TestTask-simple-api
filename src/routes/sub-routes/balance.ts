import { Router } from 'express'
import BalanceCtrl from '../../controllers/BalanceController'

class BalanceRoutes {
  router = Router()
  balanceCtrl = new BalanceCtrl()

  constructor() {
    this.intializeRoutes()
  }

  intializeRoutes() {
    this.router.route('/withdraw').put(
      this.balanceCtrl.withdraw
    )
    this.router.route('/deposit').put(
      this.balanceCtrl.deposit
    )
  }
}

export default new BalanceRoutes().router
