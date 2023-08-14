 import {useAuthUser} from "react-auth-kit"
 import { useState} from "react";
 import {MdOutlineArrowDropDown} from "react-icons/md"

 

const Nav = () => {
     const auth = useAuthUser();
    const [showModal, setShowModal] = useState(false);
  //const [isExpanded, setIsExpanded] = useState(false)
     const showDropdown = () => {
    setShowModal(!showModal);

    setTimeout(() => {
      setShowModal(false);
      console.log("delayed for 5 seconds");
    }, 5000);
    clearTimeout;
  };
    return <>
        <button
            className={`invisible lg:visible`}
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            onClick={showDropdown}
          >
            <div className="flex justify-center items-center gap-2">
              <img
                src="https://images.pexels.com/photos/16904262/pexels-photo-16904262/free-photo-of-hot-air-balloons-in-sky.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
                className=" w-8 h-8 rounded-full object-cover"
              />
              <h2>{auth()?.username}</h2>
              <MdOutlineArrowDropDown />
            </div>
          </button>
          <div
            id="dropdown"
            className={`z-10 absolute  bg-white divide-y divide-gray-100  rounded-lg shadow w-44 dark:bg-gray-700 right-5 ${
              showModal ? "" : "hidden"
            }`}
          >
            <ul
              className="py-2 text-sm  dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                 Reset Password
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Create User
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
    </>
}

export default Nav;