// routes/add-client.jsx

import { Form, useActionData, redirect } from "@remix-run/react";
import { json } from "@remix-run/node";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const action = async ({ request }) => {
  if (request.method !== "POST") {
    return json({ error: "Method Not Allowed" }, { status: 405 });
  }

  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const pets = formData.get("pets").split(",");

  // Debugging logs
  console.log("Received data:", { name, email, phone, pets });

  // Basic validation
  if (typeof name !== "string" || typeof email !== "string" || typeof phone !== "string" || !Array.isArray(pets)) {
    return json({ errors: { message: "Invalid input" } }, { status: 400 });
  }

  try {
    await prisma.client.create({
      data: { name, email, phone, pets },
    });
    return redirect("/display");
  } catch (error) {
    // Log the error for debugging
    console.error("Error creating client:", error);

    let errorMessage = "An error occurred.";
    if (error.code === "P2002" && error.meta.target.includes("email")) {
      errorMessage = "Email must be unique.";
    }

    return json({ errors: { email: errorMessage } }, { status: 400 });
  }
};

export default function AddClient() {
  const actionData = useActionData();
  const errors = actionData?.errors || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-green-200">
      <Form method="post" className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Add New Client</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            required 
          />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            required 
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone:</label>
          <input 
            type="text" 
            id="phone" 
            name="phone" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            required 
          />
          {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="pets" className="block text-gray-700 font-bold mb-2">Pets (comma-separated):</label>
          <input 
            type="text" 
            id="pets" 
            name="pets" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="submit"
          >
            Add Client
          </button>
        </div>
      </Form>
    </div>
  );
}
