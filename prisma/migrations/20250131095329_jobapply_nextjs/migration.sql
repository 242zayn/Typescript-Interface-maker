-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "hrEmail" TEXT NOT NULL,
    "hrMobile" TEXT NOT NULL,
    "currentStatus" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
