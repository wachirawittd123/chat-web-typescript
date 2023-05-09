import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { auth, db, storage } from "../common/db"
import { ICreateUser} from "../interface/user"
import { collection, doc, setDoc } from "firebase/firestore"

const userController = {
    create: async (args: ICreateUser) => {
        let displayName = `users/${args?.fileName}`
        const newUser = await createUserWithEmailAndPassword(auth, args?.email, args?.password)
        const storageRef = await ref(storage, displayName)
        const uploadTask = await uploadBytesResumable(storageRef, args?.buffer, {contentType: args?.mimetype})
        const downloadUrl = await getDownloadURL(uploadTask.ref)
        await updateProfile(newUser.user, {
            displayName: displayName,
            photoURL: downloadUrl
        })
        await setDoc(doc(db, "users", newUser.user?.uid), {
            photoURL: downloadUrl,
            displayName: displayName,
            email: newUser?.user?.email
        })
        return newUser.user
    },
}

export { userController }