import React, { useEffect } from "react";
import { createPopper } from "@popperjs/core";
import { useDispatch, useSelector } from "react-redux";
import { findAuthUser } from "../../features/authSlice";

const UserDropdown = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const getImage = (img) => {
    return `http://localhost:8000/storage/${img}`;
  };

  useEffect(() => {
    dispatch(findAuthUser());
  }, []);
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-end",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="text-blueGray-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <div className="flex justify-left items-center gap-4 p-4">
            <img
              src={getImage(user && user.profile_pic)}
              className="rounded-full w-12 h-12"
              alt=""
            />
            <h3 className="font-semibold text-xl">{user && user.name}</h3>
          </div>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Account
        </a>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Logout
        </a>
      </div>
    </>
  );
};

export default UserDropdown;
