import React from 'react'
import { Link } from "react-scroll";

function Hero2() {
  return (

  <section id="features" className="py-20 bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
          Powerful Features for Text Sharing
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Everything you need to share and manage your text snippets efficiently
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 animate__animated animate__fadeInUp">
          <div className="bg-[#007bff] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-100">
            Instant Code Generation
          </h3>
          <p className="text-gray-300">
            Convert your text into shareable code snippets with a single click.
          </p>
        </div>

        <div className="bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 animate__animated animate__fadeInUp animate__delay-1s">
          <div className="bg-[#007bff] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-100">
            Secure Sharing
          </h3>
          <p className="text-gray-300">
            Your data is encrypted and securely stored locally in your browser,
            ensuring private and safe sharing.
          </p>
        </div>

        <div className="bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 animate__animated animate__fadeInUp animate__delay-2s">
          <div className="bg-[#007bff] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-100">
            Easy Retrieval
          </h3>
          <p className="text-gray-300">
            The shared text can be edited for 15 minutes or until the window is closed.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link
          to="tool"
          smooth={true} duration={500}
          className="inline-block px-8 py-3 bg-[#007bff] text-white rounded-lg hover:bg-[#0056b3] hover:cursor-pointer transition-colors duration-300 font-semibold animate__animated animate__fadeIn"
        >
          Start Sharing Now
        </Link>
      </div>
    </div>
  </section>



  );
}

export default Hero2