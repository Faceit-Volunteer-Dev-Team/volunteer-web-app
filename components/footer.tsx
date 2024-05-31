import Link from "next/link";
import { Container } from "./shared/container";

const footerLinks = [
  {
    title: "Resources",
    links: [
      { title: "Discord", href: "#" },
      { title: "Clans", href: "#" },
      { title: "Discord", href: "#" },
    ],
  },
  {
    title: "TOS",
    links: [
      { title: "Contact", href: "#" },

      { title: "Terms of service", href: "#" },
    ],
  },
  {
    title: "Status",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
    ],
  },
];

export const Footer = () => (
  <footer className="mt-12 border-t border-transparent-white py-[5.6rem] text-sm">
    <Container className="flex flex-col justify-between lg:flex-row">
      <div>
        <div className="flex h-full flex-row justify-between lg:flex-col">
          <div className="flex items-center ">
            <img
              src="/pintech.png"
              alt="Pintech Logo"
              className="mr-4 h-4 w-4"
            />
            ©️VolunteerTeam 2024-All rights reserved.
          </div>
          <div className="mt-auto flex space-x-4 "></div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {footerLinks.map((column) => (
          <div
            key={column.title}
            className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
          >
            <h3 className="mb-3 font-medium">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.title} className="[&_a]:last:mb-0">
                  <Link
                    className="mb-3 block text-grey transition-colors  text-white hover:text-orange"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </footer>
);
