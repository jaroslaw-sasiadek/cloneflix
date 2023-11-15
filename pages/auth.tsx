import { useState, useCallback } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";

import { Logo, Button, Input } from "@/components";

const Auth = () => {
	const router = useRouter();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [variant, setVariant] = useState("login");
	const toggleVariant = useCallback(() => {
		setVariant((currentVariant) =>
			currentVariant === "login" ? "register" : "login"
		);
	}, []);

	const login = useCallback(async () => {
		try {
			await signIn("credentials", {
				email,
				password,
				redirect: false,
				callbackUrl: "/",
			});

			router.push("/");
		} catch (error) {
			console.log(error);
		}
	}, [email, password, router]);

	const register = useCallback(async () => {
		try {
			await axios.post("/api/register", {
				email,
				name,
				password,
			});

			login();
		} catch (error) {
			console.log(error);
		}
	}, [email, name, password, login]);

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
							onClick={(event) => {
								event.preventDefault();
								variant === "login" ? login() : register();
							}}
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
