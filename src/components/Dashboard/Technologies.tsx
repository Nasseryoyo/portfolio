import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Technologies() {
	return (
		<section className="bg-background py-20">
			<div className="container mx-auto px-4 text-center">
				<Card className="bg-card border-none shadow-none">
					<CardHeader>
						<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
							I'm currently looking to join a cross-functional team
						</h2>
						<p className="text-lg md:text-xl text-muted-foreground mb-8">
							that values improving people's lives through accessible design
						</p>
						<div className="flex justify-center gap-4 flex-wrap">
							<Badge variant="secondary">Xd</Badge>
							<Badge>EXT</Badge>
							<Badge variant="destructive">AI</Badge>
							<Badge>EXPRESS</Badge>
							<Badge variant="outline">E</Badge>
						</div>
					</CardHeader>
				</Card>
			</div>
		</section>
	);
}
