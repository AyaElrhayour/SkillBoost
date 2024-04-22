import { Card } from "flowbite-react";
import Button from "../shared/Button";

const BlogCategories = () => {
  return (
    <div className="mb-8">
      <h2 className="font-semibold text-lg text-[#333333] ml-44">
        Reading blog list
      </h2>
      <div className="flex gap-16 justify-center">
        <Card
          className="max-w-sm relative box-shadow:none border-none w-60 h-auto bg-cover bg-center"
          style={{ backgroundImage: "url(src/assets/uxui.png)" }}
        >
          <div className="relative">
            <div className="absolute inset-0 flex flex-col items-center justify-bottom">
              <div className="flex justify-center mt-2">
                <Button
                  color="text-[#333333]"
                  bgColor="bg-white/50"
                  border="none"
                  content={"UX/UI"}
                />
              </div>
            </div>
          </div>
        </Card>
        <Card
          className="max-w-sm relative box-shadow:none border-none w-60 h-56 bg-cover bg-center"
          style={{ backgroundImage: "url(src/assets/react.png)" }}
        >
          <div className="relative">
            <div className="absolute inset-0 flex flex-col items-center justify-bottom">
              <div className="flex justify-center mt-2">
                <Button
                  color="text-[#333333]"
                  bgColor="bg-white/50"
                  border="none"
                  content={"React"}
                />
              </div>
            </div>
          </div>
        </Card>
        <Card
          className="max-w-sm relative box-shadow:none border-none w-60 h-56 bg-cover bg-center"
          style={{ backgroundImage: "url(src/assets/php.png)" }}
        >
          <div className="relative">
            <div className="absolute inset-0 flex flex-col items-center justify-bottom">
              <div className="flex justify-center mt-2">
                <Button
                  color="text-[#333333]"
                  bgColor="bg-white/50"
                  border="none"
                  content={"Php"}
                />
              </div>
            </div>
          </div>
        </Card>
        <Card
          className="max-w-sm relative box-shadow:none border-none w-60 h-56 bg-cover bg-center"
          style={{ backgroundImage: "url(src/assets/js.png)" }}
        >
          <div className="relative">
            <div className="absolute inset-0 flex flex-col items-center justify-bottom">
              <div className="flex justify-center mt-2">
                <Button
                  color="text-[#333333]"
                  bgColor="bg-white/50"
                  border="none"
                  content={"JavaScript"}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default BlogCategories;
