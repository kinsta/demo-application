import type { FC, ReactNode } from "react";

type Props = {
  isDisabled?: boolean;
  onClick: () => void;
  children: ReactNode;
};

const Button: FC<Props> = ({ isDisabled, onClick, children }) => (
  <button
    disabled={isDisabled}
    className="ml-4 border disabled:bg-slate-100 disabled:text-slate-400 border-slate-300 active:bg-slate-100 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm"
    onClick={onClick}
  >
    {children}
  </button>
);

Button.displayName = "Button";

export default Button;
