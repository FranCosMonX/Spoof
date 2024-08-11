/*
  Warnings:

  - You are about to drop the `File` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Objects` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ObjectsToUsuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_userId_fkey";

-- DropForeignKey
ALTER TABLE "_ObjectsToUsuario" DROP CONSTRAINT "_ObjectsToUsuario_A_fkey";

-- DropForeignKey
ALTER TABLE "_ObjectsToUsuario" DROP CONSTRAINT "_ObjectsToUsuario_B_fkey";

-- DropTable
DROP TABLE "File";

-- DropTable
DROP TABLE "Objects";

-- DropTable
DROP TABLE "_ObjectsToUsuario";

-- CreateTable
CREATE TABLE "Objeto" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "url" TEXT NOT NULL,
    "tags" TEXT[],
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Objeto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Objeto_id_key" ON "Objeto"("id");

-- AddForeignKey
ALTER TABLE "Objeto" ADD CONSTRAINT "Objeto_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
