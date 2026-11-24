import { AiFillBulb, AiFillAudio, AiFillFileText } from "react-icons/ai";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { BiCrown } from "react-icons/bi";
import { RiLeafLine } from "react-icons/ri";
import Image from "next/image";
import logo from "../public/logo.png";
import landing from "../public/landing.png";

export default function Home() {
  return (
    <main>
      <nav className="h-[80px]">
        <div className="flex justify-between items-center max-w-[1070px] w-full h-full mx-auto px-6">
          <figure className="max-w-[200px]">
            <Image
              className="w-full h-auto"
              src={logo}
              sizes="200px"
              alt="logo"
            />
          </figure>
          <ul className="flex gap-6">
            <li className="cursor-pointer text-[#2bd97c] transition-colors duration-100 hover:text-[#2bd97c]">
              Login
            </li>
            <li className="hidden md:flex cursor-not-allowed text-[#032b41] transition-colors duration-100">
              About
            </li>
            <li className="hidden md:flex cursor-not-allowed text-[#032b41] transition-colors duration-100">
              Contact
            </li>
            <li className="hidden md:flex cursor-not-allowed text-[#032b41] transition-colors duration-100">
              Help
            </li>
          </ul>
        </div>
      </nav>
      <section id="">
        <div className="py-10 w-full">
          <div className="max-w-[1070px] w-full mx-auto px-6">
            <div className="flex">
              <div className="w-full flex flex-col items-center text-center md:items-start md:text-left">
                <h1 className="text-2xl md:text-[40px] leading-tight font-bold mb-6 text-[#032b41]">
                  Gain more knowledge <br className="hidden md:flex" /> in less
                  time
                </h1>
                <div className="text-[#394547] text-lg font-light mb-6 leading-relaxed">
                  Great summaries for busy people,{" "}
                  <br className="hidden md:flex" /> individuals who barely have
                  time to read, <br className="hidden md:flex" /> and even
                  people who don&apos;t like to read.
                </div>
                <button className="bg-[#2bd97c] text-[#032b41] w-full h-10 rounded-md text-base transition-colors duration-200 flex items-center justify-center max-w-[300px] min-w-[180px]">
                  Login
                </button>
              </div>
              <figure className="w-full hidden md:flex justify-end">
                <Image
                  className="w-full h-auto max-w-[400px] object-contain"
                  src={landing}
                  sizes="(min-width: 848px) 400px, 50vw"
                  alt="A collection of books"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section id="">
        <div className="py-10 w-full">
          <div className="max-w-[1070px] w-full mx-auto px-6">
            <h2 className="text-[32px] text-[#032b41] text-center mb-8 font-bold">
              Understand books in few minutes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
              <div className="flex flex-col items-center text-center">
                <div className="flex justify-center mb-2 text-[#032b41]">
                  <AiFillFileText className="w-12 h-12 md:w-[60px] md:h-[60px]" />
                </div>
                <div className="text-2xl text-[#032b41] mb-4 font-medium">
                  Read or listen
                </div>
                <div className="text-lg text-[#394547] font-light">
                  Save time by getting the core ideas from the best books.
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex justify-center mb-2 text-[#032b41]">
                  <AiFillBulb className="w-12 h-12 md:w-[60px] md:h-[60px]" />
                </div>
                <div className="text-2xl text-[#032b41] mb-4 font-medium">
                  Find your next read
                </div>
                <div className="text-lg text-[#394547] font-light">
                  Explore book lists and personalized recommendations.
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex justify-center mb-2 text-[#032b41]">
                  <AiFillAudio className="w-12 h-12 md:w-[60px] md:h-[60px]" />
                </div>
                <div className="text-2xl text-[#032b41] mb-4 font-medium">
                  Briefcasts
                </div>
                <div className="text-lg text-[#394547] font-light">
                  Gain valuable insights from briefcasts.
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-20 mb-8 md:mb-24">
              <div className="w-full flex flex-col justify-center">
                <div className="text-2xl md:text-[32px] font-medium text-[#6b757b] mb-4 active:text-[#2bd97c]">
                  Enhance your knowledge
                </div>
                <div className="text-2xl md:text-[32px] font-medium text-[#6b757b] mb-4 active:text-[#2bd97c]">
                  Achieve greater success
                </div>
                <div className="text-2xl md:text-[32px] font-medium text-[#6b757b] mb-4 active:text-[#2bd97c]">
                  Improve your health
                </div>
                <div className="text-2xl md:text-[32px] font-medium text-[#6b757b] mb-4 active:text-[#2bd97c]">
                  Develop better parenting skills
                </div>
                <div className="text-2xl md:text-[32px] font-medium text-[#6b757b] mb-4 active:text-[#2bd97c]">
                  Increase happiness
                </div>
                <div className="text-2xl md:text-[32px] font-medium text-[#6b757b] mb-4 last:mb-0 active:text-[#2bd97c]">
                  Be the best version of yourself!
                </div>
              </div>
              <div className="w-full flex flex-col justify-center gap-6 bg-[#f1f6f4] py-10 px-6">
                <div className="flex gap-4">
                  <div className="text-[#0365f2] text-xl font-semibold mt-1">
                    93%
                  </div>
                  <div className="text-base md:text-xl font-light text-[#394547]">
                    of Summarist members <b>significantly increases</b> reading
                    frequency.
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#0365f2] text-xl font-semibold mt-1">
                    96%
                  </div>
                  <div className="text-base md:text-xl font-light text-[#394547]">
                    of Summarist members <b>establish better</b> habits.
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#0365f2] text-xl font-semibold mt-1">
                    90%
                  </div>
                  <div className="text-base md:text-xl font-light text-[#394547]">
                    have made <b>significant positive</b> change to their lives.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-20">
              <div className="order-1 md:order-0 w-full flex flex-col justify-center gap-6 bg-[#f1f6f4] py-10 px-6">
                <div className="flex gap-4">
                  <div className="text-[#0365f2] text-xl font-semibold mt-1">
                    91%
                  </div>
                  <div className="text-base md:text-xl font-light text-[#394547]">
                    of Summarist members <b>report feeling more productive</b>{" "}
                    after incorporating the service into their daily routine.
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#0365f2] text-xl font-semibold mt-1">
                    94%
                  </div>
                  <div className="text-base md:text-xl font-light text-[#394547]">
                    of Summarist members <b>noticed an improvement</b> in their
                    overall comprehension and retention of information.
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#0365f2] text-xl font-semibold mt-1">
                    88%
                  </div>
                  <div className="text-base md:text-xl font-light text-[#394547]">
                    of Summarist members <b>feel more informed</b> about current
                    events and industry trends since using the platform.
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-start md:items-end">
                <div className="text-2xl md:text-[32px] font-medium text-[#6b757b] mb-4 active:text-[#2bd97c]">
                  Expand your learning
                </div>
                <div className="text-2xl md:text-[32px] font-medium text-[#6b757b] mb-4 active:text-[#2bd97c]">
                  Accomplish your goals
                </div>
                <div className="text-2xl md:text-[32px] font-medium text-[#6b757b] mb-4 active:text-[#2bd97c]">
                  Strengthen your vitality
                </div>
                <div className="text-2xl md:text-[32px] font-medium text-[#6b757b] mb-4 active:text-[#2bd97c]">
                  Become a better caregiver
                </div>
                <div className="text-2xl md:text-[32px] font-medium text-[#6b757b] mb-4 active:text-[#2bd97c]">
                  Improve your mood
                </div>
                <div className="text-2xl md:text-[32px] font-medium text-[#6b757b] mb-4 last:mb-0 active:text-[#2bd97c]">
                  Maximize your abilities
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="">
        <div className="max-w-[1070px] w-full mx-auto px-6">
          <div className="py-10 w-full">
            <div className="text-2xl text-[#032b41] text-center mb-8 font-bold">
              What our members say
            </div>
            <div className="max-w-[600px] mx-auto">
              <div className="bg-[#fff3d7] p-4 mb-8 rounded font-light">
                <div className="flex gap-2 mb-2 text-[#032b41]">
                  <div className="review name">Hanna M.</div>
                  <div className="flex">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                  </div>
                </div>
                <div className="text-[#394547] tracking-tight leading-normal">
                  This app has been a <b>game-changer</b> for me! It&apos;s
                  saved me so much time and effort in reading and comprehending
                  books. Highly recommend it to all book lovers.
                </div>
              </div>
              <div className="bg-[#fff3d7] p-4 mb-8 rounded font-light">
                <div className="flex gap-2 mb-2 text-[#032b41]">
                  <div className="review name">David B.</div>
                  <div className="flex">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                  </div>
                </div>
                <div className="text-[#394547] tracking-tight leading-normal">
                  I love this app! It provides
                  <b>concise and accurate summaries</b> of books in a way that
                  is easy to understand. It&apos;s also very user-friendly and
                  intuitive.
                </div>
              </div>
              <div className="bg-[#fff3d7] p-4 mb-8 rounded font-light">
                <div className="flex gap-2 mb-2 text-[#032b41]">
                  <div className="review name">Nathan S.</div>
                  <div className="flex">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                  </div>
                </div>
                <div className="text-[#394547] tracking-tight leading-normal">
                  This app is a great way to get the main takeaways from a book
                  without having to read the entire thing.
                  <b>The summaries are well-written and informative.</b>{" "}
                  Definitely worth downloading.
                </div>
              </div>
              <div className="bg-[#fff3d7] p-4 mb-8 rounded font-light">
                <div className="flex gap-2 mb-2 text-[#032b41]">
                  <div className="review name">Ryan R.</div>
                  <div className="flex">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                  </div>
                </div>
                <div className="text-[#394547] tracking-tight leading-normal">
                  If you&apos;re a busy person who{" "}
                  <b>loves reading but doesn&apos;t have the time</b> to read
                  every book in full, this app is for you! The summaries are
                  thorough and provide a great overview of the book&apos;s
                  content.
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#2bd97c] text-[#032b41] w-full h-10 rounded text-base transition-colors duration-200 flex items-center justify-center min-w-[180px] hover:bg-[#20ba68] active:translate-y-[1px] max-w-[300px]">
              Login
            </button>
          </div>
        </div>
      </section>
      <section id="">
        <div className="py-10 w-full">
          <div className="max-w-[1070px] w-full mx-auto px-6">
            <div className="text-2xl text-[#032b41] text-center mb-8 font-bold">
              Start growing with Summarist now
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-[#d7e9ff] flex flex-col items-center text-center py-6 pb-10 rounded-[12px]">
                <div className="flex items-center h-[60px] gap-1">
                  <BiCrown />
                </div>
                <div className="text-3xl text-[#032b41] font-semibold mb-4">
                  3 Million
                </div>
                <div className="text-[#394547] font-light">
                  Downloads on all platforms
                </div>
                <div className="bg-[#d7e9ff] flex flex-col items-center text-center py-6 pb-10 rounded-[12px]">
                  <div className="flex items-center h-[60px] gap-1">
                    <svg className="text-[#0365f2] w-12 h-12">
                      <svg className="w-5 h-5">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </svg>
                    </svg>
                  </div>
                  <div className="text-3xl text-[#032b41] font-semibold mb-4">
                    4.5 Stars
                  </div>
                  <div className="text-[#394547] font-light">
                    Average ratings on iOS and Google Play
                  </div>
                </div>
                <div className="bg-[#d7e9ff] flex flex-col items-center text-center py-6 pb-10 rounded-[12px]">
                  <div className="flex items-center h-[60px] gap-1">
                    <RiLeafLine />
                  </div>
                  <div className="text-3xl text-[#032b41] font-semibold mb-4">
                    97%
                  </div>
                  <div className="text-[#394547] font-light">
                    Of Summarist members create a better reading habit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#f1f6f4]">
        <div className="py-10 w-full">
          <div className="max-w-[1070px] w-full mx-auto px-6">
            <div className="relative flex justify-between text-sm my-8 mx-auto">
              <div className="z-10">
                <div className="font-semibold mb-4 text-lg text-[#032b41]">
                  Actions
                </div>
                <div className="mb-3 leading-tight">
                  <a className="text-[#394547] text-sm cursor-not-allowed">
                    Summarist Magazine
                  </a>
                </div>
                <div className="mb-3 leading-tight">
                  <a className="text-[#394547] text-sm cursor-not-allowed">
                    Cancel Subscription
                  </a>
                </div>
                <div className="mb-3 leading-tight">
                  <a className="text-[#394547] text-sm cursor-not-allowed">
                    Help
                  </a>
                </div>
                <div className="mb-0 leading-tight">
                  <a className="text-[#394547] text-sm cursor-not-allowed">
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="z-10">
                <div className="font-semibold mb-4 text-lg text-[#032b41]">
                  Useful Links
                </div>
                <div className="mb-3 leading-tight">
                  <a className="text-[#394547] text-sm cursor-not-allowed">
                    Pricing
                  </a>
                </div>
                <div className="mb-3 leading-tight">
                  <a className="text-[#394547] text-sm cursor-not-allowed">
                    Summarist Business
                  </a>
                </div>
                <div className="mb-3 leading-tight">
                  <a className="text-[#394547] text-sm cursor-not-allowed">
                    Gift Cards
                  </a>
                </div>
                <div className="mb-0 leading-tight">
                  <a className="text-[#394547] text-sm cursor-not-allowed">
                    Authors & Publishers
                  </a>
                </div>
              </div>
              <div className="z-10">
                <div className="font-semibold mb-4 text-lg text-[#032b41]">
                  Company
                </div>
                <div className="mb-3 leading-tight">
                  <a className="text-[#394547] text-sm cursor-not-allowed">
                    About
                  </a>
                </div>
                <div className="mb-3 leading-tight">
                  <a className="text-[#394547] text-sm cursor-not-allowed">
                    Careers
                  </a>
                </div>
                <div className="mb-3 leading-tight">
                  <a className="text-[#394547] text-sm cursor-not-allowed">
                    Partners
                  </a>
                </div>
                <div className="mb-0 leading-tight">
                  <a className="text-[#394547] text-sm cursor-not-allowed">
                    Code of Conduct
                  </a>
                </div>
              </div>
              <div className="z-10">
                <div className="font-semibold mb-4 text-lg text-[#032b41]">
                  Other
                </div>
                <div className="mb-3 leading-tight">
                  <a className="text-[#394547] text-sm cursor-not-allowed">
                    Sitemap
                  </a>
                </div>
                <div className="mb-3 leading-tight">
                  <a className="text-[#394547] text-sm cursor-not-allowed">
                    Legal Notices
                  </a>
                </div>
                <div className="mb-3 leading-tight">
                  <a className="text-[#394547] text-sm cursor-not-allowed">
                    Terms of Service
                  </a>
                </div>
                <div className="mb-0 leading-tight">
                  <a className="text-[#394547] text-sm cursor-not-allowed">
                    Privacy Policies
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-[#032b41] font-medium">
                Copyright &copy; 2023 Summarist
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
