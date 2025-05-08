import React from "react";
import { FaBook, FaReact, FaSpaceShuttle } from "react-icons/fa";

const Aside = () => {
  const asidelinks = [
    {
      name: "Vite Documentation",
      icon: <FaBook />,
      href:"#"
    },
    {
      name: "React Guide",
      icon: <FaReact />,
       href:"#"
    },
    {
      name: "Frontend Trends",
      icon: <FaSpaceShuttle />,
      href:"#"
    },
  ];
  return (
    <aside  className=" flex flex-col   bg-gray-100 container mx-auto p-6 rounded-lg w-fit shadow-md md:flex-col ">
      <h3 className="text-2xl font-bold">📌Related Links</h3>
      <ul className="mt-2 space-y-2">
        {asidelinks.map((link, index) => (
          <li  className=" text-blue-500 text-lg hover:underline " key={link.name}>
            <a href={link.href} className="flex items-center gap-1.5 hover:underline">
              {link.icon} {link.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
