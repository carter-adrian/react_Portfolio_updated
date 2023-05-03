import React from "react";
import javaQuiz from "../assets/portfolio/JavaQuiz.jpg";
import passwordGen from "../assets/portfolio/PasswordGen.jpg";
import weatherApp from "../assets/portfolio/weatherApp.jpg";
import workScheduler from "../assets/portfolio/workScheduler.jpg";
import TG from "../assets/portfolio/TG.jpg";
import noteTaker from "../assets/portfolio/noteTaker.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: javaQuiz,
      demo: "https://carter-adrian.github.io/Quiz/",
      code: "https://github.com/carter-adrian/Quiz",
    },
    {
      id: 2,
      src: passwordGen,
      demo: "https://github.com/carter-adrian/Password_Create",
      code: "https://carter-adrian.github.io/Password_Create/",
    },
    {
      id: 3,
      src: weatherApp,
      demo: "https://carter-adrian.github.io/weather_app/",
      code: "https://github.com/carter-adrian/weather_app",
    },
    {
      id: 4,
      src: workScheduler,
      demo: "https://carter-adrian.github.io/scheduler_project/",
      code: "https://github.com/carter-adrian/scheduler_project",
    },
    {
      id: 5,
      src: TG,
      demo: "https://drive.google.com/file/d/1LEqWVdmeX1WPRxA1_ICcAQA52fT36ZpP/view",
      code: "https://github.com/carter-adrian/Team_Generator",
    },
    {
      id: 6,
      src: noteTaker,
      demo: "https://carter-adrian.github.io/Note_Taker/",
      code: "https://github.com/carter-adrian/Note_Taker",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-cyan-500 via-cyan-500 to-amber-300 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-amber-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, code, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} 
                target="_blank"
                rel="noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                  </button>
                </a>
                <a href={code}
                target="_blank"
                rel="noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;