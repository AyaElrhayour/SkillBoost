import Button from "./Button";
import white_logo from "../assets/white_logo.png";
import Account from "./Account";


const Navigation = ({
  textColor = "text-white",
  logoSrc = white_logo,
  showButtons = true,
  margin = "ml-48"
}) => {
  return (
    <nav>
      <div className={`flex justify-between items-center ${margin}`}>
        <ul className={`flex gap-20 items-center text-lg font-semibold ${textColor}`}>
          <li>Home</li>
          <li>Course</li>
          <li>
            <img src={logoSrc} alt="Logo" className="w-20" />
          </li>
          <li>Blog</li>
          <li>About Us</li>
        </ul>
        {showButtons ? (
          <div className="flex justify-end gap-8 ml-28">
            <Button content={"Log In"} />
            <Button bgColor="bg-[#A5CAFE]" content={"Sign Up"} />
          </div>
        ) : (
          
          <Account/>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
