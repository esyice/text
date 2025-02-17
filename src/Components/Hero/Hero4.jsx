import React from "react";

function Hero4() {
  return (
    <section id="tool" className="py-20 bg-gray-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Text Sharing Tool
          </h2>
          <p className="text-gray-300 text-lg">
            Convert your text to a shareable code or retrieve shared text
          </p>
        </div>
  
        <div className="space-y-8">
          <div className="bg-gray-700 p-6 rounded-xl shadow-sm animate__animated animate__fadeInUp">
            <label
              htmlFor="inputText"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Enter Text
            </label>
            <textarea
              id="inputText"
              rows="6"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-100 focus:ring-2 focus:ring-[#007bff] focus:border-[#007bff] transition-colors duration-200"
              placeholder="Type or paste your text here..."
            ></textarea>
            <div className="mt-4 flex justify-end">
              <button
                id="generateBtn"
                className="px-6 py-2 bg-[#007bff] text-white rounded-lg hover:bg-[#0056b3] transition-colors duration-300 flex items-center space-x-2"
              >
                <span>Generate Code</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
  
          <div className="my-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-gray-800 text-gray-400">OR</span>
            </div>
          </div>
  
          <div className="bg-gray-700 p-6 rounded-xl shadow-sm animate__animated animate__fadeInUp animate__delay-1s">
            <div className="flex justify-between items-center mb-2">
              <label
                htmlFor="codeInput"
                className="block text-sm font-medium text-gray-300"
              >
                Enter Code
              </label>
              <button
                id="retrieveBtn"
                className="px-4 py-1.5 bg-[#007bff] text-white rounded-lg hover:bg-[#0056b3] transition-colors duration-300 text-sm flex items-center space-x-2"
              >
                <span>Retrieve Text</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
              </button>
            </div>
            <input
              type="text"
              id="codeInput"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-100 focus:ring-2 focus:ring-[#007bff] focus:border-[#007bff] transition-colors duration-200"
              placeholder="Enter your code here..."
            />
          </div>
        </div>
      </div>
    </section>
  
  );
}

export default Hero4;
