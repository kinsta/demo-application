import type { FC, KeyboardEventHandler } from "react";

type Props = {
  isDisabled?: boolean;
  hasAutoFocus?: boolean;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
};

const Input: FC<Props> = ({
  isDisabled = false,
  hasAutoFocus = false,
  placeholder,
  value,
  onChange,
  onKeyDown,
}) => (
  <input
    type="text"
    disabled={isDisabled}
    autoFocus={hasAutoFocus}
    placeholder={placeholder}
    className="grow placeholder:italic placeholder:text-slate-400 disabled:bg-slate-100 disabled:text-slate-400 border border-slate-300 rounded-md p-2 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    onKeyDown={onKeyDown}
  />
);

Input.displayName = "Input";

export default Input;
