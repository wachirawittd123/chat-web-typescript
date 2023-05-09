import { Router } from 'express'
import authRoute from './auth.route'
import userRoute from './user.route'

const baseRouter = Router()

baseRouter.use("/api/auth", authRoute)
baseRouter.use("/api/user", userRoute)

export default baseRouter