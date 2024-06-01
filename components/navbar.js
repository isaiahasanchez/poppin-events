import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

const Navbar = ({ openPopup }) => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/#packages" },
    { name: "All Products", href: "/products" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        <Link href="/">
          <div className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
            <Image
              src="/img/poppin-logo.png"
              alt="Logo"
              width="32"
              height="32"
              className="w-14"
            />
            <span>Poppin Events With J</span>
          </div>
        </Link>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  {open ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="w-full my-5 lg:hidden">
                {navigation.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <div className="block px-4 py-2 text-gray-500 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:text-gray-300 dark:focus:bg-gray-800 focus:outline-none">
                      {item.name}
                    </div>
                  </Link>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          {navigation.map((item, index) => (
            <Link key={index} href={item.href}>
              <div className="inline-block px-4 py-2 text-lg font-normal text-gray-800 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:text-gray-200 dark:focus:bg-gray-800">
                {item.name}
              </div>
            </Link>
          ))}
          <button onClick={openPopup}>
            <div className="px-6 py-2 text-white bg-indigo-600 rounded-md">
              Get a Quote
            </div>
          </button>
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;