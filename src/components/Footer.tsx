// File: components/Footer.tsx
export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white p-6 mt-10">
			<div className="container mx-auto text-center">
				<h2 className="text-xl font-bold mb-2">Contact Me</h2>
				<p className="text-gray-400">
					Feel free to reach out for collaborations or just to say hi!
				</p>

				<div className="mt-4 space-x-4">
					<a
						href="https://github.com/yourusername"
						className="text-gray-400 hover:text-white"
					>
						GitHub
					</a>
					<a
						href="https://linkedin.com/in/yourprofile"
						className="text-gray-400 hover:text-white"
					>
						LinkedIn
					</a>
				</div>

				<form className="mt-6 max-w-md mx-auto">
					<input
						type="email"
						placeholder="Your email"
						className="w-full px-3 py-2 rounded text-black"
						required
					/>
					<textarea
						placeholder="Your message"
						className="w-full px-3 py-2 mt-2 rounded text-black"
						required
					/>
					<button
						type="submit"
						className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
					>
						Send Message
					</button>
				</form>
			</div>
		</footer>
	);
}
