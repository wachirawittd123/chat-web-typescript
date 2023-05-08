import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import {
  FaInfo,
  FaCheck,
  FaExclamationTriangle,
  FaBug,
  FaExclamationCircle
} from "react-icons/fa";
import { IToast } from "../interface/common";

export const displayIcon = (type: string) => {
  switch (type) {
    case "success":
      return <FaCheck />;
    case "info":
      return <FaInfo />;
    case "error":
      return <FaExclamationCircle />;
    case "warning":
      return <FaExclamationTriangle />;
    default:
      return <FaBug />;
  }
};

const ToastMessage = (data: IToast) =>
  toast[data?.type](
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 1, fontSize: 15, padding: "8px 12px" }}>
        {data?.message}
      </div>
    </div>
  );


ToastMessage.dismiss = toast.dismiss;

export default ToastMessage;
