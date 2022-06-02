import { Item } from "../types";

const BASE_URL = "/api/item";

const mutate = async ({
  method,
  body,
}: {
  method: "POST" | "PUT" | "DELETE";
  body: string;
}) => {
  const response = await fetch(BASE_URL, {
    method,
    body,
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

export const useItemApiRoutes = () => {
  const addTodoItem = ({
    content,
    isDone,
  }: {
    content: string;
    isDone: boolean;
  }) =>
    mutate({
      method: "POST",
      body: JSON.stringify({ content, isDone }),
    });
  const toggleTodoItem = async (item: Item) =>
    mutate({
      method: "PUT",
      body: JSON.stringify(item),
    });
  const deleteTodoItem = async (idItem: string) =>
    mutate({
      method: "DELETE",
      body: JSON.stringify(idItem),
    });

  return {
    addTodoItem,
    toggleTodoItem,
    deleteTodoItem,
  };
};
