import white_logo from "../assets/white_logo.png";
import Button from "./Button";

const Navigation = () => {
  return (
    <nav>
      <div className="flex  justify-around ml-48 items-center">
        <ul className="flex  gap-20 items-center text-white text-lg font-semibold">
          <li>Home</li>
          <li>Course</li>
          <li>
            <img src={white_logo} alt="" className="w-20" />
          </li>
          <li>Blog</li>
          <li>About Us</li>
        </ul>
        <div className="flex justify-end gap-8 ml-28">
          <Button content={"Log In"} />
          <Button bgColor="bg-[#A5CAFE]" content={"Sign Up"} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
