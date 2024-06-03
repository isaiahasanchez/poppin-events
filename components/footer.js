import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Footer() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/#packages" },
    { name: "All Products", href: "/products" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div>
              <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                <Image
                  src="/img/poppin-logo.png"
                  alt="Poppin Events With J"
                  width="32"
                  height="32"
                  className="w-8"
                />
                <span>Poppin Events With J</span>
              </Link>
            </div>

            <div className="flex flex-wrap w-full -ml-3 lg:ml-0 mt-4">
              {navigation.map((item, index) => (
                <Link key={index} href={item.href} className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">                 
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div>Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://facebook.com/web3templates"
                target="_blank"
                rel="noopener">
                <span className="sr-only">Facebook</span>
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/poppineventswithj/"
                target="_blank"
                rel="noopener">
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
              <a
                href="https://www.tiktok.com/@poppineventswithj"
                target="_blank"
                rel="noopener">
                <span className="sr-only">TikTok</span>
                <TikTok size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by Isaiah Sanchez using web3templates
        </div>
      </Container>
    </div>
  );
}

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);

const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const TikTok = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9 3C11.9 2.72386 12.1239 2.5 12.4 2.5H15.2C15.4597 2.5 15.6762 2.69883 15.6982 2.9576C15.8456 4.68994 16.601 5.69493 17.4512 6.27309C18.3233 6.86619 19.3321 7.03338 19.9778 7.00464C20.2536 6.99236 20.4872 7.20604 20.4995 7.48191C20.5118 7.75778 20.2981 7.99137 20.0222 8.00365C19.2013 8.04019 17.97 7.83529 16.8888 7.09999C15.8711 6.40784 15.0166 5.26502 14.7549 3.5H12.9V13.9666C12.9 15.6646 12.2277 16.9506 11.2484 17.6391C10.267 18.3291 9.00524 18.3869 7.9957 17.6557C6.74437 16.7493 6.5284 15.3245 7.03027 14.2013C7.46605 13.226 8.44075 12.4775 9.7 12.4544V10.1748C8.78509 10.2343 7.61007 10.4676 6.61391 11.0866C5.4598 11.8038 4.5 13.0635 4.5 15.3374C4.5 16.8087 4.89793 17.8589 5.48366 18.6091C6.07288 19.3638 6.88196 19.8527 7.76297 20.1451C8.64578 20.438 9.58405 20.5275 10.3975 20.493C11.2249 20.4579 11.865 20.2973 12.169 20.139C13.4079 19.4936 14.1093 18.8565 14.5221 18.0477C14.9437 17.2218 15.1 16.15 15.1 14.5541V9.0708C15.1 8.89826 15.189 8.7379 15.3354 8.64658C15.4818 8.55525 15.6649 8.54586 15.8199 8.62173C16.4456 8.9281 18.1979 9.59709 20.0407 9.74745C20.3159 9.76991 20.5208 10.0112 20.4983 10.2865C20.4759 10.5617 20.2346 10.7666 19.9593 10.7441C18.4542 10.6213 17.0188 10.185 16.1 9.82926V14.5541C16.1 16.1868 15.9463 17.4572 15.4128 18.5023C14.8706 19.5646 13.972 20.3273 12.631 21.0259C12.1423 21.2804 11.3361 21.4541 10.4399 21.4921C9.52965 21.5307 8.467 21.4323 7.44799 21.0942C6.42717 20.7554 5.43351 20.1698 4.69545 19.2245C3.95389 18.2748 3.5 16.9995 3.5 15.3374C3.5 12.7156 4.64021 11.1357 6.08611 10.2373C7.49667 9.36075 9.15221 9.1583 10.2 9.1583C10.4761 9.1583 10.7 9.38216 10.7 9.6583V12.9874C10.7 13.1331 10.6365 13.2714 10.5262 13.3664C10.4158 13.4614 10.2695 13.5036 10.1255 13.4819C9.06028 13.3214 8.27059 13.8767 7.94327 14.6092C7.6178 15.3376 7.74632 16.2403 8.5823 16.8458C9.21629 17.305 10.0101 17.2873 10.6732 16.8211C11.3386 16.3532 11.9 15.4019 11.9 13.9666V3Z"
      fill="#808080" // Gray color
    />
  </svg>
);

