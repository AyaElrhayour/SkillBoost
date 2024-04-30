import { useState } from "react";
import CourseCategories from "../components/CourseCategories";
import CourseHero from "../components/CourseHero";
import CourseOnline from "../components/CourseOnline";
import Nextlesson from "../components/Nextlesson";
import Footer from "../shared/Footer";

const Courses = () => {
  const [selectedLevel, setSelectedLevel] = useState("");

  const handleSelectLevel = (level) => {
    setSelectedLevel(level);
  };
  return (
    <div className="flex flex-col gap-8 overflow-x-hidden">
      <CourseHero onSelectLevel={handleSelectLevel} />
      <Nextlesson selectedLevel={selectedLevel} />
      <CourseCategories />
      <CourseOnline />
      <Footer />
    </div>
  );
};
export default Courses;
