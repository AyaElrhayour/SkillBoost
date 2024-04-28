import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "../shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { createCourse, updateCourse } from "../features/coursesSlice";
import { fetchTopics } from "../features/topicSlice";

const CoursePopup = ({ open, setOpen, course }) => {
  const cancelButtonRef = useRef(null);
  const dispatch = useDispatch();
  const topics = useSelector((state) => state.topics.topics);

  const [inputs, setInputs] = useState({
    title: course?.title || "",
    description: course?.description || "",
    level: course?.level || "",
    cover: course?.cover || "",
    topic_id: course?.topic_id || 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (course == null) {
      console.log(inputs);
      dispatch(createCourse(inputs));
    } else {
      dispatch(updateCourse({ id: course.id, data: inputs }));
    }
    setOpen(false);
  };

  useEffect(() => {
    dispatch(fetchTopics());
  }, []);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <i
                      className="p-1 fa-sharp fa-solid fa-dungeon h-6 w-6 text-green-600"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Fill Course Content
                    </Dialog.Title>

                    <form className="flex flex-col items-center mt-4">
                      <div className="text-left w-full">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Cover Image
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="cover"
                            value={inputs.cover}
                            onChange={handleChange}
                            id="cover"
                            className="block px-4 w-full h-8 rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div className="text-left w-full">
                        <label
                          htmlFor="title"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Title
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="title"
                            value={inputs.title}
                            onChange={handleChange}
                            id="title"
                            className="block px-4 w-full h-8 rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="flex justify-between gap-4 ">
                          <div className="w-full col-span-2 sm:col-span-1">
                            <label
                              htmlFor="level"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Level
                            </label>
                            <select
                              id="level"
                              name="level"
                              value={inputs.level}
                              onChange={handleChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            >
                              <option defaultValue={""}>Select level</option>
                              <option value="Beginner">Beginner</option>
                              <option value="Intermediate">Intermediate</option>
                              <option value="Advanced">Advanced</option>
                              <option value="proficient">Proficient</option>
                            </select>
                          </div>
                          <div className="w-full col-span-2 sm:col-span-1">
                            <label
                              htmlFor="topic"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Topic
                            </label>
                            <select
                              id="topic"
                              name="topic_id"
                              value={inputs.topic_id}
                              onChange={handleChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            >
                              <option defaultValue={""}>Select topic</option>
                              {topics.map((topic) => (
                                <option key={topic.id} value={topic.id}>
                                  {topic.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-span-2">
                          <label
                            htmlFor="description"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Description
                          </label>
                          <input
                            id="description"
                            value={inputs.description}
                            onChange={handleChange}
                            name="description"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write course description here"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <Button
                    type="submit"
                    color="text-white"
                    bgColor="bg-[#7FB5FF]"
                    onClick={handleSubmit}
                    content={course ? "Update" : "Add"}
                  />

                  <Button
                    type="button"
                    color="text-white"
                    bgColor="bg-red-700"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                    content={"Cancel"}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CoursePopup;
