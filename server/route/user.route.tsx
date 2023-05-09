import express from "express"
import multer from "multer";
import { userController } from "../controller/user.controller"

const userRoute = express.Router()

const upload = multer({ storage: multer.memoryStorage() })

userRoute
  .post("/create", upload.single("file"), async (req: any, res: express.Response) => {
    try {
      console.log('req.file=======>',typeof req.file?.buffer)
      const result:any = await userController.create({
        ...req.body,
        fileName: req.file?.originalname,
        mimetype: req.file?.mimetype,
        buffer: req.file?.buffer
      })
      res.status(200).json({ result })
    } catch (err:any) {
      res.status(400).json({ message: err })
    }
  })

export default userRoute
