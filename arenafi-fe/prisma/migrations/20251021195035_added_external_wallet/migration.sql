/*
  Warnings:

  - A unique constraint covering the columns `[connectedWallet]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "connectedWallet" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "User_connectedWallet_key" ON "User"("connectedWallet");
