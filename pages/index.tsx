export async function getServerSideProps() {
	return {
		redirect: {
			destination: "/auth",
		},
	};
}

const Home = () => {
	return <></>;
};

export default Home;
