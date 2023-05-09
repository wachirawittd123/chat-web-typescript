import express from "express"
import { resetAuthCookie, setAuthCookie } from "../common/auth.service"
import { authController } from "../controller/auth.controller"

const authRoute = express.Router()

authRoute
  .post("/login", async (req: any, res: express.Response) => {
    try {
      const result:any = await authController.login(req.body)
      setAuthCookie(res,result?.reloadUserInfo)
      res.status(200).json({ result })
    } catch (err:any) {
      res.status(400).json({ message: err })
    }
  })
  .post("/logout", async (req: any, res: express.Response) => {
    try {
      const result:any = await authController.logout()
      resetAuthCookie(res)
      res.status(200).json({ result })
    } catch (err:any) {
      res.status(400).json({ message: err })
    }
  })

export default authRoute
