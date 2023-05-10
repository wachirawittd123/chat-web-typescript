import { IError } from "../interface/common";

export const ErrorMessage = (data: IError) => {
    return <p className="text-xs text-red-500" style={{ marginTop: data?.mTop || "0px" }}>{data?.message}</p>
}