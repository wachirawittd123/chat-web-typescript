import { Dispatch } from "react";

export interface MyAction {
    type: string;
    payload: string;
}

export interface ChatContextType {
    data: any;
    dispatch: Dispatch<MyAction>;
}