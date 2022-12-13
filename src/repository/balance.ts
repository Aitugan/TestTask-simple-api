import Balance from '../models/Balance'
import { v4 as uuid } from 'uuid'

class BalanceRepo {
  constructor() {}

  async createBalance(userId: string) {
    return await Balance.create({id: uuid(), amount: 0, user_id:userId }).catch((error: Error) => {
      throw new Error(error.message)
    })
  }

  async depositIntoBalance(userId: string, amount: number) {
    return await Balance.findOne({
      where: {
        user_id: userId,
      },
    }).then((itemInst: any) => {
      if (itemInst === null) {
        return "User not found"
      }
      return itemInst.update({amount: Number(itemInst.amount) + amount}).then((self: any) => {
        return self
      })
    }).catch((error: Error) => {
      throw new Error(error.message)
    })
  }

  async withdrawFromBalance(userId: string, amount: number) {
    return await Balance.findOne({
      where: {
        user_id: userId,
      },
    }).then((itemInst: any) => {
      if (itemInst === null) {
        return "User not found"
      }
      if (itemInst.amount - amount < 0) {
        return "Not enough balance"
      }
      return itemInst.update({amount: Number(itemInst.amount) - amount}).then((self: any) => {
        return self
      })
    }).catch((error: Error) => {
      throw new Error(error.message)
    })    
  }
}

export default new BalanceRepo()
