import Image from "next/image";
import logo from "../public/logo.png";

export default function ForYou() {
  return (
    <main>
      <section id="">
        <div className="max-w-full md:ml-0 md:w-full">
          <div className="bg-white border-b border-[#e1e7ea] h-20 z-10">
            <div className="relative flex items-center justify-between px-8 max-w-[1070px] mx-auto h-full">
              <div className="flex items-center gap-6 max-w-[340px] w-full">
                <div className="flex items-center w-full">
                  <div className="relative gap-2">
                    <input
                      className="h-10 w-full py-0 px-4 outline-none bg-[#f1f6f4] text-[#042330] border-2 border-[#e1e7ea]rounded-lg"
                      type="text"
                      placeholder="Search..."
                    ></input>
                    <div className="flex items-center absolute h-full right-2 justify-end border-1-2 border-[#e1e7ea] pl-2"></div>
                  </div>
                </div>
                <button className="flex md:hidden"></button>
              </div>
            </div>
          </div>
          <div className="fixed top-0 left-0 w-full h-full bg-[#3a4649] transition-opacity duration-400 z-10 opacity-65 pointer-events-auto"></div>
          <figure className="flex max-w-[200px]">
            <Image
              className="w-full h-auto"
              src={logo}
              sizes="200px"
              alt="logo"
            />
          </figure>
          <div className="flex flex-col justify-between h-[calc(100vh-60px)] pb-5 overflow-y-auto"></div>
          <div className="max-w-[1070px] w-full m-0 mx-auto py-0 px-6"></div>
        </div>
      </section>
    </main>
  );
}
