import React, { useEffect } from "react";

// components

import CardStats from "../Cards/CardStats";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopics } from "../../features/topicSlice";
import { fetchCourses } from "../../features/coursesSlice";
import API from "../../utils/API";

export default function HeaderStats() {
  const dispatch = useDispatch();
  const topics = useSelector((state) => state.topics.topics);
  const courses = useSelector((state) => state.courses.courses);

  const coursesCount =
    courses && courses.filter((course) => course.approved === true).length;
  const topicsCount = topics && topics.length;


  useEffect(() => {
    dispatch(fetchTopics());
    dispatch(fetchCourses());
  }, []);
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 mb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Teachers"
                  statTitle="357"
                  statIconColor="bg-blue-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Students"
                  statTitle="256"
                  statIconColor="bg-blue-400"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Topics"
                  statTitle={topicsCount.toString()}
                  statIconColor="bg-blue-600"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Courses"
                  statTitle={coursesCount.toString()}
                  statIconColor="bg-blue-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
