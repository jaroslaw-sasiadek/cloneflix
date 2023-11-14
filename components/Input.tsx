import { ChangeEventHandler, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

export const Input = (props: InputProps) => {
	const { label } = props;

	return (
		<label className="relative">
			<input
				autoComplete="off"
				className="
					block px-6 pt-6 pb-1 w-full 
					text-md text-amber-100
					bg-amber-800
					appearance-none rounded-md 
					focus:outline-none focus:ring-0 
					peer
					invalid:border-b-1"
				placeholder=" "
			/>
			<span
				className="
					absolute 
					top-4 
					left-6
					text-md text-amber-100
					duration-150 transform -translate-y-3 scale-75 
					z-10 origin-[0] 
					peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
			>
				{label}
			</span>
		</label>
	);
};
