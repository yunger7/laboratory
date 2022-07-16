import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

import { encrypt } from "../../../lib/passwordCrypt";

const prisma = new PrismaClient();

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: "jwt",
		maxAge: 60 * 60 * 1, // 1 hour
	},
	providers: [
		CredentialsProvider({
			credentials: {
				email: { label: "Email", type: "email", placeholder: "nome@email.com" },
				password: { label: "Senha", type: "password" },
			},
			async authorize(credentials) {
				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
					select: {
						email: true,
						password: true,
						name: true,
						image: true,
					},
				});

				await prisma.$disconnect();

				if (user) {
					const passwordMatch = await encrypt.comparePassword(
						credentials.password,
						user.password
					);

					if (passwordMatch) {
						const { password, ...other } = user;
						return other;
					}
				} else {
					return null;
				}
			},
		}),
	],
	callbacks: {},
	secret: process.env["NEXTAUTH_SECRET"],
});
