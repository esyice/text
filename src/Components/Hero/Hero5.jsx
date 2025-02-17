import React from "react";

function Hero5() {
  return (

      <section id="faq" className="py-20 bg-neutral-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate__animated animate__fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-300 text-lg">
              Everything you need to know about the text sharing tool
            </p>
          </div>

          <div className="space-y-4">
            <div className="faq-item animate__animated animate__fadeInUp">
              <button className="w-full flex justify-between items-center p-4 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors duration-200">
                <span className="text-lg font-medium">
                  How secure is my shared text?
                </span>
                <svg
                  className="w-6 h-6 transform transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="faq-icon"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="faq-content hidden bg-neutral-800 mt-1 p-4 rounded-lg">
                <p className="text-neutral-300">
                  Your text is encrypted end-to-end and stored securely on our
                  servers. Only users with the correct code can access the
                  shared text.
                </p>
              </div>
            </div>

            <div className="faq-item animate__animated animate__fadeInUp animate__delay-1s">
              <button className="w-full flex justify-between items-center p-4 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors duration-200">
                <span className="text-lg font-medium">
                  How long is my text stored?
                </span>
                <svg
                  className="w-6 h-6 transform transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="faq-icon"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="faq-content hidden bg-neutral-800 mt-1 p-4 rounded-lg">
                <p className="text-neutral-300">
                  Shared texts are stored for 30 days by default. After this
                  period, they are automatically deleted from our servers.
                </p>
              </div>
            </div>

            <div className="faq-item animate__animated animate__fadeInUp animate__delay-2s">
              <button className="w-full flex justify-between items-center p-4 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors duration-200">
                <span className="text-lg font-medium">
                  Is there a text size limit?
                </span>
                <svg
                  className="w-6 h-6 transform transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="faq-icon"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="faq-content hidden bg-neutral-800 mt-1 p-4 rounded-lg">
                <p className="text-neutral-300">
                  The maximum text size is 10,000 characters. This limit ensures
                  optimal performance and quick sharing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Hero5;
