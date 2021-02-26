import { useForm } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("contact-form");

  if (state.succeeded) {
    return <p>Thanks! I'll be in touch.</p>;
  }

  return (
    <form name="contact" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-bold text-gray-700">
          Name
        </label>
        <input
          required
          name="name"
          type="text"
          className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:border-blue-300"
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="email"
          className="block text-sm font-bold text-gray-700"
        >
          Email
        </label>
        <input
          required
          name="email"
          type="email"
          className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:border-blue-300"
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="message"
          className="block text-sm font-bold text-gray-700"
        >
          Message
        </label>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:border-blue-300"
        />
      </div>
      <div className="flex justify-center">
        <button
          disabled={state.submitting}
          className="inline-block w-full px-3 py-2 font-medium text-white no-underline bg-blue-600 shadow-sm rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
