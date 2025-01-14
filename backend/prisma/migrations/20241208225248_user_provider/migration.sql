-- CreateEnum
CREATE TYPE "Provider" AS ENUM ('GITHUB');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "provider" "Provider";
