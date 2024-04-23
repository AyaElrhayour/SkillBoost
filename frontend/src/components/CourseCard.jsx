import Teacher from "../assets/teacher.png";
import Account from "../shared/Account";
import Bar from "../assets/bar.png";
const CourseCard = ({ CoverImg = Teacher }) => {
  return (
    <div className="flex flex-col bg-white gap-4 items-stretch w-1/4 rounded-[10px] [box-shadow:_0.3em_0.3em_1em_rgba(0,0,0,0.1)] px-4 py-6">
      <div
        className="h-56 bg-cover bg-center"
        style={{ backgroundImage: `url(${CoverImg})` }}
      ></div>

      <div className="flex flex-col gap-4 ">
        <h2 className="text-[#252641] text-lg font-semibold">
        AWS Certified Solutions Architect
        </h2>
        <Account />
        <div>
          <img src={Bar} alt="" className="w-full" />
        </div>
        <div className="flex justify-end">
          <span>Lesson 5 of 7</span>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
