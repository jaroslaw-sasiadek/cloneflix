import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
}

export const Button = (props: ButtonProps) => {
	const { label } = props;
	return (
		<button className="mt-10 py-3 w-full text-amber-100 bg-amber-600 hover:bg-amber-500 focus:outline-amber-300 rounded-md transition">
			{label}
		</button>
	);
};
