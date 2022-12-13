import { Request, Response, NextFunction } from 'express'
import UserRepo from '../repository/user'
import BalanceRepo from '../repository/balance'


export default class Users {
  constructor() {}

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const createdUser = await UserRepo.createUser(req.body).catch(
        (err: Error) => {
          return res.json({
            msg: 'A problem while creating a user',
          })
        },
      )
      const createdBalance = await BalanceRepo.createBalance(createdUser.id).catch(
        (err: Error) => {
          return res.json({
            msg: 'A problem while creating a user balance',
          })
        },
      )
      return res.json({ userId: createdUser.id, balance: createdBalance.amount })
    } catch (error) {
        return res.send({
            msg: 'A problem while creating a user',
        })
    }
  }
}
