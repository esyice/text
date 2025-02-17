import React from "react";

function Hero3() {
  return (
      <section id="howItWorks" className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Share your text in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-[#007bff] transform -translate-y-1/2"></div>

            <div className="relative bg-neutral-800 p-6 rounded-xl animate__animated animate__fadeInLeft">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#007bff] w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="pt-4">
                <div className="text-center mb-4">
                  <svg
                    className="w-12 h-12 mx-auto text-[#007bff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Enter Your Text
                </h3>
                <p className="text-neutral-400 text-center">
                  Paste or type your text in the input box
                </p>
              </div>
            </div>

            <div className="relative bg-neutral-800 p-6 rounded-xl animate__animated animate__fadeInLeft animate__delay-1s">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#007bff] w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="pt-4">
                <div className="text-center mb-4">
                  <svg
                    className="w-12 h-12 mx-auto text-[#007bff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Generate Code
                </h3>
                <p className="text-neutral-400 text-center">
                  Click the generate button to create your unique code
                </p>
              </div>
            </div>

            <div className="relative bg-neutral-800 p-6 rounded-xl animate__animated animate__fadeInLeft animate__delay-2s">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#007bff] w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div className="pt-4">
                <div className="text-center mb-4">
                  <svg
                    className="w-12 h-12 mx-auto text-[#007bff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Share & Retrieve
                </h3>
                <p className="text-neutral-400 text-center">
                  Share the code and retrieve text anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

  );
}

export default Hero3;
