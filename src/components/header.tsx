import Card from "@components/card";
import { Transition } from "@headlessui/react";
import { Menu, X } from "@images/heroicons/solid";
import HeaderLinks from "@lib/header_links.json";
import { trackGoal } from "fathom-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PROFILE_IMG_BASE64 } from "@lib/constants";
import useDismiss from "use-dismiss";

const ProfileImg = "/favicon-128x128.png";

const links = HeaderLinks;
const trackMobileMenuGoal = () => trackGoal("RYQBIEQE", 0);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) trackMobileMenuGoal();
  };

  const mobileMenuRef = useDismiss(() => setIsOpen(false));

  return (
    <header className="w-full">
      <nav className="w-full px-4 py-4 pb-4 bg-white border-b sm:px-16 dark:border-transparent dark:bg-black dark:text-white dark:shadow">
        <div className="flex items-center justify-between w-full">
          <h1>
            <Link href="/">
              <a className="py-2">
                <div className="relative w-12 h-12 overflow-hidden rounded-full ring ring-gray-300">
                  <img
                    src={PROFILE_IMG_BASE64}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 object-cover object-center w-full h-full"
                    style={{ filter: "blur(24px)", transform: "scale(1.2)" }}
                  />

                  <Image
                    src={ProfileImg}
                    width={48}
                    height={48}
                    alt="Brandon in a black kimono"
                  />
                </div>
              </a>
            </Link>
          </h1>

          <div className="relative block md:hidden">
            <button
              className="flex items-center focus:outline-none"
              onClick={handleMenuClick}
            >
              <span className="sr-only">Toggle menu</span>
              {!isOpen ? (
                <Menu className="w-8 h-8" />
              ) : (
                <X className="w-8 h-8" />
              )}
            </button>

            {/* Mobile nav Links */}
            <Transition
              show={isOpen}
              enter="transition duration-150 transform origin-top-right"
              enterFrom="opacity-0 scale-75"
              enterTo="opacity-100 scale-100"
              leave="transition duration-75 transform origin-top-right"
              leaveTo="opacity-0 scale-75"
            >
              <Card
                style={{ minWidth: "14rem" }}
                className="absolute right-0 p-4 dark:text-blue-100 dark:bg-blue-500 dark:to-transparent dark:from-transparent text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black"
              >
                <ul ref={mobileMenuRef}>
                  {links.internal.map((link) => (
                    <li key={link.title}>
                      <Link href={link.to}>
                        <a className="block py-2 font-bold">{link.title}</a>
                      </Link>
                    </li>
                  ))}
                  {links.external.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer author"
                        className="block py-2 font-bold"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            </Transition>
          </div>

          <ul className="hidden md:flex">
            {links.internal.map((link) => (
              <li key={link.title}>
                <Link href={link.to}>
                  <a className="block ml-8 text-sm font-semibold tracking-wide text-gray-700 md:inline-block md:mt-0 transform transition-all ease-in-out duration-75 hover:text-gray-900 dark:text-gray-50">
                    {link.title}
                  </a>
                </Link>
              </li>
            ))}
            {links.external.map((link) => (
              <li key={link.title}>
                <a
                  target="_blank"
                  rel="noopener noreferrer author"
                  href={link.to}
                  className="block ml-8 text-sm font-semibold tracking-wide text-gray-700 md:inline-block md:mt-0 transform transition-all ease-in-out duration-75 hover:text-gray-900 dark:text-gray-50"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
