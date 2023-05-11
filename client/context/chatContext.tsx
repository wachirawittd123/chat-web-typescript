import {
    createContext,
    useContext,
    useReducer,
} from "react";
import { ChatContextType } from "../interface/chat";
import { AuthContext } from "./authContext";
  
let context: ChatContextType = {
    data: {},
    dispatch: () => {return}
}

export const ChatContext = createContext<any>(context);

export const ChatContextProvider = ({ children }) => {
const { currentUser }:any = useContext(AuthContext);
const INITIAL_STATE:any = {
    chatId: "null",
    user: {},
};

const chatReducer = (state:any, action:any) => {
    console.log('action=======>',action)
    console.log('state=======>',state)
    console.log('currentUser=======>',currentUser)
    switch (action.type) {
    case "CHANGE_USER":
        return {
        user: action.payload,
        chatId:
            currentUser.uid > action.payload.uid
            ? currentUser.uid + action.payload.uid
            : action.payload.uid + currentUser.uid,
        };

    default:
        return state;
    }
};

const [state, dispatch] = useReducer<any>(chatReducer, INITIAL_STATE);

return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
        {children}
    </ChatContext.Provider>
);
};