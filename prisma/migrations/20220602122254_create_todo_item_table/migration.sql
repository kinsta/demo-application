-- CreateTable
CREATE TABLE "TodoItem" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "isDone" BOOLEAN NOT NULL,

    CONSTRAINT "TodoItem_pkey" PRIMARY KEY ("id")
);
