import account from "../../assets/pfp.png";
import pen from "../../assets/pen.png";
import location from "../../assets/location.png";
import person from "../../assets/prsn.png";

export default function CardProfile() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-[#D8E0FF] w-full mb-6 shadow-xl rounded-t-full  pt-20">
        <div className="Z">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  src={account}
                  className=" h-60 align-middle  w-60 border-solid border-[#00185C] border-4 rounded-full "
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-2">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center flex gap-2 items-center">
                  <span className="text-2xl font-semibold block leading-10 text-[#00185C] tracking-wide text-blueGray-600">
                    Lina Mora
                  </span>
                  <img src={pen} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className=" mx-8 text-center flex flex-col items-start">
            <h3 className="text-xl text-[#00185C] font-semibold  text-blueGray-700 mb-2">
              About Me
            </h3>
            <p className=" mb-4 text-sm  text-[#696984]  text-left">
              An artist of considerable range, Jenna the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and
              records all of his own music, giving it a warm, intimate feel with
              a solid groove structure. An artist of considerable range.
            </p>
          </div>
          <div className=" py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4 flex flex-col gap-6">
                <div className="flex items-center gap-8">
                  <img src={location} alt="" />
                  <p>Canada, Toronto</p>
                </div>
                <div className="flex items-center gap-4">
                  <img src={person} alt="" />
                  <p>Member since May 05,2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
