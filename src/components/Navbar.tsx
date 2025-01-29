"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook to get the current pathname
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

export default function Navbar() {
	return (
		<NavigationMenu className="hidden md:flex bg-gray-900 flex flex-row space-x-6 items-center bg-gray-900 text-white p-4 shadow-md flex flex-col md:flex-row justify-between items-center w-fit mx-auto rounded-full">
			<Link href="/" legacyBehavior passHref>
				<NavigationMenuLink
					className="group 
					inline-flex h-9 w-max items-center
					justify-center rounded-md bg-gray-900 px-4 py-2 text-sm
					font-medium transition-colors
					hover:bg-accent hover:text-accent-foreground
					focus:bg-accent focus:text-accent-foreground focus:outline-none
					disabled:pointer-events-none disabled:opacity-50
					data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
				>
					Home
				</NavigationMenuLink>
			</Link>
			<Link href="/projects" legacyBehavior passHref>
				<NavigationMenuLink
					className="group 
					inline-flex h-9 w-max items-center
					justify-center rounded-md bg-gray-900 px-4 py-2 text-sm
					font-medium transition-colors
					hover:bg-accent hover:text-accent-foreground
					focus:bg-accent focus:text-accent-foreground focus:outline-none
					disabled:pointer-events-none disabled:opacity-50
					data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
				>
					Projects
				</NavigationMenuLink>
			</Link>

			<Link href="/about" legacyBehavior passHref>
				<NavigationMenuLink
					className="group 
					inline-flex h-9 w-max items-center
					justify-center rounded-md bg-gray-900 px-4 py-2 text-sm
					font-medium transition-colors
					hover:bg-accent hover:text-accent-foreground
					focus:bg-accent focus:text-accent-foreground focus:outline-none
					disabled:pointer-events-none disabled:opacity-50
					data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
				>
					About
				</NavigationMenuLink>
			</Link>

			<Link href="/contact" legacyBehavior passHref>
				<NavigationMenuLink
					className="group 
					inline-flex h-9 w-max items-center
					justify-center rounded-md bg-gray-900 px-4 py-2 text-sm
					font-medium transition-colors
					hover:bg-accent hover:text-accent-foreground
					focus:bg-accent focus:text-accent-foreground focus:outline-none
					disabled:pointer-events-none disabled:opacity-50
					data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
				>
					Contact
				</NavigationMenuLink>
			</Link>
		</NavigationMenu>
	);
}
