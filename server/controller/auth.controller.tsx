import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../common/db"
import { ILogin } from "../interface/user"

const authController = {
    login: async (args: ILogin) => {
        return new Promise((resolve, reject) => {
            signInWithEmailAndPassword(auth, args?.email, args.password)
            .then((userCredential:any) => resolve(userCredential.user))
            .catch((error) => reject(`${error.code} : ${error.message}`));
        })
    },
    // logout: async (IdAdmin: string) => {
    //     const admin = await Admin.findOne({ where: { IdAdmin: IdAdmin } })
    //     if (!admin) throw new Error("ไม่พบข้อมูลผู้ใช้งาน")
    //     return admin.get().profile
    // },
}

export { authController }