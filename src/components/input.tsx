import { ReactNode } from "react";
import IconNotification from "../assets/icons/notifitacion";

type InputProps = {
  placeholder?: string;
  icon?: ReactNode;
  size?: "sm" | "md" | "lg";
};
const Input = ({ placeholder = "", icon, size = "md" }: InputProps) => {
  return (
    <div className={`input__wrapper input__wrapper--size--${size} `}>
      <div className="input__icon">{icon}</div>
      <input
        className={`input ${icon && "input--hasIcon"}`}
        type="text"
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default Input;
