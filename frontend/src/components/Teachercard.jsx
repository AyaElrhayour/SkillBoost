import Teacher from "../assets/teacher.png";
const Teachercard = ({ CoverImg = Teacher }) => {
  return (
    <div className="flex flex-col bg-white gap-4 items-stretch w-1/5 rounded-[10px] [box-shadow:_0.3em_0.3em_1em_rgba(0,0,0,0.1)] px-4 py-6">
      <div
        className="h-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${CoverImg})` }}
      ></div>

      <div className="flex flex-col gap-4 ">
        <h2 className="text-[#252641] text-m font-semibold">
          Class adds $30 million to its balance sheet for a Zoom-friendly edtech
          solution
        </h2>
        
        <p className="text-sm">
          Class, launched less than a year ago by Blackboard co-founder Michael
          Chasen, integrates exclusively...
        </p>
      </div>
    </div>
  );
};
export default Teachercard;
