import express from "express"

export const setAuthCookie = (
    res: express.Response,
    user: any
  ): express.Response => {
    if (user) {
      res.cookie(
        "user", 
        {
            uid: user?.localId,
            email: user?.email,
            photoUrl: user?.photoUrl
        }, 
        {httpOnly: true}
      )
    }
    return res
  }
  
  export const resetAuthCookie = (res: express.Response): express.Response => {
    res.clearCookie("user")
    return res
  }