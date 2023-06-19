import { ReactNode } from "react";
import IconNotification from "../assets/icons/notifitacion";

type InputProps = {
  placeholder?: string;
  icon?: ReactNode;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
};
const Input = ({
  placeholder = "",
  icon,
  size = "md",
  disabled = false,
}: InputProps) => {
  return (
    <div
      className={`input__wrapper input__wrapper--size--${size}
     
     `}
    >
      <div className="input__icon">{icon}</div>
      <input
        className={`input ${icon && "input--hasIcon"}  `}
        disabled={disabled}
        type="text"
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default Input;
