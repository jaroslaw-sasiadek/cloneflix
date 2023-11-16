import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
	BellIcon,
	ChevronDownIcon,
	MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

import { AccountMenu, Logo, MobileMenu, NavbarItem } from ".";

export const Navbar = () => {
	const [showAccountMenu, setShowAccountMenu] = useState(false);
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [showBackground, setShowBackground] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 66) {
				setShowBackground(true);
			} else {
				setShowBackground(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleAccountMenu = useCallback(() => {
		setShowAccountMenu((current) => !current);
	}, []);

	const toggleMobileMenu = useCallback(() => {
		setShowMobileMenu((current) => !current);
	}, []);

	return (
		<nav className="fixed w-full z-50">
			<div
				className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
					showBackground ? "bg-amber-900 bg-opacity-90" : ""
				}`}
			>
				<Logo />
				<div className="flex-row ml-8 gap-6 hidden lg:flex">
					<NavbarItem label="Home" active />
					<NavbarItem label="Serie" />
					<NavbarItem label="Filmy" />
					<NavbarItem label="Nowe i popularne" />
					<NavbarItem label="Moja lista" />
				</div>
				<div
					onClick={toggleMobileMenu}
					className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
				>
					<p className="text-amber-300 text-sm">Browse</p>
					<ChevronDownIcon
						className={`w-4 text-amber-300 fill-amber-300 transition ${
							showMobileMenu ? "rotate-180" : "rotate-0"
						}`}
					/>
					<MobileMenu visible={showMobileMenu} />
				</div>
				<div className="flex flex-row ml-auto gap-7 items-center">
					<div className="text-gray-300 hover:text-gray-400 cursor-pointer transition">
						<MagnifyingGlassIcon className="w-6" />
					</div>
					<div className="text-gray-300 hover:text-gray-400 cursor-pointer transition">
						<BellIcon className="w-6" />
					</div>
					<div
						onClick={toggleAccountMenu}
						className="flex flex-row items-center gap-2 cursor-pointer relative"
					>
						<div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
							<Image src="/avatar.png" width={50} height={50} alt="avatar" />
						</div>
						<ChevronDownIcon
							className={`w-4 text-gray-300 fill-gray-300 transition ${
								showAccountMenu ? "rotate-180" : "rotate-0"
							}`}
						/>
						<AccountMenu visible={showAccountMenu} />
					</div>
				</div>
			</div>
		</nav>
	);
};
