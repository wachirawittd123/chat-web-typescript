
export interface ILogin {
    email: string
    password: string
}

export interface ICreateUser {
    email: string
    password: string
    fileName: string
    mimetype: string
    buffer: ArrayBuffer
    displayName: string
}