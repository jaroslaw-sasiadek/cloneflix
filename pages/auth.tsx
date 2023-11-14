import { useState, useCallback } from "react";

import { Logo, Button, Input } from "@/components";

const Auth = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [variant, setVariant] = useState("login");
	const toggleVariant = useCallback(() => {
		setVariant((currentVariant) =>
			currentVariant === "login" ? "register" : "login"
		);
	}, []);

	function login() {
		throw new Error("Function not implemented.");
	}

	function register() {
		throw new Error("Function not implemented.");
	}

	return (
		<div className="relative w-full h-full lg:bg-[url('/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
			<div className="w-full h-full bg-amber-950 lg:bg-opacity-50">
				<nav className="px-12 py-5">
					<Logo style="text-6xl" />
				</nav>
				<div className="flex justify-center">
					<form className="px-16 py-16 mt-2 w-full self-center bg-amber-900 bg-opacity-60 rounded-md lg:w-2/5 lg:max-w-md">
						<h2 className="mb-8 text-amber-100 text-4xl font-semibold">
							{variant === "login" ? "Zaloguj się!" : "Zarejestruj się!"}
						</h2>
						<div className="flex flex-col gap-4">
							{variant === "register" && (
								<Input
									id="name"
									type="text"
									label="Nazwa użytkownika"
									value={name}
									onChange={(event) => setName(event.target.value)}
								/>
							)}
							<Input
								id="email"
								type="email"
								label="Email"
								value={email}
								onChange={(event) => setEmail(event.target.value)}
							/>
							<Input
								type="password"
								id="password"
								label="Hasło"
								value={password}
								onChange={(event) => setPassword(event.target.value)}
							/>
						</div>
						<Button
							label={variant === "login" ? "Zaloguj" : "Zarejestruj"}
							onClick={variant === "login" ? login : register}
						/>
						<p className="mt-10 text-amber-200">
							{variant === "login"
								? "Pierwszy raz na Cloneflix?"
								: "Masz już konto?"}
						</p>
						<button
							onClick={(event) => {
								event.preventDefault();
								toggleVariant();
							}}
							className="text-white hover:underline cursor-pointer"
						>
							{variant === "login" ? "Załóż konto!" : "Zaloguj się!"}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Auth;
