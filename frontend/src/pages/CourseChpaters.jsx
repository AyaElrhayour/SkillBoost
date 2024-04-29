import { useDispatch, useSelector } from "react-redux";
import AdminNavbar from "../shared/Navbars/AdminNavbar";
import Sidebar from "../shared/Sidebar/Sidebar";
import { selectCourse } from "../features/coursesSlice";
import { useParams } from "react-router-dom";
import Button from "../shared/Button";
import ChapterCard from "../components/ChapterCard";
import { useEffect, useState } from "react";
import ChapterModal from "../components/ChapterModal";
import Cookies from "js-cookie";

const CourseChapters = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const userId = Cookies.get("user_id");
  const { id } = useParams();
  const course = useSelector((state) => state.courses.selectedCourse);

  useEffect(() => {
    dispatch(selectCourse(id));
  }, []);
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />

        <div className="flex justify-between mx-16 bg-lightBlue-600 md:pt-32  pt-12">
          <h1 className="text-2xl font-semibold">Chapters</h1>
          {course && userId == course.user_id ? (
            <Button
              content={"Add Chapter"}
              bgColor="bg-[#7FB5FF]"
              color="text-white"
              onClick={() => setOpen(true)}
            />
          ) : (
            ""
          )}
        </div>
        <div className=" grid gap-4 mx-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-center pt-4">
          {course &&
            course.chapters.map((chapter) => (
              <ChapterCard key={chapter.id} chapter={chapter} />
            ))}
        </div>
      </div>
      {open ? <ChapterModal open={open} setOpen={setOpen} /> : ""}
    </>
  );
};

export default CourseChapters;
