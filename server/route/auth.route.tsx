import express from "express"
import { authController } from "../controller/auth.controller"

const authRoute = express.Router()

authRoute
  .post("/login", async (req: any, res: express.Response) => {
    try {
      const result:any = await authController.login(req.body)
      res.status(200).json({ result })
    } catch (err:any) {
      res.status(400).json({ message: err })
    }
  })

export default authRoute
