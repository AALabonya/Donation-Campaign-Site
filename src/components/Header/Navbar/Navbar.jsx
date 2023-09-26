import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
      <div className="max-w-7xl mx-auto">
        <nav className="flex justify-between items-center py-2 p-2 md:mr-3">
  
         <Logo></Logo>
          <ul className="flex gap-2 md:gap-5 lg:gap-5 text-sm md:text-xl lg:text-xl ml-3 font-semibold lg:font-medium md:font-medium ">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                }
              >
                Home
              </NavLink>
  
            </li>
  
            <li>
              <NavLink
                to="/donations"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                }
              >
                Donation
              </NavLink>
  
              
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                }
              >
                Statistics
              </NavLink>
  
              
            </li>
          </ul>
  
        </nav>
      </div>
    );
  };

export default Navbar;