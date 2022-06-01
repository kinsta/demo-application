import type { FC } from "react";
import { Item } from "../types";
import ListItem from "./Item";

type Props = {
  value: Item[];
  onChange: ({
    id,
    action,
  }: {
    id: string;
    action: "change" | "delete";
  }) => void;
};

const List: FC<Props> = ({ value: items, onChange }) => {
  return (
    <ul role="list" className="mt-4 divide-y divide-slate-200">
      {items.length ? (
        items.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            content={item.content}
            isDone={item.isDone}
            onToggle={() => onChange({ id: item.id, action: "change" })}
            onDelete={() => onChange({ id: item.id, action: "delete" })}
          />
        ))
      ) : (
        <li className="text-sm text-center">Your checklist is empty. 😌</li>
      )}
    </ul>
  );
};

List.displayName = "List";

export default List;
