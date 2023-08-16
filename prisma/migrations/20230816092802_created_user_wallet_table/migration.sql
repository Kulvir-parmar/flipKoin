-- CreateTable
CREATE TABLE "UserWallets" (
    "id" TEXT NOT NULL,
    "publicKey" TEXT NOT NULL,
    "privateKey" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserWallets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserWallets" ADD CONSTRAINT "UserWallets_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
