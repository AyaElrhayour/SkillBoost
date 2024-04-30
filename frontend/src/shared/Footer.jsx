import Button from "./Button";
import logo from "../assets/lightlogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#001D6E] flex flex-col items-center gap-12 py-8">
      <Link to="/">
      <img className="w-28" src={logo} alt="" /></Link>
      
      <div className="flex flex-col  gap-6">
        <h2 className="text-[#B2B3CF] px-20 text-center text-lg">Subscribe to get our Newsletter</h2>
        <div className="flex gap-1">
          <input
            type="text"
            name="name"
            id="name"
            className="shadow-sm bg-transparent focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full"
            placeholder="Your Email"
          />
           <Button bgColor="bg-[#7FB5FF]" color="text-white" content={"Subscribe"} />
        </div>
        <h2 className="text-[#B2B3CF] px-20 text-center text-lg"> Privacy Policy | Terms & Conditions</h2>
        <h2 className="text-[#B2B3CF] px-20 text-center text-lg">© 2024 Class CodeX</h2>
      </div>
    </div>
  );
};
export default Footer;
