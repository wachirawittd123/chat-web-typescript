import { Router } from 'express'
import authRoute from './auth.route'

const baseRouter = Router()

baseRouter.use("/api/auth", authRoute)

export default baseRouter