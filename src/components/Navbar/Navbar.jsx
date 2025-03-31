import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
 
  const handleScroll = (section) => {
    window.dispatchEvent(new CustomEvent(`scroll-to-${section}`)); // Dispatch custom event for each section
  };

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="navbar justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-[70px] w-[70px]" />
        </div>

        {/* Right: Mobile Menu & Desktop Menu */}
        <div className="flex items-center lg:hidden">
          {/* Hamburger Menu for Mobile */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72"
            >
              <li>
                <button
                  onClick={() => handleScroll("pricing")}
                  className="text-[#0C094E] font-bold text-[18px] active:text-[#0C094E]"
                >
                  Preise
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("howItWorks")}
                  className="text-[#0C094E] font-bold text-[18px] active:text-[#0C094E]"
                >
                  Wie es funktioniert
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("faq")}
                  className="text-[#0C094E] font-bold text-[18px] active:text-[#0C094E]"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("spaceCalculator")}
                  className="text-[#0C094E] font-bold text-[18px] active:text-[#0C094E]"
                >
                  Raumfahrt-Rechner
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("contact")}
                  className="text-[#0C094E] font-bold text-[18px] active:text-[#0C094E]"
                >
                  Kontakt
                </button>
              </li>

              <div className="mt-4 space-y-2 ">
                <a className="btn text-[#231ADF] border-[#231ADF] bg-transparent hover:bg-[#231ADF] hover:text-white rounded-full font-bold text-[18px] px-5 py-3">
                  <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                  +436764931547
                </a>
                <a className="btn text-[#231ADF] border-[#231ADF] bg-transparent hover:bg-[#231ADF] hover:text-white rounded-full font-bold text-[18px] px-5 py-3">
                  Register
                </a>
                <a className="btn text-[#fff] border-[#231ADF] hover:bg-[#231ADF] hover:text-white rounded-full font-bold text-[18px] px-5 py-3 bg-[#231ADF] ml-2">
                  Buchen Sie
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </ul>
          </div>
        </div>

        {/* Center: Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <button
                onClick={() => handleScroll("pricing")}
                className="text-[#0C094E] font-bold text-[18px]"
              >
                Preise
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("howItWorks")}
                className="text-[#0C094E] font-bold text-[18px]"
              >
                Wie es funktioniert
              </button>
            </li>

            <li>
              <button
                onClick={() => handleScroll("faq")}
                className="text-[#0C094E] font-bold text-[18px]"
              >
                FAQs
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("spaceCalculator")}
                className="text-[#0C094E] font-bold text-[18px]"
              >
                Raumfahrt-Rechner
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("contact")}
                className="text-[#0C094E] font-bold text-[18px]"
              >
                Kontakt
              </button>
            </li>
          </ul>
        </div>

        {/* Right: Desktop Buttons */}
        <div className="hidden lg:flex gap-4 items-center">
          <a className="btn text-[#231ADF] border-[#231ADF] bg-transparent hover:bg-[#231ADF] hover:text-white rounded-full font-bold text-[18px] px-5 py-3">
            <i className="fa fa-phone" aria-hidden="true"></i> +436764931547
          </a>
          <a className="btn text-[#231ADF] border-[#231ADF] bg-transparent hover:bg-[#231ADF] hover:text-white rounded-full font-bold text-[18px] px-5 py-3">
            Register
          </a>
          <a className="btn text-[#fff] border-[#231ADF] hover:bg-[#231ADF] hover:text-white rounded-full font-bold text-[18px] px-5 py-3 bg-[#231ADF]">
            Buchen Sie
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
