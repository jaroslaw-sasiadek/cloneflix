import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

import prismadb from "@/libs/prismadb";

const serverAuth = async (
	request: NextApiRequest,
	response: NextApiResponse
) => {
	const session = await getServerSession(request, response, authOptions);

	if (!session?.user?.email) throw new Error("Not signed in");

	const currentUser = await prismadb.user.findUnique({
		where: {
			email: session.user.email,
		},
	});

	if (!currentUser) throw new Error("Not signed in");
	return { currentUser };
};

export default serverAuth;
