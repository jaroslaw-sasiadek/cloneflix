import { NextApiRequest, NextApiResponse } from "next";
import { without } from "lodash";

import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse
) {
	try {
		if (request.method === "POST") {
			const { currentUser } = await serverAuth(request, response);
			const { movieId } = request.body;
			const existingMovie = await prismadb.movie.findUnique({
				where: {
					id: movieId,
				},
			});

			if (!existingMovie) throw new Error("Invalid ID");

			const user = await prismadb.user.update({
				where: {
					email: currentUser.email || "",
				},
				data: {
					favoriteIds: {
						push: movieId,
					},
				},
			});

			return response.status(200).json(user);
		}

		if (request.method === "DELETE") {
			const { currentUser } = await serverAuth(request, response);

			const { movieId } = request.body;

			const existingMovie = await prismadb.movie.findUnique({
				where: {
					id: movieId,
				},
			});

			if (!existingMovie) throw new Error("Invalid ID");

			const updatedFavoriteIds = without(currentUser.favoriteIds, movieId);

			const updatedUser = await prismadb.user.update({
				where: {
					email: currentUser.email || "",
				},
				data: {
					favoriteIds: updatedFavoriteIds,
				},
			});
			return response.status(200).json(updatedUser);
		}
		return response.status(405).end();
	} catch (error) {
		console.log(error);
		return response.status(500).end();
	}
}
