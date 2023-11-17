import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import { useMovie } from "@/hooks";

const Watch = () => {
	const router = useRouter();
	const { movieId } = router.query;

	const { data } = useMovie(movieId as string);

	return (
		<div className="h-screen w-screen bg-amber-950">
			<nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-amber-950 bg-opacity-70">
				<ArrowLeftIcon
					onClick={() => router.push("/")}
					className="w-4 md:w-10 text-amber-100 cursor-pointer hover:opacity-80 transition"
				/>
				<p className="text-amber-100 text-1xl md:text-3xl font-bold">
					<span className="font-light">Oglądasz:</span> {data?.title}
				</p>
			</nav>
			<video
				className="h-full w-full"
				autoPlay
				controls
				src={data?.videoUrl}
			></video>
		</div>
	);
};

export default Watch;
