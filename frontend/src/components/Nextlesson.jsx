import CourseCard from "./CourseCard";
import JsImg from "../assets/js.png";
import UIUX from "../assets/uxui.png";

const Nextlesson = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-around gap-[40rem]">
        <h2 className="font-semibold text-lg text-[#333333] ">Ready for your next lesson?</h2>
        <a href="" className="text-[#7FB5FF] font-semibold">
          view history
        </a>
      </div>
      <div className="flex gap-12 justify-center">
      <CourseCard/>
      <CourseCard CoverImg={JsImg}/>
      <CourseCard CoverImg={UIUX}/>
      </div>
    </div>
  );
};
export default Nextlesson;
