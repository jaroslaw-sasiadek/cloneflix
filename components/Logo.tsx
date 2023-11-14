interface LogoProps {
	style?: string;
}

export const Logo = (props: LogoProps) => {
	const { style } = props;
	return (
		<span
			className={`text-amber-500 font-medium uppercase select-none ${style}`}
		>
			Cloneflix
		</span>
	);
};
