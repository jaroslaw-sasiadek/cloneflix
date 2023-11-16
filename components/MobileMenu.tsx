interface MobileMenuProps {
	visible?: boolean;
}

export const MobileMenu = (props: MobileMenuProps) => {
	const { visible } = props;

	return !visible ? null : (
		<div className="bg-black bg-opacity-50 w-56 absolute top-8 left-0 py-5 flex-col border-2 border-amber-800 flex">
			<div className="flex flex-col gap-4">
				<div className="px-3 text-center text-amber-100 hover:underline">
					Home
				</div>
				<div className="px-3 text-center text-amber-100 hover:underline">
					Serie
				</div>
				<div className="px-3 text-center text-amber-100 hover:underline">
					Filmy
				</div>
				<div className="px-3 text-center text-amber-100 hover:underline">
					Nowe i popularne
				</div>
				<div className="px-3 text-center text-amber-100 hover:underline">
					Moja lista
				</div>
			</div>
		</div>
	);
};
