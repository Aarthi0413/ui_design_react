import { Link } from "react-router-dom";
import { CiBellOn } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between items-center ml-2 p-2">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dhczdaczx/image/upload/v1722498114/ax15y22mugr0r9od2csf.png"
              alt="logo"
              className="w-16"
            />
          </Link>
          <h1 className="text-2xl font-bold text-gray-800 ml-2">LivingLodge</h1>
        </div>

        <ul className="flex list-none items-center">
          <li>
            <Link
              to="/"
              className="font-semibold text-gray-400 hover:text-gray-800 px-5 py-5 hover:border-b-2 hover:border-blue-600"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/properties"
              className="font-semibold text-gray-400 hover:text-gray-800 px-5 py-5 hover:border-b-2 hover:border-blue-600"
            >
              Properties
            </Link>
          </li>
          <li>
            <Link
              to="/clients"
              className="font-semibold text-gray-400 hover:text-gray-800 px-5 py-5 hover:border-b-2 hover:border-blue-600"
            >
              Clients
            </Link>
          </li>
          <li>
            <Link
              to="/transactions"
              className="font-semibold text-gray-400 hover:text-gray-800 px-5 py-5 hover:border-b-2 hover:border-blue-600"
            >
              Transactions
            </Link>
          </li>
          <li>
            <Link
              to="/chats"
              className="font-semibold text-gray-400 hover:text-gray-800 px-5 py-5 hover:border-b-2 hover:border-blue-600"
            >
              Chats
            </Link>
          </li>
        </ul>

        <div className="flex items-center mr-5">
          <CiBellOn className="text-3xl text-black border border-gray-300 rounded-md p-1 mx-1" />
          <CiSettings className="text-3xl text-black border border-gray-300 rounded-md p-1 mx-1" />
          <hr className="h-7 border-gray-400 mx-2" />
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/dhczdaczx/image/upload/v1708739835/samples/look-up.jpg"
              alt="profile-pic"
              className="w-10 h-10 rounded-full mr-2"
            />
            <div className="mr-2">
              <p className="text-sm font-bold mb-0">Jacob Jhon</p>
              <p className="text-xs text-gray-500 mt-0">jacob@gmail.com</p>
            </div>
            <RiArrowDropDownLine className="text-3xl text-gray-500" />
          </div>
        </div>
      </nav>
      <hr className="border-gray-300" />
    </div>
  );
};

export default Header;
