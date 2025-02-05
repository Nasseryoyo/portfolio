// app/page.tsx
import HeroSection from "@/components/Dashboard/HeroSection";
import FeaturedProjects from "@/components/Dashboard/Projects";
import Technologies from "@/components/Dashboard/Technologies";

export default function Home() {
	return (
		<div className="container mx-auto p-6 text-center">
			<HeroSection />
			<Technologies />
			<FeaturedProjects />
		</div>
	);
}
