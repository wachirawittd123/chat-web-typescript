import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { auth, db, storage } from "../common/db"
import { ICreateUser} from "../interface/user"
import { doc, setDoc } from "firebase/firestore"

const userController = {
    create: async (args: ICreateUser) => {
        let pathName = `users/${args?.fileName}`
        const newUser = await createUserWithEmailAndPassword(auth, args?.email, args?.password)
        const storageRef = await ref(storage, pathName)
        const uploadTask = await uploadBytesResumable(storageRef, args?.buffer, {contentType: args?.mimetype})
        const downloadUrl = await getDownloadURL(uploadTask.ref)
        await updateProfile(newUser.user, {
            displayName: args?.displayName,
            photoURL: downloadUrl
        })
        await setDoc(doc(db, "users", newUser.user?.uid), {
            photoURL: downloadUrl,
            displayName: args?.displayName,
            email: newUser?.user?.email,
            uid: newUser.user?.uid
        })
        return newUser.user
    },
    userById: async () => {
        return new Promise((resolve) => onAuthStateChanged(auth, (user:any) => {
            resolve({...user?.reloadUserInfo, uid: user?.reloadUserInfo?.localId})
        }))
    },
}

export { userController }