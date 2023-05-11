import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../common/db"
import { ILogin } from "../interface/user"

const authController = {
    login: async (args: ILogin) => {
        console.log('args=======>',args)
        return new Promise((resolve, reject) => {
            signInWithEmailAndPassword(auth, args?.email, args.password)
            .then((userCredential:any) => {
               resolve(userCredential.user)
            })
            .catch((error) => reject(`${error.code} : ${error.message}`));
        })
    },
    logout: async () => {
        return new Promise((resolve, reject) => {
            signOut(auth)
            .then((user:any) => resolve("Logout success"))
            .catch((error) => reject(`${error.code} : ${error.message}`));
        })
    },
}

export { authController }