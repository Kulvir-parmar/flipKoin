import Web3, { HttpProvider } from 'web3';
import { PrismaClient } from '@prisma/client';

const web3 = new Web3(new HttpProvider(process.env.ETH_NODE_URL as string));

const prisma = new PrismaClient();

export async function createWalletForUser(userId: string): Promise<string> {
	const account = web3.eth.accounts.create();

	// Store the account's private key and other details in your database
	const wallet = await prisma.userWallets.create({
		data: {
			privateKey: account.privateKey,
			address: account.address,
			user: {
				connect: {
					id: userId, // Pass the userId here
				},
			},
		},
	});
	return wallet.address;
}
