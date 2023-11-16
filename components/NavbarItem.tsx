interface NavbarItemProps {
	label: string;
	active?: boolean;
}

export const NavbarItem = (props: NavbarItemProps) => {
	const { label, active } = props;
	return (
		<div
			className={
				active
					? "text-amber-300 cursor-default"
					: "text-gray-300 hover:text-gray-400 cursor-pointer transition"
			}
		>
			{label}
		</div>
	);
};
