export default function navbar({ children }) {
  return (
    <div className="w-40 h-full shadow-md px-1 absolute bg-primary">
      <ul className="relative">
        <li className="relative py-4">
          <a className="flex items-center text-sm py-4 px-6 h-16 overflow-hidden text-gray-50 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-500 transition duration-300 ease-in-out text-center" href="dashboard">
          <img className="ml-4" src="https://img.icons8.com/ios-filled/50/ffffff/home.png"/>
          </a>
        </li>
        <li className="relative py-4">
          <a className="flex items-center text-sm py-4 px-6 h-16 overflow-hidden text-gray-50 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-500 transition duration-300 ease-in-out text-center" href="#!" >
          <img className="ml-4" src="https://img.icons8.com/external-prettycons-solid-prettycons/60/ffffff/external-stats-business-and-finance-prettycons-solid-prettycons.png"/>
          </a>
        </li>
        <li className="relative py-4">
          <a className="flex items-center text-sm py-4 px-6 h-16 overflow-hidden text-gray-50 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-500 transition duration-300 ease-in-out text-center" href="/">
          <img className="ml-4" src="https://img.icons8.com/material-rounded/48/ffffff/search.png"/>
          </a>
        </li>
      </ul>
    </div>
  );
}
