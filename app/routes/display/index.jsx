// app/routes/display/index.jsx

import { useLoaderData, Form } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const loader = async () => {
  const clients = await prisma.client.findMany();
  return json(clients);
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const actionType = formData.get("actionType");
  const clientId = formData.get("clientId");

  if (actionType === "delete") {
    await prisma.client.delete({
      where: { id: clientId }, // שינוי ל- String
    });
  } else if (actionType === "edit") {
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const pets = formData.get("pets").split(",");

    await prisma.client.update({
      where: { id: clientId }, // שינוי ל- String
      data: { name, email, phone, pets },
    });
  }

  return redirect("/display");
};

export default function Clients() {
  const clients = useLoaderData();

  const handleEdit = (client) => {
    const name = prompt("שם:", client.name);
    const email = prompt("אימייל:", client.email);
    const phone = prompt("טלפון:", client.phone);
    const pets = prompt("חיות מחמד (מופרדות בפסיקים):", client.pets.join(", "));

    if (name && email && phone && pets !== null) {
      const form = document.createElement("form");
      form.method = "post";

      form.appendChild(createHiddenInput("clientId", client.id)); // client.id כ- String
      form.appendChild(createHiddenInput("actionType", "edit"));
      form.appendChild(createHiddenInput("name", name));
      form.appendChild(createHiddenInput("email", email));
      form.appendChild(createHiddenInput("phone", phone));
      form.appendChild(createHiddenInput("pets", pets));

      document.body.appendChild(form);
      form.submit();
    }
  };

  const createHiddenInput = (name, value) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    return input;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-green-200">
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">רשימת לקוחות</h2>
        {clients.length === 0 ? (
          <p className="text-gray-700">לא נמצאו לקוחות.</p>
        ) : (
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  שם
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  אימייל
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  טלפון
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  חיות מחמד
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  פעולות
                </th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {client.name}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {client.email}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {client.phone}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {client.pets.join(", ")}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <Form method="post" className="inline-block">
                      <input type="hidden" name="clientId" value={client.id} /> {/* client.id כ- String */}
                      <input type="hidden" name="actionType" value="delete" />
                      <button
                        type="submit"
                        className="text-red-600 hover:text-red-900"
                      >
                        מחיקה
                      </button>
                    </Form>
                    <button
                      type="button"
                      className="text-blue-600 hover:text-blue-900 ml-4"
                      onClick={() => handleEdit(client)}
                    >
                      עריכה
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
