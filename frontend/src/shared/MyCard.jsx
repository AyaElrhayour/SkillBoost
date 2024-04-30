import {BiCategory} from "react-icons/bi"

const MyCard = ({ document, title, description , 
  width = "w-2/3" }) => {
  return (
    <div className={`flex flex-col items-center ${width} rounded-[10px] [box-shadow:_0.3em_0.3em_1em_rgba(0,0,0,0.1)] gap-4  py-6`}>
      <BiCategory size={40} color="#7FB5FF" className="bg-[#F1F7FF] " />
      <div className="">
        <h3 className="text-[#2F327D] text-lg font-semibold text-center">
          {title}
        </h3>
        <p className="text-[#696984] text-center ">{description}</p>
      </div>
    </div>
  );
};

export default MyCard;
