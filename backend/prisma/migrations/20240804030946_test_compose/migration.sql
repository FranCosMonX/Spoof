-- CreateTable
CREATE TABLE "Objects" (
    "idObjects" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "config" JSONB,
    "endPoint" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Objects_pkey" PRIMARY KEY ("idObjects")
);

-- CreateTable
CREATE TABLE "_ObjectsToUsuario" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Objects_idObjects_key" ON "Objects"("idObjects");

-- CreateIndex
CREATE UNIQUE INDEX "_ObjectsToUsuario_AB_unique" ON "_ObjectsToUsuario"("A", "B");

-- CreateIndex
CREATE INDEX "_ObjectsToUsuario_B_index" ON "_ObjectsToUsuario"("B");

-- AddForeignKey
ALTER TABLE "_ObjectsToUsuario" ADD CONSTRAINT "_ObjectsToUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "Objects"("idObjects") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ObjectsToUsuario" ADD CONSTRAINT "_ObjectsToUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
