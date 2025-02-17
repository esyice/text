import NavbarClick from "./NavbarClick";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div>
      <nav className="fixed w-full z-50 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="home" smooth={true} duration={500} className="text-xl font-bold hover:cursor-pointer">TextShare</Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavbarClick href={"home"} name={"Home"}></NavbarClick>
                <NavbarClick href={"features"} name={"Features"}></NavbarClick>
                <NavbarClick
                  href={"howItWorks"}
                  name={"How It Works"}
                ></NavbarClick>
                <NavbarClick href={"tool"} name={"Tool"}></NavbarClick>
                <NavbarClick href={"faq"} name={"FAQ"}></NavbarClick>
                <NavbarClick href={"contact"} name={"Contact"}></NavbarClick>
              </div>
            </div>

            <div className="md:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md hover:bg-neutral-700 focus:outline-none">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
