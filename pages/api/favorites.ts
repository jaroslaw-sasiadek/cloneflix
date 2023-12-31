import { NextApiRequest, NextApiResponse } from "next";

import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse
) {
	try {
		if (request.method !== "GET") return response.status(405).end();

		const { currentUser } = await serverAuth(request, response);
		const favoritedMovies = await prismadb.movie.findMany({
			where: {
				id: {
					in: currentUser?.favoriteIds,
				},
			},
		});
		return response.status(200).json(favoritedMovies);
	} catch (error) {
		console.log(error);
		return response.status(500).end();
	}
}
