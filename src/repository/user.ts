import User from '../models/User'
import { v4 as uuid } from 'uuid'

class UserRepo {
  constructor() {}

  async getAllUsers(options: any) {
    return await User.findAll(options).catch((error: Error) => {
      throw new Error(error.message)
    })
  }

  async createUser(props: any) {
    return await User.create({id: uuid(), name: props.name} ).catch((error: Error) => {
      throw new Error(error.message)
    })
  }
}

export default new UserRepo()
