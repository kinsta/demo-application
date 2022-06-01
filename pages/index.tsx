import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import type { KeyboardEventHandler } from "react";
import { Item } from "../types";
import List from "../components/List";
import Input from "../components/Input";
import Button from "../components/Button";

const Home: NextPage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [textValue, setTextValue] = useState("");

  const handleAdd = () => {
    if (!textValue || items.length >= 8) {
      return;
    }

    setItems((state) => [
      ...state,
      {
        id: `${textValue[0]}-${state.length - 1}`,
        content: textValue,
        isDone: false,
      },
    ]);
    setTextValue("");
  };

  const handleInputOnKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.code === "Enter" && textValue) {
      handleAdd();
    }
  };

  const handleListChange = ({
    id,
    action,
  }: {
    id: string;
    action: "change" | "delete";
  }) => {
    const selectedItem = items.find((item) => item.id === id);

    if (!selectedItem) {
      return;
    }

    if (action === "change") {
      setItems(
        items.map((item) =>
          item.id === selectedItem.id
            ? {
                ...selectedItem,
                isDone: !selectedItem.isDone,
              }
            : item
        )
      );
    } else if (action === "delete") {
      setItems(items.filter((item) => item.id !== selectedItem.id));
    }
  };

  return (
    <div>
      <Head>
        <title>TODO application | Kinsta</title>
        <meta name="description" content="Dead simple TODO application." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex items-center justify-center bg-slate-50">
        <div className="grid gap-y-4 bg-white rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl min-w-[400px]">
          <h1 className="font-bold mb-4">Checklist</h1>
          <div className="flex items-center">
            <Input
              isDisabled={items.length >= 8}
              hasAutoFocus={true}
              placeholder="Type something here"
              value={textValue}
              onChange={(value) => setTextValue(value)}
              onKeyDown={handleInputOnKeyDown}
            />
            <Button
              isDisabled={!textValue.length || items.length >= 8}
              onClick={handleAdd}
            >
              Add
            </Button>
          </div>
          <List value={items} onChange={handleListChange} />
        </div>
      </main>

      <footer className="fixed bottom-8 left-1/2 -translate-x-1/2">
        Proudly hosted by {" "}
        <a
          href="https://kinsta.com"
          target="_blank"
          rel="noreferrer noopener nofollow"
          style={{ color: "#5333ed" }}
          className="hover:underline underline-offset-1"
        >
          Kinsta
        </a>
      </footer>
    </div>
  );
};

export default Home;
