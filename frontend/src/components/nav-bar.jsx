import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import MobileResourceDropdown from "./mobileResourceDropdown";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); 
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  var newNavMenuTriggerStyle = navigationMenuTriggerStyle() + " bg-transparent";

  return (
    <>
      <div id="navBar" className="flex items-center  md:px-8  z-50">
        <div className="flex items-center self-start whitespace-nowrap hover:scale-105 duration-300 cursor-pointer hover:text-blue-500">
          <Link className="flex justify-center items-center" to={"/"}>
            <img src="/a-nb.png" alt="ACM" className="w-20 h-15" />
            <span className="hidden md:block font-righteous font-semibold text-3xl">
              ACM Manipal
            </span>

            {!location.pathname.startsWith("/resources") &&
              !location.pathname.startsWith("/domains") && (
                <span className="md:hidden font-righteous font-semibold text-3xl">
                  ACM Manipal
                </span>
              )}
          </Link>
        </div>
        <div className="flex-1"></div>
        <div className="hidden md:flex justify-self-end">
          <NavigationMenu>
            <NavigationMenuList className="flex -space-x-2">
              {["Know Us", "Announcements", "The Hub"].map((item, index) => (
                <NavigationMenuItem
                  key={index}
                  className="mr-1  hover:scale-105 hover:text-blue-500 duration-300"
                >
                  <a href={`/${item.toLowerCase().replace(" ", "-")}`}>
                    <NavigationMenuLink className={newNavMenuTriggerStyle}>
                      <div className="text-xl font-righteous ">{item}</div>
                    </NavigationMenuLink>
                  </a>
                </NavigationMenuItem>
              ))}
              {isLoggedIn ? (
                <NavigationMenuItem>
                  <button
                    onClick={handleLogout}
                    className={`${newNavMenuTriggerStyle} font-righteous text-xl hover:text-red-500`}
                  >
                    Logout
                  </button>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem>
                  <a href="/admin-login">
                    <NavigationMenuLink className={newNavMenuTriggerStyle}>
                      <div className="text-xl font-righteous hover:text-green-500">
                        Login
                      </div>
                    </NavigationMenuLink>
                  </a>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="md:hidden flex items-center self-center justify-self-center">
          {(location.pathname.startsWith("/resources") ||
            location.pathname.startsWith("/domains")) && (
            <MobileResourceDropdown />
          )}
          <button
            className="p-2 rounded-lg hover:bg-gray-200 ml-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="md:hidden rounded-lg p-4 space-y-2"
          >
            {["Know Us", "Announcements", "The Hub"].map((item, index) => (
              <a
                key={index}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="block text-2xl font-righteous py-2 font-medium hover:text-blue-600"
              >
                {item}
              </a>
            ))}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="block text-2xl font-medium font-righteous text-red-500 hover:text-red-600"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/admin-login"
                className="block text-2xl font-righteous font-medium hover:text-blue-600"
              >
                Login
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export { NavBar };
