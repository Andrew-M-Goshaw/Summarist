// import Image from "next/image";

export default function ForYou() {
  return (
    <main>
      <section id="__next">
        {/* Wrapper Class that wraps everything together */}
        <div className="relative flex flex-col ml-52 w-[calc(100%-200px)] transition-all duration-300 md:ml-0 md:w-full">
          {/* .search__background class that's a container for the navigation bar that's just a search bar */}
          <div className="bg-white border-b border-[#e1e7ea] h-20 z-10">
            {/* .search__wrapper class - just a spacer bar? */}
            <div className="relative flex items-center justify-between px-8 max-w-[1070px] mx-auto h-full">
              {/* no classes assigned to either figure or img */}
              <figure>{/* <img src="logo" alt="" /> */}</figure>
              {/* the main search bar container class */}
              <div className="flex items-center gap-6 max-w-[340px] w-full">
                {/* container for just the search bar */}
                <div className="flex items-center w-full">
                  {/* input container */}
                  <div className="relative gap-2">
                    {/* input class */}
                    <input
                      className="h-10 w-full px-4 outline-none bg-[#f1f6f4] text-[#042330] border-2 border-[#e1e7ea] rounded-lg"
                      type="text"
                      placeholder="Search for books"
                    ></input>
                    {/* search icon class */}
                    <div className="flex items-center absolute h-full right-2 justify-end border-1-2 border-[#e1e7ea] pl-2">
                      {/* class for actual mag icon */}
                      <svg
                        className="w-6 h-6 text-[#03314b]"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        xmlns="https://www.w3.org/2000/svg"
                      >
                        <path
                          d="M 909.6 854.5 L 649.9 594.8 C 690.2 542.7 712 479 712 412 c 0 -80.2 -31.3 -155.4 -87.9 -212.1 c -56.6 -56.7 -132 -87.9 -212.1 -87.9 s -155.5 31.3 -212.1 87.9 C 143.2 256.5 112 331.8 112 412 c 0 80.1 31.3 155.5 87.9 212.1 C 256.5 680.8 331.8 712 412 712 c 67 0 130.6 -21.8 182.7 -62 l 259.7 259.6 a 8.2 8.2 0 0 0 11.6 0 l 43.6 -43.5 a 8.2 8.2 0 0 0 0 -11.6 Z M 570.4 570.4 C 528 612.7 471.8 636 412 636 s -116 -23.3 -158.4 -65.6 C 211.3 528 188 471.8 188 412 s 23.3 -116.1 65.6 -158.4 C 296 211.3 352.2 188 412 188 s 116.1 23.2 158.4 65.6 S 636 352.2 636 412 s -23.3 116.1 -65.6 158.4 Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Hamburger Menu Class */}
                <button className="hidden md:flex items-center justify-center cursor-pointer">
                  {/* class for actual hamburger icon */}
                  <svg
                    className="w-6 h-6 text-[#03314b]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 15 15"
                    strokeWidth="0"
                    width="1em"
                    height="1em"
                    fill="none"
                  >
                    <path
                      d="M 1.5 3 C 1.22386 3 1 3.22386 1 3.5 C 1 3.77614 1.22386 4 1.5 4 H 13.5 C 13.7761 4 14 3.77614 14 3.5 C 14 3.22386 13.7761 3 13.5 3 H 1.5 Z M 1 7.5 C 1 7.22386 1.22386 7 1.5 7 H 13.5 C 13.7761 7 14 7.22386 14 7.5 C 14 7.77614 13.7761 8 13.5 8 H 1.5 C 1.22386 8 1 7.77614 1 7.5 Z M 1 11.5 C 1 11.2239 1.22386 11 1.5 11 H 13.5 C 13.7761 11 14 11.2239 14 11.5 C 14 11.7761 13.7761 12 13.5 12 H 1.5 C 1.22386 12 1 11.7761 1 11.5 Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Overlay Class - covers whole page */}
          <div className="fixed top-0 left-0 w-full h-full bg-[#3a4649] transition-opacity duration-400 ease-in-out z-[10] opacity-[0.65] pointer-events-auto">
            {/*overlay content*/}
          </div>
          {/* The actual sidebar closed? */}
          <div className="fixed top-0 left-0 w-[200px] h[100vh] bg-[#f7f1f9] z-[1000] transition-all duration-300 md:translate-x-0 translate-x-full">
            {/* Summarist Logo Here */}
            <figure className="flex items-center justify-center h-[60px] pt-4 max-w-[160px] mx-auto">
              <img src="logo.png" alt="" />
            </figure>
            {/* Wrapper that wraps the entire sidebar */}
            <div className="flex flex-col justify-between h-[calc(100vh-60px)] pb-5 overflow-y-auto">
              {/* sidebar top class */}
              <div className="flex-1 mt-10">
                {/* the Home link wrapper inside the sidebar */}
                <div className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer">
                  {/* color changes when active */}
                  <div className="bg-[#2bd97c]"></div>
                  {/* icon wrapper */}
                  <div className="flex items-center justify-center mr-2 w-[24px] h-[24px]">
                    {/* The Home Icon */}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M 946.5 505 L 560.1 118.8 l -25.9 -25.9 a 31.5 31.5 0 0 0 -44.4 0 L 77.5 505 a 63.9 63.9 0 0 0 -18.8 46 c 0.4 35.2 29.7 63.3 64.9 63.3 h 42.5 V 940 h 691.8 V 614.3 h 43.4 c 17.1 0 33.2 -6.7 45.3 -18.8 a 63.6 63.6 0 0 0 18.7 -45.3 c 0 -17 -6.7 -33.1 -18.8 -45.2 Z M 568 868 H 456 V 664 h 112 v 204 Z m 217.9 -325.7 V 868 H 632 V 640 c 0 -22.1 -17.9 -40 -40 -40 H 432 c -22.1 0 -40 17.9 -40 40 v 228 H 238.1 V 542.3 h -96 l 370 -369.7 l 23.1 23.1 L 882 542.3 h -96.1 Z"></path>
                    </svg>
                  </div>
                  <div className="">For you</div>
                </div>
                {/* the My Library link wrapper inside the sidebar */}
                <div className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer">
                  {/* color changes when active */}
                  <div className="bg-[#2bd97c]"></div>
                  {/* icon wrapper */}
                  <div className="flex items-center justify-center mr-2 w-[24px] h-[24px]">
                    {/* The Home Icon */}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M 2 2 a 2 2 0 0 1 2 -2 h 8 a 2 2 0 0 1 2 2 v 13.5 a 0.5 0.5 0 0 1 -0.777 0.416 L 8 13.101 l -5.223 2.815 A 0.5 0.5 0 0 1 2 15.5 V 2 Z m 2 -1 a 1 1 0 0 0 -1 1 v 12.566 l 4.723 -2.482 a 0.5 0.5 0 0 1 0.554 0 L 13 14.566 V 2 a 1 1 0 0 0 -1 -1 H 4 Z"></path>
                    </svg>
                  </div>
                  <div className="">My Library</div>
                </div>
                {/* the Highlights link wrapper inside the sidebar */}
                <div className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer">
                  {/* color changes when active */}
                  <div className="bg-[#2bd97c]"></div>
                  {/* icon wrapper */}
                  <div className="flex items-center justify-center mr-2 w-[24px] h-[24px]">
                    {/* The Home Icon */}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M 17.849 11.808 l -0.707 -0.707 l -9.9 9.9 H 3 v -4.243 L 14.313 5.444 l 5.657 5.657 a 1 1 0 0 1 0 1.414 l -7.07 7.071 l -1.415 -1.414 l 6.364 -6.364 Z m -2.121 -2.121 l -1.415 -1.414 L 5 17.586 v 1.415 h 1.414 l 9.314 -9.314 Z m 2.828 -7.071 l 2.829 2.828 a 1 1 0 0 1 0 1.414 L 19.97 8.273 L 15.728 4.03 l 1.414 -1.414 a 1 1 0 0 1 1.414 0 Z"></path>
                    </svg>
                  </div>
                  <div className="">Highlights</div>
                </div>
                {/* the Search link wrapper inside the sidebar */}
                <div className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer">
                  {/* color changes when active */}
                  <div className="bg-[#2bd97c]"></div>
                  {/* icon wrapper */}
                  <div className="flex items-center justify-center mr-2 w-[24px] h-[24px]">
                    {/* The Home Icon */}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M 909.6 854.5 L 649.9 594.8 C 690.2 542.7 712 479 712 412 c 0 -80.2 -31.3 -155.4 -87.9 -212.1 c -56.6 -56.7 -132 -87.9 -212.1 -87.9 s -155.5 31.3 -212.1 87.9 C 143.2 256.5 112 331.8 112 412 c 0 80.1 31.3 155.5 87.9 212.1 C 256.5 680.8 331.8 712 412 712 c 67 0 130.6 -21.8 182.7 -62 l 259.7 259.6 a 8.2 8.2 0 0 0 11.6 0 l 43.6 -43.5 a 8.2 8.2 0 0 0 0 -11.6 Z M 570.4 570.4 C 528 612.7 471.8 636 412 636 s -116 -23.3 -158.4 -65.6 C 211.3 528 188 471.8 188 412 s 23.3 -116.1 65.6 -158.4 C 296 211.3 352.2 188 412 188 s 116.1 23.2 158.4 65.6 S 636 352.2 636 412 s -23.3 116.1 -65.6 158.4 Z"></path>
                    </svg>
                  </div>
                  <div className="">Search</div>
                </div>
              </div>
            </div>
            {/* sidebar bottom - empty div */}
            <div className="">
              {/* sidebar Settings link wrapper */}
              <div className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer">
                {/* sidebar link line? */}
                <div className="w-[5px] h-full bg-transparent mr-4"></div>
                {/* icon wrapper */}
                <div className="flex items-center justify-center mr-2 w-[24px] h-[24px]">
                  {/* The Settings Icon */}
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 15 15"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 7.07095 0.650238 C 6.67391 0.650238 6.32977 0.925096 6.24198 1.31231 L 6.0039 2.36247 C 5.6249 2.47269 5.26335 2.62363 4.92436 2.81013 L 4.01335 2.23585 C 3.67748 2.02413 3.23978 2.07312 2.95903 2.35386 L 2.35294 2.95996 C 2.0722 3.2407 2.0232 3.6784 2.23493 4.01427 L 2.80942 4.92561 C 2.62307 5.2645 2.47227 5.62594 2.36216 6.00481 L 1.31209 6.24287 C 0.924883 6.33065 0.650024 6.6748 0.650024 7.07183 V 7.92897 C 0.650024 8.32601 0.924883 8.67015 1.31209 8.75794 L 2.36228 8.99603 C 2.47246 9.375 2.62335 9.73652 2.80979 10.0755 L 2.2354 10.9867 C 2.02367 11.3225 2.07267 11.7602 2.35341 12.041 L 2.95951 12.6471 C 3.24025 12.9278 3.67795 12.9768 4.01382 12.7651 L 4.92506 12.1907 C 5.26384 12.377 5.62516 12.5278 6.0039 12.6379 L 6.24198 13.6881 C 6.32977 14.0753 6.67391 14.3502 7.07095 14.3502 H 7.92809 C 8.32512 14.3502 8.66927 14.0753 8.75705 13.6881 L 8.99505 12.6383 C 9.37411 12.5282 9.73573 12.3773 10.0748 12.1909 L 10.986 12.7653 C 11.3218 12.977 11.7595 12.928 12.0403 12.6473 L 12.6464 12.0412 C 12.9271 11.7604 12.9761 11.3227 12.7644 10.9869 L 12.1902 10.076 C 12.3768 9.73688 12.5278 9.37515 12.638 8.99596 L 13.6879 8.75794 C 14.0751 8.67015 14.35 8.32601 14.35 7.92897 V 7.07183 C 14.35 6.6748 14.0751 6.33065 13.6879 6.24287 L 12.6381 6.00488 C 12.528 5.62578 12.3771 5.26414 12.1906 4.92507 L 12.7648 4.01407 C 12.9766 3.6782 12.9276 3.2405 12.6468 2.95975 L 12.0407 2.35366 C 11.76 2.07292 11.3223 2.02392 10.9864 2.23565 L 10.0755 2.80989 C 9.73622 2.62328 9.37437 2.47229 8.99505 2.36209 L 8.75705 1.31231 C 8.66927 0.925096 8.32512 0.650238 7.92809 0.650238 H 7.07095 Z M 4.92053 3.81251 C 5.44724 3.44339 6.05665 3.18424 6.71543 3.06839 L 7.07095 1.50024 H 7.92809 L 8.28355 3.06816 C 8.94267 3.18387 9.5524 3.44302 10.0794 3.81224 L 11.4397 2.9547 L 12.0458 3.56079 L 11.1882 4.92117 C 11.5573 5.44798 11.8164 6.0575 11.9321 6.71638 L 13.5 7.07183 V 7.92897 L 11.932 8.28444 C 11.8162 8.94342 11.557 9.55301 11.1878 10.0798 L 12.0453 11.4402 L 11.4392 12.0462 L 10.0787 11.1886 C 9.55192 11.5576 8.94241 11.8166 8.28355 11.9323 L 7.92809 13.5002 H 7.07095 L 6.71543 11.932 C 6.0569 11.8162 5.44772 11.5572 4.92116 11.1883 L 3.56055 12.046 L 2.95445 11.4399 L 3.81213 10.0794 C 3.4431 9.55266 3.18403 8.94326 3.06825 8.2845 L 1.50002 7.92897 V 7.07183 L 3.06818 6.71632 C 3.18388 6.05765 3.44283 5.44833 3.81171 4.92165 L 2.95398 3.561 L 3.56008 2.95491 L 4.92053 3.81251 Z M 9.02496 7.50008 C 9.02496 8.34226 8.34223 9.02499 7.50005 9.02499 C 6.65786 9.02499 5.97513 8.34226 5.97513 7.50008 C 5.97513 6.65789 6.65786 5.97516 7.50005 5.97516 C 8.34223 5.97516 9.02496 6.65789 9.02496 7.50008 Z M 9.92496 7.50008 C 9.92496 8.83932 8.83929 9.92499 7.50005 9.92499 C 6.1608 9.92499 5.07513 8.83932 5.07513 7.50008 C 5.07513 6.16084 6.1608 5.07516 7.50005 5.07516 C 8.83929 5.07516 9.92496 6.16084 9.92496 7.50008 Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <div className="">Settings</div>
                </div>
              </div>
              {/* sidebar Help & Support link wrapper */}
              <div className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer">
                {/* sidebar link line? */}
                <div className="w-[5px] h-full bg-transparent mr-4"></div>
                {/* icon wrapper */}
                <div className="flex items-center mr-2 w-[24px] h-[24px]">
                  {/* The Help and Settings Icon - really weird */}
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M 9.09 9 a 3 3 0 0 1 5.83 1 c 0 2 -3 3 -3 3" />

                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  <div className="">Help & Support</div>
                </div>
              </div>
              {/* sidebar Logout link wrapper */}
              <div className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer">
                {/* sidebar link line? */}
                <div className="w-[5px] h-full bg-transparent mr-4"></div>
                {/* icon wrapper */}
                <div className="flex items-center mr-2 w-[24px] h-[24px]">
                  {/* The Logout Icon */}
                  <svg
                    className="stroke-current fill-none h-4 w-4"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                  <div className="">Logout</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
