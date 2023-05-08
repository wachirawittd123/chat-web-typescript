import express, { Application } from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import bodyParser from "body-parser"
import { NODE_ENV, PORT } from "./common/setting"
import baseRouter from "./route"

const next = require('next')

const dev = NODE_ENV !== "production"
const app = next({ dev, dir: "./client" });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(async() => {
    const server: Application = express();
    server.use(express.json({ limit: "100mb" }))
    server.use(express.urlencoded({ extended: true }))
    server.use(bodyParser.json())
    server.use(cookieParser())
    server.use(cors({
      credentials: true,
      origin: true,
      exposedHeaders: '*'
    }))

    server.use(baseRouter)

    server.get("*", (req: express.Request, res: express.Response) => {
      return handle(req, res);
    });
    
    server.listen(PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}`)
        console.log(`🚀 Database ready at PORT 27017`)
    });
  })
  .catch((ex: any) => {
    console.error(ex.stack);
    process.exit(1);
  })

