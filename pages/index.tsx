import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

import { InfoModal, Navbar, Billboard, MovieList } from "@/components";
import { useMovieList, useFavorites, useInfoModalStore } from "@/hooks";

export async function getServerSideProps(context: NextPageContext) {
	const session = await getSession(context);

	return !session
		? { redirect: { destination: "/auth", permanent: false } }
		: { props: {} };
}

const Home = () => {
	const { data: movies = [] } = useMovieList();
	const { data: favorites = [] } = useFavorites();
	const { isOpen, closeModal } = useInfoModalStore();

	return (
		<>
			<InfoModal visible={isOpen} onClose={closeModal} />
			<Navbar />
			<Billboard />
			<div className="pb-40">
				<MovieList title="Na topie" data={movies} />
				<MovieList title="Moja lista" data={favorites} />
			</div>
		</>
	);
};

export default Home;
