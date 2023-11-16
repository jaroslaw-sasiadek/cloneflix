import { useCallback, useMemo } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/outline";
import axios from "axios";

import { useFavorites, useCurrentUser } from "@/hooks";

interface FavoriteButtonProps {
	movieId: string;
}

export const FavoriteButton = (props: FavoriteButtonProps) => {
	const { movieId } = props;

	const { mutate: mutateFavorites } = useFavorites();
	const { data: currentUser, mutate } = useCurrentUser();

	const isFavorite = useMemo(() => {
		const list = currentUser?.favoriteIds || [];
		return list.includes(movieId);
	}, [currentUser, movieId]);

	const toggleFavorites = useCallback(async () => {
		let response;

		if (isFavorite)
			response = await axios.delete("/api/favorite", { data: { movieId } });
		else {
			response = await axios.post("/api/favorite", { movieId });
		}

		const updatedFavoriteIds = response?.data?.favoriteIds;

		mutate({
			...currentUser,
			favoriteIds: updatedFavoriteIds,
		});
		mutateFavorites();
	}, [movieId, isFavorite, currentUser, mutate, mutateFavorites]);

	const Icon = isFavorite ? CheckIcon : PlusIcon;

	return (
		<div
			onClick={toggleFavorites}
			className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-amber-100 border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
		>
			<Icon className="text-amber-100 group-hover/item:text-neutral-300 w-4 lg:w-6" />
		</div>
	);
};