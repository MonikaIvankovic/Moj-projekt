import { ButtonHTMLAttributes } from "react";

type FloatingButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

const FloatingButton = ({ ...props }: FloatingButtonProps) => {
  return (
    <button className="btn--floating" {...props}>
      +
    </button>
  );
};

export default FloatingButton;
