/*
  Warnings:

  - You are about to drop the column `repolink` on the `Project` table. All the data in the column will be lost.
  - Added the required column `repoLink` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "repolink",
ADD COLUMN     "repoLink" TEXT NOT NULL;
