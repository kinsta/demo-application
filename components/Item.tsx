import type { FC } from "react";
import { Trash } from "./icons";

type Props = {
  id: string;
  content: string;
  isDone: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

const Item: FC<Props> = ({ id, content, isDone, onToggle, onDelete }) => {
  return (
    <li key={id} className="flex items-center gap-4 py-3 first:pt-0 last:pb-0">
      <input
        type="checkbox"
        id={id}
        checked={isDone}
        onChange={() => {}}
        onClick={onToggle}
      />
      <label
        className={`form-check-label inline-block text-gray-800 grow ${isDone ? 'line-through' : ''}`}
        htmlFor={id}
      >
        {content}
      </label>
      <button
        onClick={onDelete}
        className="group border border-slate-300 active:bg-slate-100 rounded-md px-3 py-1 shadow-sm focus:outline-none focus:border-red-100 focus:ring-red-100 focus:ring-1 sm:text-sm"
      >
        <Trash className="w-4 h-4 ml-auto cursor-pointer outline-none group-focus:text-red-400 hover:text-red-400" />
      </button>
    </li>
  );
};

Item.displayName = "Item";

export default Item;
