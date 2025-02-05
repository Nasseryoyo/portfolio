import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function HeroSection() {
	return (
		<section className="bg-background py-20">
			{" "}
			{/* Replaced gradient with bg-background */}
			<div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
				{/* Left Side: Image */}
				<div className="md:w-1/2 mb-10 md:mb-0">
					<div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-primary/20">
						<Image
							src="/path/to/your/avatar.jpg"
							alt="Youssef Nasser"
							fill
							className="object-cover"
						/>
					</div>
				</div>

				{/* Right Side: Text Content */}
				<div className="md:w-1/2 text-center md:text-left space-y-6">
					<h1 className="text-4xl md:text-5xl font-bold text-foreground">
						Hello! I Am Youssef Nasser
					</h1>

					<p className="text-lg md:text-xl text-muted-foreground">
						A Software Engineer who <br />
						<span className="font-bold underline decoration-primary">
							solves problems with code...
						</span>
					</p>

					<p className="text-base md:text-lg text-muted-foreground">
						Because if the code doesn't work, what else can?
					</p>

					<Card className="bg-card">
						{" "}
						{/* Uses card background from config */}
						<div className="p-4">
							<p className="text-card-foreground font-medium">
								I'm an Undergraduate Software Engineer. | <br />
								Currently studying at{" "}
								<span className="font-bold text-primary">
									German University in Cairo
								</span>
							</p>
						</div>
					</Card>

					<div className="space-y-4">
						<p className="text-base md:text-lg text-muted-foreground">
							A passionate learner with strong problem-solving skills,
							programming proficiency, and excellent communication skills.
						</p>
						<p className="text-base md:text-lg text-muted-foreground">
							I build meaningful and efficient digital solutions that create an
							equilibrium between user needs and business goals.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
