import { isEmpty } from "lodash";

import { MovieInterface } from "@/types";
import { MovieCard } from "@/components";

interface MovieListProps {
	data: MovieInterface[];
	title: string;
}

export const MovieList = (props: MovieListProps) => {
	const { data, title } = props;

	return isEmpty(data) ? null : (
		<div className="px-4 md:px-12 mt-4 space-y-8">
			<div>
				<p className="text-amber-100 text-md md:text-xl lg:text-2xl font-semibold mb-4">
					{title}
				</p>
				<div className="grid grid-cols-4 gap-2">
					{data.map((movie) => (
						<MovieCard key={movie.id} data={movie} />
					))}
				</div>
			</div>
		</div>
	);
};
