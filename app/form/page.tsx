"use client";

import React, { useState } from "react";

export const revalidate = 10;

interface ApiResponse {
  message: string;
}

export default function Form() {
  const [state, setState] = useState<ApiResponse | null>(null);

  const FormAction = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await fetch("http://localhost:3000/api", {
      method: "POST",
      body: formData,
    });
    const data = (await res.json()) as ApiResponse;
    setState(data);
  };

  return (
    <div className="bg-black text-orange min-h-screen flex items-center justify-center">
      <form
        onSubmit={FormAction}
        className="max-w-lg w-full mx-auto bg-gray-800 p-8 rounded-lg"
      >
        {state && <div className="text-md text-orange">{state.message}</div>}
        <h2 className="text-3xl mb-6 text-center">Application Form</h2>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="steam-profile" className="block mb-2 text-sm">
              Steam Profile
            </label>
            <input
              type="text"
              id="steam-profile"
              name="steam-profile"
              placeholder="Enter your Steam profile URL"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="region" className="block mb-2 text-sm">
              Region
            </label>
            <input
              type="text"
              id="region"
              name="region"
              placeholder="Enter your region"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="discordid" className="block mb-2 text-sm">
              Discord ID
            </label>
            <input
              type="text"
              id="discordid"
              name="discordid"
              placeholder="Enter your Discord ID"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded"
              required
            />
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-orange-500 text-black font-semibold rounded hover:bg-orange-600 transition-colors"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
