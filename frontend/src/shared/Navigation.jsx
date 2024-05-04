import Button from "./Button";
import white_logo from "../assets/white_logo.png";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findAuthUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const Navigation = ({
  textColor = "text-white",
  logoSrc = white_logo,
  showButtons = true,
  margin = "ml-48",
}) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const getImage = (img) => {
    return `http://localhost:8000/storage/${img}`;
  };
  const navigate = useNavigate();
  const routing = () => {
    if (Cookies.get("role") == "Admin") {
      navigate("/adminDashboard");
    } else if (Cookies.get("role" == "Teacher")) {
      navigate("/teacherDashboard");
    } else {
      navigate("/courses");
    }
  };
  useEffect(() => {
    dispatch(findAuthUser());
  }, []);
  return (
    <nav>
      <div className={`flex justify-around items-center ${margin}`}>
        <ul
          className={`flex gap-20 items-center text-lg font-semibold ${textColor}`}
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            {" "}
            <a href="/Courses">Course</a>
          </li>
          <li>
            <img src={logoSrc} alt="Logo" className="w-20" />
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>About Us</li>
        </ul>
        {showButtons && !Cookies.get("token") ? (
          <div className="flex justify-end gap-8 ml-28">
            <Button content={"Log In"} />
            <Button bgColor="bg-[#A5CAFE]" content={"Sign Up"} />
          </div>
        ) : (
          <div
            onClick={routing}
            className="flex justify-left items-center gap-4 p-4"
          >
            <img
              src={getImage(user && user.profile_pic)}
              className="rounded-full w-12 h-12"
              alt=""
            />
            <h3 className="font-semibold text-xl">{user && user.name}</h3>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
