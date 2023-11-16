import { useRouter } from "next/router";
import { PlayIcon } from "@heroicons/react/24/solid";

interface PlayButtonProps {
	movieId: string;
}

export const PlayButton = (props: PlayButtonProps) => {
	const { movieId } = props;
	const router = useRouter();

	return (
		<button
			onClick={() => router.push(`/watch/${movieId}`)}
			className="bg-amber-100 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-gray-300 transition"
		>
			<PlayIcon className="w-4 md:w-7 text-amber-950 mr-1" />
			Play
		</button>
	);
};
