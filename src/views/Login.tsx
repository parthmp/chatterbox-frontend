import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Logo from './../assets/logo/logo.png';
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Loading02Icon, ViewOffIcon, ViewIcon } from "@hugeicons/core-free-icons";

import { Turnstile, useTurnstile } from "react-turnstile";
import env from "@/env";
import { toast, Toaster } from "sonner";
import ThemeChanger from "@/components/blocks/ThemeChanger";


export default function Login() {

	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const turnstile = useTurnstile();
	const [showPassword, setShowPassword] = useState<boolean>(false); // Add this state

	const handleFormSubmit = (e:any) : void => {
		e.preventDefault();
		setLoading(true);
		toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM"
        });
	}

	return (
		<>
				<ThemeChanger></ThemeChanger>
				<Toaster position="top-center" richColors />
				<div className="flex min-h-screen items-center justify-center">
					
					<Card className="w-full max-w-sm">
						<CardHeader>
							<div className="flex justify-center p-3">
								<img src={Logo} className="max-w-52 p-2" alt="Chatterbox" />
							</div>
							<CardTitle>Login to your account</CardTitle>
							<CardDescription>
								Enter your email below to login to your account
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleFormSubmit}>
								<div className="flex flex-col gap-6">
									<div className="grid gap-2">
										<Label htmlFor="email">Email</Label>
										<Input id="email" type="email" placeholder="m@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
									</div>
									<div className="grid gap-2">
										<div className="flex items-center">
											<Label htmlFor="password">Password</Label>
											<a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">Forgot your password?</a>
										</div>
										
										<div className="relative">
											<Input id="password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required className="pr-10" />
											<button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 flex items-center pr-3">
												<HugeiconsIcon icon={showPassword ? ViewIcon : ViewOffIcon} className="h-4 w-4 text-gray-500 hover:text-gray-700" />
											</button>
										</div>
									</div>
								</div>
								<br />
									<Turnstile theme="light" size="flexible" sitekey={env.TurnstileSiteKey}
										onVerify={(token) => {
											fetch("/login", {
											method: "POST",
											body: JSON.stringify({ token }),
											}).then((response) => {
												//if (!response.ok) turnstile.reset();
											});
										}}/>
								
								<Button type="submit" className="w-full mt-4" disabled={loading}>
									{loading && <HugeiconsIcon className="animate-spin" icon={Loading02Icon} />}
									Login
								</Button>
								
							</form>
						</CardContent>
					</Card>
				</div>
				</>
	)
}