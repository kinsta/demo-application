import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../shared/db";

const apiRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const itemData = JSON.parse(req.body);

    const savedItem = await prisma.todoItem.create({
      data: itemData,
    });

    res.json(savedItem);
  } else if (req.method === "PUT") {
    const itemData = JSON.parse(req.body);

    const savedItem = await prisma.todoItem.update({
      where: {
        id: itemData.id,
      },
      data: {
        isDone: itemData.isDone,
      },
    });

    res.json(savedItem);
  } else if (req.method === "DELETE") {
    const idItem = JSON.parse(req.body);

    const deletedItem = await prisma.todoItem.delete({ where: { id: idItem } });

    res.json(deletedItem)
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
};

export default apiRoute;
