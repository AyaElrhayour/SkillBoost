import BgHero from "../assets/courseshero.png";
import blueLogo from "../assets/blue_logo.png";
import Navigation from "../shared/Navigation";
const CourseHero = () => {
  return (
    <div className="bg-[#EEF5FF]">
      <Navigation
        logoSrc={blueLogo}
        textColor="text-[#001D6E]"
        margin="ml-80 mt-6 mb-8"
        showButtons={false}
      />
      <img src={BgHero} alt="" className="w-full" />
      <div className="relative bottom-44 left-64">
        <div className="flex flex-col items-stretch gap-3 ">
          <form class="max-w-5xl ">
            <div class="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pr-16 ps-10 text-sm text-gray-900 border border-white rounded-full bg-gray-50 dark:placeholder-gray-400"
                placeholder="Find your course"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-[#49BBBD] font-medium rounded-full text-sm px-8 py-2 "
              >
                Search
              </button>
            </div>
          </form>

          <div className="max-w-5xl">
            <div class="flex gap-2">
              <select
                className="block w-1/4 p-4 ps-10 text-sm text-gray-900 border border-white rounded-full bg-gray-50 dark:placeholder-gray-400"
                name=""
                id=""
              >
                <option selected>Subject</option>
                <option value="">New Delhi</option>
                <option value="">Istanbul</option>
                <option value="">Jakarta</option>
              </select>
              <select
                className="block w-1/4 p-4 ps-10 text-sm text-gray-900 border border-white rounded-full bg-gray-50 dark:placeholder-gray-400"
                name=""
                id=""
              >
                <option selected>Level</option>
                <option value="">New Delhi</option>
                <option value="">Istanbul</option>
                <option value="">Jakarta</option>
              </select>
              <select
                className="block w-1/4 p-4 ps-10 text-sm text-gray-900 border border-white rounded-full bg-gray-50 dark:placeholder-gray-400"
                name=""
                id=""
              >
                <option selected>Language</option>
                <option value="">New Delhi</option>
                <option value="">Istanbul</option>
                <option value="">Jakarta</option>
              </select>
              <select
                className="block w-1/4 p-4 ps-10 text-sm text-gray-900 border border-white rounded-full bg-gray-50 "
                name=""
                id=""
              >
                <option selected>Learning Type</option>
                <option value="">New Delhi</option>
                <option value="">Istanbul</option>
                <option value="">Jakarta</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseHero;
