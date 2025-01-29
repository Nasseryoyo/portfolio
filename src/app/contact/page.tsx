// File: pages/contact.tsx
"use client";
import { useState } from "react";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState<string | null>(null);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		// Simulate sending the message
		setStatus("Sending...");

		// Here, you could integrate an actual API or email service
		// Example:
		// await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });

		// Simulate success response
		setTimeout(() => {
			setStatus("Message sent successfully!");
			setFormData({ name: "", email: "", message: "" });
		}, 2000);
	};

	return (
		<div className="container mx-auto p-6">
			<h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
			<form
				onSubmit={handleSubmit}
				className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
			>
				<div className="mb-4">
					<label htmlFor="name" className="block text-gray-200">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
						className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
					/>
				</div>

				<div className="mb-4">
					<label htmlFor="email" className="block text-gray-200">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
						className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
					/>
				</div>

				<div className="mb-4">
					<label htmlFor="message" className="block text-gray-200">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
						rows={4}
						className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
					/>
				</div>

				<button
					type="submit"
					className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md"
				>
					Send Message
				</button>
			</form>

			{status && <div className="mt-4 text-center text-gray-200">{status}</div>}
		</div>
	);
}
