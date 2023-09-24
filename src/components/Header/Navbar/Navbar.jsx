import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
      <div className="max-w-7xl mx-auto">
        <nav className="flex justify-between items-center py-2  p-2">
  
         <Logo></Logo>
          <ul className="flex gap-5 text-xl">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                }
              >
                Home
              </NavLink>
  
            </li>
  
            <li>
              <NavLink
                to="/donations"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                }
              >
                Donation
              </NavLink>
  
              
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-400 underline" : ""
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