
import CourseCategories from "../components/CourseCategories";
import CourseHero from "../components/CourseHero";
import CourseOnline from "../components/CourseOnline";
import Nextlesson from "../components/Nextlesson";
import Footer from "../shared/Footer";

const Courses = () => {
  return (
    <div className="flex flex-col gap-8 overflow-x-hidden">
      <CourseHero/>
      <Nextlesson/>
      <CourseCategories/>
      <CourseOnline/>
        <Footer />
    </div>
  );
};
export default Courses;

