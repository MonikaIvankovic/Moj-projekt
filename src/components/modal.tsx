import { ReactNode } from "react";
import IconCancel from "../assets/icons/cancel";
import Button from "./button";

type ModalType = {
  children: ReactNode;
};

const Modal = ({ children }: ModalType) => {
  return (
    <div>
      <div className="modal">
        <div className="modal__header">
          <IconCancel /> Click me to close Modal
        </div>
        <div className=" modal__body">{children}</div>
        <div className="modal__footer">
          <Button text="OK" />
          <Button text="Cancel" />
        </div>
      </div>
    </div>
  );
};
export default Modal;
