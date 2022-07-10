import { PrismaClient } from "@prisma/client";
import { encrypt } from "../../../lib/passwordCrypt";

const prisma = new PrismaClient();

export default async function handler(req, res) {
	if (req.method != "POST") {
		return res.status(400).json({ message: "Only POST method is allowed" });
	}

	const { email, password, name, image } = req.body;

	const user = await prisma.user.findUnique({
		where: {
			email: email,
		},
	});

	if (user) {
		await prisma.$disconnect();
		return res.status(403).json({ message: "User is already registered" });
	}

	const hashedPassword = await encrypt.cryptPassword(password);

	if (!hashedPassword) {
		await prisma.$disconnect();
		return res.status(500).json({ message: "Failed to hash password" });
	}

	const newUser = await prisma.user.create({
		data: {
			email,
			name,
			image,
			password: hashedPassword,
		},
	});

	await prisma.$disconnect();

	return res
		.status(201)
		.json({ message: "User created successfully", data: { user: newUser } });
}
