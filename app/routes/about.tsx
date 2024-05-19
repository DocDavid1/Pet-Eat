// app/routes/about.tsx
import { Link } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "About Us - Pet Clinic" },
    { name: "description", content: "Learn more about our Pet Clinic and our team." },
  ];
};

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-yellow-100 to-green-100">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        About Our Pet Clinic
      </h1>
      <div className="max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our Pet Clinic! We are dedicated to providing the best care for your beloved pets.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our team of experienced veterinarians and staff are here to ensure that your pet receives the highest quality of care in a friendly and compassionate environment.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Whether it's a routine check-up or a specialized treatment, we are equipped with the latest technology and knowledge to help your pet live a healthy and happy life.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Thank you for trusting us with your pet's health. We look forward to serving you and your furry friends!
        </p>
        <Link
          to="/"
          className="inline-block mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
