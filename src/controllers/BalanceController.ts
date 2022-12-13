import { Request, Response, NextFunction } from 'express'
import BalanceRepo from '../repository/balance'

export default class Balance {
  constructor() {}

  async withdraw(req: Request, res: Response, next: NextFunction) {
    try {
      const withdrawResult = await BalanceRepo.withdrawFromBalance(req.body.userId, req.body.amount).catch(
        (err: Error) => {
          return res.json({
            msg: 'A problem while withdrawing',
          })
        },
      )
      return res.json({ withdrawResult })
    } catch (error) {
        return res.send({
            msg: 'A problem while withdrawing',
        })
    }
  }
  async deposit(req: Request, res: Response, next: NextFunction) {
    try {
      const depositResult = await BalanceRepo.depositIntoBalance(req.body.userId, req.body.amount).catch(
        (err: Error) => {
          return res.json({
            msg: 'A problem while depositing',
          })
        },
      )
      return res.json({ depositResult })
    } catch (error) {
        return res.send({
            msg: 'A problem while depositing',
        })
    }
  }
}
