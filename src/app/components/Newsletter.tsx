import React from "react";
export default function Newsletter() {
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission
  };
  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-normal mb-4">
          Join the club and get the benefits
        </h2>

        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full sm:w-80 px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-[#2A254B]"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-[#2A254B] text-white rounded hover:bg-[#2A254B]/90 transition-colors"
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
}