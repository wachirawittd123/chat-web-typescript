
export interface IToast {
    message: string
    type: string
}

export interface IError {
    message: string
    mTop?: string
}

export interface ICookieUser {
    uid: string
    email: string
}