"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
	{ name: "Projects", path: "/projects" },
	{ name: "About", path: "/about" },
	{ name: "Contact", path: "/contact" },
];

export default function Navbar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="sticky top-0 left-0 w-full bg-white shadow-md z-50">
			<div className=" mx-auto flex items-center justify-between py-4 px-6">
				{/* Logo */}
				<Link href="/" className="text-2xl font-bold text-gray-900">
					Portfolio
				</Link>

				{/* Desktop Navigation */}
				<ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
					{navLinks.map(({ name, path }) => (
						<li key={name}>
							<Link
								href={path}
								className={`transition ${
									pathname === path
										? "text-blue-600 font-semibold"
										: "hover:text-blue-500"
								}`}
							>
								{name}
							</Link>
						</li>
					))}
				</ul>

				{/* Mobile Menu */}
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild>
						<Button variant="ghost" size="icon" className="md:hidden">
							<Menu className="w-6 h-6" />
						</Button>
					</SheetTrigger>

					<SheetContent
						side="right"
						className="flex flex-col items-start space-y-4 p-6"
					>
						<SheetHeader>
							<SheetTitle>
								{" "}
								{/* Logo */}
								<Link
									href="/"
									className={`text-lg transition ${
										pathname === "/"
											? "text-blue-600 font-semibold"
											: "hover:text-blue-500"
									}`}
									onClick={() => setIsOpen(false)} // Close menu on link click
								>
									Portfolio
								</Link>
							</SheetTitle>
						</SheetHeader>
						{navLinks.map(({ name, path }) => (
							<Link
								key={name}
								href={path}
								className={`text-lg transition ${
									pathname === path
										? "text-blue-600 font-semibold"
										: "hover:text-blue-500"
								}`}
								onClick={() => setIsOpen(false)} // Close menu on link click
							>
								{name}
							</Link>
						))}
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
}
