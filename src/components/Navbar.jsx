import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";

function Navbar() {
  const navlinks = [
    {
      name: "Home",
      icon: <FaHome />,
      href: "#",
    },
    {
      name: "About",
      icon: <FaInfoCircle />,
      href: "#",
    },
    {
      name: "Services",
      icon: <FaServicestack />,
      href: "#",
    },
    {
      name: "Contact",
      icon: <FaEnvelope />,
      href: "#",
    },
  ];

  return (
    <>
      <nav className="flex p-5 bg-gray-900 text-white">
        <div className="container flex justify-between items-center">
          <h1 className="text-2xl font-bold ">🚀My website</h1>
          <ul className=" space-x-5 hidden md:flex">
            {navlinks.map((link,index) => {
                console.log(index)
              return (
                <li key={index} >
                  <a href={link.href} className="flex items-center gap-1 text-white hover:text-blue-500 cursor-pointer">
                    {link.icon}
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="text-xl md:hidden ">
          <FaBars/>
          </div>
          

        </div>
      </nav>
    </>
  );
}

export default Navbar;

