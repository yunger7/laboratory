import bcrypt from "bcrypt";

const cryptPassword = async password => {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashword = await bcrypt.hash(password, salt);

		return hashword;
	} catch (error) {
		throw error;
	}
};

const comparePassword = async (plainPassword, hashword) => {
	try {
		const isMatch = await bcrypt.compare(plainPassword, hashword);

		return isMatch;
	} catch (error) {
		throw error;
	}
};

export const encrypt = {
	cryptPassword,
	comparePassword,
};
