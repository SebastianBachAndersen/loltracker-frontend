import Image from "next/image";
import Link from "next/link";
import HomeIcon from "../assets/images/icons/home";
import Search from "../assets/images/icons/search";
import Stats from "../assets/images/icons/stats";

export default function Sidebar({ children }) {
  return (
    <div className="w-10 md:w-40 min-h-screen shadow-2xl px-1 fixed bg-Darkblue">
      <ul className="relative">
        <li className="relative md:py-4">
          <Link href="/">
            <a className="flex items-center md:py-4 md:px-6 md:h-16 text-sm overflow-hidden text-gray-50 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-Hower transition duration-300 ease-in-out text-center">
              <HomeIcon className="md:ml-4" width={60} height={100} />
            </a>
          </Link>
        </li>
       {/*  <li className="relative md:py-4">
          <Link href="#">
            <a className="flex items-center text-sm  md:py-4 md:px-6 md:h-16 overflow-hidden text-gray-50 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-Hower transition duration-300 ease-in-out text-center">
              <Stats height={60} width={100} />
            </a>
          </Link>
        </li> */}
      </ul>
    </div>
  );
}
