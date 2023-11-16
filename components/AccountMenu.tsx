/* eslint-disable @next/next/no-img-element */

import { signOut } from "next-auth/react";

import { useCurrentUser } from "@/hooks";

interface AccountMenuProps {
	visible?: boolean;
}

export const AccountMenu = (props: AccountMenuProps) => {
	const { visible } = props;
	const { data: currentUser } = useCurrentUser();

	return !visible ? null : (
		<div className="bg-black bg-opacity-50 w-56 absolute top-14 right-0 py-5 flex-col border-2 border-amber-800 flex">
			<div className="flex flex-col gap-3">
				<div className="px-4 group/item flex flex-row gap-3 items-center w-full">
					<img src="/avatar.png" width={60} height={60} alt="avatar" />
					<p className="text-amber-100 text-sm group-hover/item:underline">
						{currentUser?.name}
					</p>
				</div>
			</div>
			<hr className="bg-amber-800 border-0 h-px my-4" />
			<div
				onClick={() => signOut()}
				className="px-3 text-center text-amber-100 text-sm hover:underline"
			>
				Wyloguj się z Cloneflix
			</div>
		</div>
	);
};
