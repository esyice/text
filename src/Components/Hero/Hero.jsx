import React from 'react'
import { Link } from 'react-scroll';

function Hero() {
  return (

        <section
          id='home'
          className="bg-neutral-900 text-white min-h-[70vh] flex items-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-neutral-800"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <div className="text-center animate__animated animate__fadeIn">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Share Text Seamlessly{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#007bff] to-[#00bfff]">
                   With Code
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl mx-auto">
                Transform your text into shareable code snippets instantly.
                Simple, secure, and efficient text sharing for developers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="tool"
                  smooth={true} duration={500}
                  className="px-8 py-3 bg-[#007bff] hover:bg-[#0056b3] hover:cursor-pointer rounded-lg font-semibold transition-all duration-300 animate__animated animate__fadeInUp"
                >
                  Try it Now
                </Link>
                <Link
                  to="features"
                  smooth={true} duration={500}
                  className="px-8 py-3 border-2 border-white hover:bg-white hover:text-neutral-900 hover:cursor-pointer rounded-lg font-semibold transition-all duration-300 animate__animated animate__fadeInUp animate__delay-1s"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full flex justify-center">
              <div className="animate-bounce mb-8">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0tMTIgNGgxMnYySDI0di0yem0wLTh2MmgxMnYtMkgyNHptMC00aDEydjJIMjR2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        </section>
  );
}

export default Hero