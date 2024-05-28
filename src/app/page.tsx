"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

type button = {
  button: HTMLButtonElement;
};

type FieldValue = {
  Username: string;
  Email: string;
  Password: string;
  pattern?: undefined;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValue>();

  const onSubmit: SubmitHandler<FieldValue> = (data) => console.log(data);


  return (
    <main className="">
      {/* <div className="bg-green-500">
       <h1 className="text-white">This is the Home Page</h1>
      </div> */}

      <div className="flex xl:flex-row flex-col justify-center items-start  p-[4rem] gap-[4rem] md:flex md:justify-center md:items-center  md:w-[450]">
        <div className="w-[400px] xl:mt-[8rem]">
          <strong>
            <h1 className="uppercase text-6xl w-[250px] mb-[1rem]">
              hi, i am robert garcia
            </h1>
          </strong>
          <p className="text-lg mb-[1rem] text-slate-500 w-[300px]">
            I build things for the web as a Nigerian base Software developer
            heavy on Front-end Engineering. Am passionate about building
            accessible user friendly website and Mobile Apps
          </p>
          <div className="flex  items-center gap-[1rem]">
            <Link href="/contact">
              <button className="bg-yellow-300 p-[.4rem] w-[8rem] mr-[1rem] rounded-full uppercase  font-bold text-sm">
                Contact me
              </button>
            </Link>

            <button className="w-[2.5rem] h-[2.5rem] shadow-2xl bg-slate-800  rounded-full">
              <Image
                className="w-[2rem] h-[2rem] rounded-full ml-[.32rem]"
                src="/linkedin.svg"
                width={20}
                height={20}
                alt="linkedin logo"
              />
            </button>
            <button className="w-[2.5rem] h-[2.5rem]  bg-slate-800  rounded-full">
              <Image
                className="w-[2rem] h-[2rem] rounded-full ml-[.32rem]"
                src="/github.svg"
                width={20}
                height={20}
                alt="Github logo"
              />
            </button>
          </div>
        </div>
        <div className="">
          <div className="xl:w-[500px] w-[300px] xl:ml-[5rem] ">
            <Image
              className="w-[100%]"
              src="/image.png"
              width={500}
              height={500}
              alt="profile picture"
            />
          </div>
        </div>

        {/* // FEATURE PROJECT LINE */}
      </div>
      <hr className="bg-slate-800 xl:w-[80rem] w-full  xl:ml-[2rem]" />

      <div className="flex xl:flex-row flex-col justify-center items-center xl:gap-[3rem] xl:p-[2rem] p-0 ">
        <div className="xl:mt-[2rem] mt-0">
          {/* <h1 className='uppercase font-bold text-6xl w-[400px] ml-[14rem] xl:ml-0 xl:w-[600px]'>feature projects</h1> */}
          {/* <p className='w-[350px] text-slate-600 ml-[14rem] xl:ml-0'>Here are some of the selected projects that showcase my passion fro front-end Engineering</p> */}
          <div className="bg-slate-700 xl:w-[36rem] w-[22rem] h-[28rem] mt-[2rem] active:scale-0 cursor-pointer hover:-translate-y-6  ">
            <div className="flex justify-center items-center xl:h-full shadow-2xl ">
              <Image
                className="xl:w-[55%] w-[90%] xl:ml-0"
                src="/movie-app.jpg.png"
                width={300}
                height={300}
                alt="project image"
              />
            </div>
          </div>
        </div>

        <div className="xl:w-[40%] w-[80%]">
          <h3 className="text-lg font-medium uppercase text-white xl:mt-[5rem] mb-[1rem] w-[300px] xl:w-600px mt-[2rem]">
            Movie-App Landing page for our favorite show
          </h3>
          <p>
            Breathe life into a movie-app webpage for our beloved show,
            Adventure Time. Delivered a fully responsive design with dynamic
            content capabilities, seamlessly integrating a space for movie
            addition feature to keep fans updated with the latest Adventure{" "}
          </p>
          <p className="text-green-500">
            <span className="text-slate-700 font-sans font-extrabold">Technology stack:</span>{" "}
            React, Tailwind, MongoDB.
          </p>
          <h2>
            <span className="text-slate-700 font-sana">Challenges:</span> In this
            project i did not use React Router, i did the foundational Routing
            by passing Props and that was a huge challenge at First
          </h2>
          <h3>
            <span className="text-slate-700 font-sans font-extrabold">Solution:</span> After
            regular error prompts, i had to make research on the error and got
            different solutions for one challenge and that was how i learnt that
            exercise without Routing{" "}
          </h3>
          <h2 className="uppercase font-semibold mt-[1rem] mb-[.5rem] text-white">
            Project info
          </h2>
          <hr />
          <span className="flex justify-between mt-[2rem]">
            <p className="text-slate-700 font-extrabold">Year</p>
            <p className="font-bold">2023</p>
          </span>

          <span className="flex justify-between mt-[2rem]">
            <p className="text-slate-700 font-extrabold">Role</p>
            <p>Front-end Engineering</p>
          </span>
          <div className=" flex justify-between mt-[2rem] cursor-pointer">
            <span className="flex cursor-pointer w-[10rem] gap-2">
              <a href="https://tinyurl.com/yc7n9vb5" target="_blank"></a>
              <h1 className="uppercase text-green-500 underline">LIVE DEMO</h1>
              <Image
                src="/arrow-up-right-circle-fill.svg"
                width={20}
                height={20}
                alt="Arrow"
              />
            </span>
            {/* <h1 className='text-yellow-300 underline'>SEE ON GITHUB</h1> */}
            <a
              href="https://github.com/DevzekiFaith/movie-app.git"
              target="_blank"
            >
              <h1 className="uppercase text-yellow-300 underline">
                {" "}
                <span className="flex gap-2">
                  <Image
                    src="/github.svg"
                    width={20}
                    height={20}
                    alt="Github"
                  />
                  SEE ON GITHUB
                </span>{" "}
              </h1>
            </a>
          </div>
        </div>
      </div>

      {/* PROJECT TWO */}

      <div className="flex  xl:flex-row flex-col justify-center items-center xl:gap-[3rem] xl:p-[2rem] mt-[2rem]">
        <div className="xl:mt-[2rem]">
          {/* <h1 className='uppercase font-bold text-6xl w-[400px] xl:w-[600px] xl:ml-0 ml-[4rem]'>feature projects</h1> */}
          {/* <p className='w-[350px] text-slate-600 xl:ml-0 ml-[4rem]'>Here are some of the selected projects that showcase my passion fro front-end Engineering</p> */}
          <div className="bg-slate-700 xl:w-[36rem] w-[85%] xl:ml-0  ml-[2rem] h-[28rem] mt-[2rem] relative active:scale-0 cursor-pointer hover:-translate-y-6 ">
            <Image
              className="h-[22rem]"
              src="/psychedelic-paper-shapes-with-copy-space.jpg"
              width={300}
              height={300}
              alt="background Image"
            />
            <div className="flex justify-center items-center shadow-2xl">
              <Image
                className="xl:w-[75%] h-[18rem] absolute top-[4rem] "
                src="/PRACTICE2.jpg"
                width={400}
                height={400}
                alt="project image"
              />
            </div>
          </div>
        </div>

        <div className="xl:w-[40%] w-[80%] mt-[2rem]">
          <h3 className="text-lg  uppercase text-slate-900 font-extrabold xl:mt-[5rem] mb-[1rem]">
            Real Estate Landing page for our favorite show
          </h3>
          <p>
            Basic Real Estate Web and mobile App development, Adventure Time.
            Delivered a fully responsive design with dynamic content
            capabilities, seamlessly integrating a space for Property Addition
            and image feature to keep fans updated with the latest Adventure{" "}
          </p>
          <p className="text-green-500">
            <span className="text-slate-700 font-extrabold">Technology stack:</span>{" "}
            React, Tailwind, Html, Css, React Router, NavLink,useNavigate.
          </p>
          <h2>
            <span className="text-slate-700 font-sana font-extrabold">Challenges:</span> In this
            project i did not use React Router, i did the foundational Routing
            by passing Props and that was a huge challenge at First
          </h2>
          <h3>
            <span className="text-slate-700font-sans">Solution:</span> After
            regular error prompts, i had to make research on the error and got
            different solutions for one challenge i had to use the
            React-Router-Documentation for a proffered solution{" "}
          </h3>

          <h2 className="uppercase font-semibold mt-[1rem] mb-[.5rem] text-white">
            Project info
          </h2>
          <hr />
          <span className="flex justify-between mt-[2rem]">
            <p className="text-slate-700 font-extrabold">Year</p>
            <p>2023</p>
          </span>

          <span className="flex justify-between mt-[2rem]">
            <p className="text-slate-700 font-extrabold">Role</p>
            <p>Front-end Engineering</p>
          </span>
          <div className=" flex justify-between mt-[2rem] cursor-pointer ">
            <span className="flex cursor-pointer gap-2">
              <a href="https://tinyurl.com/yc7n9vb5" target="_blank"></a>
              <h1 className="uppercase text-green-300 underline">LIVE DEMO</h1>
              <Image src="/arrow-up-right-circle-fill.svg" width={20} height={20} alt="Arrow" />
            </span>
            {/* <h1 className='text-yellow-300 underline'>SEE ON GITHUB</h1> */}
            <a
              href="https://github.com/DevzekiFaith/movie-app.git"
              target="_blank"
            ></a>
            <h1 className="uppercase text-yellow-300 underline">
              {" "}
              <span className="flex gap-2">
                <Image src="/github.svg" width={20} height={20} alt="Github" />
                SEE ON GITHUB
              </span>{" "}
            </h1>
          </div>
        </div>
      </div>

      {/* project 3 */}

      <div className="flex xl:flex-row flex-col justify-center items-center gap-[3rem] p-[2rem] mb-[3rem]">
        <div className="mt-[2rem]">
          {/* <h1 className='uppercase font-bold text-6xl'>feature projects</h1> */}
          {/* <p className='w-[350px] text-slate-600'>Here are some of the selected projects that showcase my passion fro front-end Engineering</p> */}
          <div className="bg-slate-700 xl:w-[36rem] h-[28rem] mt-[2rem] active:scale-0 cursor-pointer hover:-translate-y-6 ">
            <div className="flex justify-center items-center h-full shadow-2xl">
              <Image
                className="w-[100%] h-[16rem]"
                src="/netflix login clone.png"
                width={300}
                height={300}
                alt="project image"
              />
            </div>
          </div>
        </div>

        <div className="xl:w-[40%]">
          <h3 className="text-lg font-medium uppercase text-white xl:mt-[5rem] mb-[1rem]">
            Netflix Landing page for our favorite show
          </h3>
          <p>
            Built a clone Login webpage of Netflix for our beloved show,
            Adventure Time. Delivered a fully responsive design with dynamic
            content capabilities, seamlessly integrating a space for movie
            addition feature to keep fans updated with the latest Adventure. The
            goal was to make the login bg transparent{" "}
          </p>
          <p className="text-green-500">
            <span className="text-slate-900 font-extrabold font-sans">Technology stack:</span>{" "}
            React, Tailwind, Scss and css{" "}
          </p>
          <h2>
            <span className="text-slate-900 font-sana font-extrabold">Challenges:</span> In this
            project i cloned the Login page of Netflix to create a more styled
            background using transparency for glass-like feel
          </h2>
          <h3>
            <span className="text-slate-900 font-sans font-extrabold">Solution:</span> After
            regular error prompts, i had to make research on the error and got
            different solutions for one challenge and that was how i learnt
            making background of things transparent
          </h3>

          <h2 className="uppercase font-semibold mt-[1rem] mb-[.5rem] text-white">
            Project info
          </h2>
          <hr />
          <span className="flex justify-between mt-[2rem]">
            <p className="text-slate-700 font-bold">Year</p>
            <p>2023</p>
          </span>

          <span className="flex justify-between mt-[2rem]">
            <p className="text-slate-700 font-bold">Role</p>
            <p>Front-end Engineering</p>
          </span>
          <div className=" flex justify-between mt-[2rem] cursor-pointer">
            <span className="flex cursor-pointer">
              <a href="https://tinyurl.com/yc7n9vb5" target="_blank"></a>
              <h1 className="uppercase text-black underline w-[6rem]">
                LIVE DEMO
              </h1>
              <Image src="/arrow-up-right-circle-fill.svg" width={20} height={20} alt="Arrow" />
            </span>
            <a
              href="https://github.com/DevzekiFaith/movie-app.git"
              target="_blank"
            >
              <h1 className="uppercase text-yellow-300 underline">
                {" "}
                <span className="flex gap-2">
                  <Image
                    src="/github.svg"
                    width={20}
                    height={20}
                    alt="Github"
                  />
                  SEE ON GITHUB
                </span>{" "}
              </h1>
            </a>
          </div>
        </div>
      </div>

      <hr className="xl:w-[80rem] xl:ml-[2rem] " />

      {/* ABOUT ME LINE */}

      <div className="flex xl:flex-row flex-col justify-center items-center xl:h-[25rem] mt-[2rem] ">
        <div className="w-[100%]">
          <h1 className="text-6xl text-slate-900 font-bold uppercase p-[2rem] text-center xl:ml-[-5rem] active:scale-0 cursor-pointer hover:-translate-y-6">
            about me
          </h1>
        </div>
        <div className="w-[100%] p-[3rem]">
          <h2 className="xl:w-[500px] mb-[2rem] uppercase text-slate-900 font-bold">
            Am a Front-end Engineer based in Nigeria. I have An Architectural
            background{" "}
          </h2>
          <p>
            I am a front-end Engineer based in Nigeria looking for exciting
            opportunities. I have an Architectural background. I like to focus
            on accessibility when developing. Am passionate and curious about
            solving Tech Challenges. Currently, i'm exploring some Front-end
            tools like React.js and Next.js. While i am programming I enjoy
            playing Basketball and more to improve my skills.{" "}
          </p>

          <Link href="/About">
            <h1 className="uppercase underline text-yellow-300 mt-[1rem]">
              MORE ABOUT ME
            </h1>
          </Link>
        </div>
      </div>

      <hr className="xl:w-[80rem] xl:ml-[2rem]" />

      {/* LET'S CONNECT LINE */}

      <div>
        <div className="flex xl:flex-row flex-col justify-center items-center xl:gap-[4rem]">
          <div>
            <div className="xl:ml-[-5rem] ml-[2rem] mt-[3rem]">
              <h1 className="uppercase text-6xl font-bold mb-[1.5rem] active:scale-0 cursor-pointer hover:-translate-y-6">
                let's connect
              </h1>
              <p className="">
                Say hello at{" "}
                <span className="underline cursor-pointer text-yellow-300 ml-1">
                  {" "}
                  zekipossible@gmail.com
                </span>
              </p>
              <a href="" target="_blank"></a>
              <p>for more info, here is my Resume</p>
            </div>
            <div className="flex xl:ml-[-5rem] ml-[2rem] gap-[1rem] mt-[1rem] ">
              <Image
                className="w-[1rem] h-[1rem]"
                src="/linkedin.svg"
                width={20}
                height={20}
                alt="linkedin icon"
              />
              <Image
                className="w-[1rem] h-[1rem]"
                src="/github.svg"
                width={20}
                height={20}
                alt="Github icon"
              />
              <Image
                className="w-[1rem] h-[1rem]"
                src="/twitter-x.svg"
                width={20}
                height={20}
                alt="twitterImage"
              />
              <Image
                className="w-[1rem] h-[1rem]"
                src="/instagram.svg"
                width={20}
                height={20}
                alt="instagramImage"
              />
            </div>
          </div>

          <div className="xl:ml-[6rem] mt-[4rem]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col mb-[1rem]">
                <label>Name:</label>
                <input
                  className="xl:w-[30rem] bg-slate-800 text-white border-0 h-[2.5rem]"
                  type="text"
                  placeholder="Enter UserName"
                  {...register("Username", {
                    required: "Username is required",
                  })}
                />
                <span className="text-red-800 text-sm">
                  {errors.Username?.message}
                </span>
              </div>
              <div className="flex flex-col mb-[1rem]">
                <label>Email:</label>
                <input
                  className="xl:w-[30rem] bg-slate-800 border-0 h-[2.5rem] mb-[1rem] text-white text-sm"
                  type="text"
                  placeholder="Email"
                  {...register("Email", {
                    required: "Email is required",
                    pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
                  })}
                />
                <span className="text-red-800 text-sm">
                  {errors.Email?.message}
                  {errors.Email?.type === "pattern" &&
                    "Email should have the right pattern"}
                </span>
              </div>
              <div className="flex flex-col mb-[1rem]">
                <label>Password:</label>
                <input
                  className="xl:w-[30rem] bg-slate-800 border-0 h-[2.5rem] text-white"
                  type="Password"
                  placeholder="password"
                  {...register("Password", {
                    required: "Password is required",
                    minLength: 5,
                    maxLength: 10,
                  })}
                />
                <span className="text-red-800 text-sm">
                  {errors.Email?.message}
                  {errors.Email?.type === "minLength" &&
                    "Password must not  be less than 4 character"}
                  {errors.Email?.type === "maxLength" &&
                    "Password must be more than 10 character "}
                </span>
              </div>
              <span className="flex flex-col mb-[1rem]">
                <label>Message:</label>
                <textarea
                  className="xl:w-[30rem] w-[20rem] h-[6rem] scroll-m-3 bg-slate-800 border-0 text-white"
                  placeholder="Hello..."
                />
              </span>
              <button
                type="submit"
                className="bg-yellow-300 w-[10rem] h-[3rem] rounded-full text-md uppercase font-bold mt-[2rem] text-black"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
