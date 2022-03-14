import Image from "next/image";
import Link from 'next/link'
import HomeIcon from "../images/icons/home";
import Search from "../images/icons/search";
import Stats from "../images/icons/stats";

export default function sidebar({ children }) {
  return (
    <div className="w-40 h-full shadow-md px-1 absolute bg-primary">
      <ul className="relative">
        <li className="relative py-4">
          <Link href="/dashboard">
          <a className="flex items-center text-sm py-4 px-6 h-16 overflow-hidden text-gray-50 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-500 transition duration-300 ease-in-out text-center">
          <HomeIcon width={60} height={100}/>
          </a>
          </Link>
        </li>
        <li className="relative py-4">
        <Link href="#">
          <a className="flex items-center text-sm py-4 px-6 h-16 overflow-hidden text-gray-50 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-500 transition duration-300 ease-in-out text-center" >
            <Stats height={60} width={100}/>
          </a>
          </Link>
        </li>
        <li className="relative py-4">
        <Link href="/">
          <a className="flex items-center text-sm py-4 px-6 h-16 overflow-hidden text-gray-50 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-500 transition duration-300 ease-in-out text-center">
          <Search height={60} width={100}/>
          </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
