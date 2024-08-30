import React from "react";
type ExperienceCardProps = {
  yearRange: string;
  title: string;
  company: string;
};

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  link: string;
};
const projects = [
  {
    title: "Plantshop Landing Page Design",
    description: "Web/Landing Page",
    image: "URL_TO_PLANTSHOP_IMAGE",
  },
  {
    title: "VPS Hosting Website Design",
    description: "Web/Multipage Website",
    image: "URL_TO_VPS_HOSTING_IMAGE",
  },
  {
    title: "Book Landing Page Design",
    description: "Web/Landing Page",
    image: "URL_TO_BOOK_LANDING_PAGE_IMAGE",
  },
];
const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  link,
}) => {
  return (
    <div className=" bg-transparent p-10 border-t-2 border-black  relative">
      <span className="text-xl mr-10 font-light text-gray-900"> {number}</span>
      <span className="text-3xl mr-20 font-bold text-gray-900">{title}</span>

      <div className="flex absolute top-20 right-4">
        <p className="mt-4 text-gray-700 font-bold mr-5">{description}</p>
        <a href={link} className=" bg-[#8873ef] text-white p-3 rounded-3xl">
          {" "}
          →
        </a>
      </div>
    </div>
  );
};
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full px-8 py-4 flex justify-between items-center bg-white shadow fixed top-0 z-50">
        <div className="flex items-center space-x-2">
          <div className="bg-yellow-500 p-2 rounded-full">
            <span role="img" aria-label="logo">
              🌳
            </span>
          </div>
          <h1 className="text-xl font-bold">Dat Mai</h1>
        </div>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-yellow-500">
            About
          </a>
          <a href="#service" className="hover:text-yellow-500">
            Service
          </a>
          <a href="#portfolio" className="hover:text-yellow-500">
            Portfolio
          </a>
          <a href="#testimonial" className="hover:text-yellow-500">
            Testimonial
          </a>
        </nav>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-full px-4 py-1 text-sm focus:outline-none"
          />
        </div>
      </header>

      <main className="flex h-screen flex-col lg:flex-row items-center justify-between mt-12 mx-20 lg:mt-24 px-">
        <div className="flex flex-col items-start">
          <span className="text-[rgb(134,113,243)] font-bold">Hello!</span>
          <h2 className="text-4xl p-6 lg:text-6xl font-bold leading-tight [text-wrap:balance]">
            We have Software Experience
          </h2>
          <p className="mt-4 max-w-md text-gray-700 [text-wrap:balance]">
            Hi! I'm a Software-engineer creating bold & brave interface design
            for companies all across the world.
          </p>
          <div className="mt-8 flex space-x-4">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
              Let's Talk
            </button>
            <a
              href="#portfolio"
              className="flex items-center text-purple-600 hover:text-purple-800"
            >
              Portfolio
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        <div id="service" className="relative mt-12  lg:mt-0 lg:ml-12">
          <div className="absolute inset-0 rounded-lg bg-[#fcda69] z-0 transform rotate-6"></div>
          <img
            src="https://images.pexels.com/photos/3208317/pexels-photo-3208317.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
            alt="Person"
            className="relative z-10 rounded-lg"
          />
          <button className="absolute mt-3 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white p-4 rounded-full shadow-lg text-gray-900">
            Learn About Me
          </button>
        </div>
      </main>
      <footer className="mt-16 flex space-x-8">
        <a
          href="https://www.instagram.com"
          className="text-gray-900 hover:text-purple-600"
        >
          Instagram
        </a>
        <a
          href="https://www.dribbble.com"
          className="text-gray-900 hover:text-purple-600"
        >
          Dribbble
        </a>
        <a
          href="https://www.behance.net"
          className="text-gray-900 hover:text-purple-600"
        >
          Behance
        </a>
      </footer>

      <section
        id="services"
        className="flex justify-between p-10 h-screen mt-10 bg-[#fcda69]"
      >
        <div className="ml-10">
          <span className="text-[rgb(134,113,243)] font-bold transform rotate-45">
            Service
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Services I Offer
          </h2>

          <p className="mt-4 text-gray-700 max-w-md">
            We help ambitious businesses like yours generate more profits by
            building awareness, driving web traffic, connecting with customers,
            and growing overall sales.
          </p>

          <div className="mt-80 ml-5">
            <svg
              id="logo-89"
              width={100}
              height={100}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="ccustom"
                d="M39.9449 21.4998H32.8003C26.5594 21.4998 21.5003 26.559 21.5003 32.7998V39.9444C31.3502 39.214 39.2145 31.3497 39.9449 21.4998Z"
                fill="#775732"
              />
              <path
                className="ccustom"
                d="M18.5003 39.9444V32.7998C18.5003 26.559 13.4411 21.4998 7.20026 21.4998H0.0556641C0.785998 31.3497 8.65036 39.214 18.5003 39.9444Z"
                fill="#775732"
              />
              <path
                className="ccustom"
                d="M39.9449 18.4998C39.2145 8.64987 31.3502 0.78551 21.5003 0.0551758V7.19977C21.5003 13.4406 26.5594 18.4998 32.8003 18.4998H39.9449Z"
                fill="#775732"
              />
              <path
                className="ccustom"
                d="M18.5003 0.0551758C8.65036 0.78551 0.785998 8.64987 0.0556641 18.4998H7.20026C13.4411 18.4998 18.5003 13.4406 18.5003 7.19977V0.0551758Z"
                fill="#775732"
              />
              <path
                className="ccustom"
                d="M13.583 19.9998C16.3555 18.6145 18.615 16.355 20.0002 13.5825C21.3855 16.355 23.6449 18.6145 26.4175 19.9998C23.6449 21.385 21.3855 23.6445 20.0002 26.417C18.615 23.6445 16.3555 21.385 13.583 19.9998Z"
                fill="#CA9352"
              />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mt-12 mr-10">
          <ServiceCard
            number="01"
            title="Web UI/UX Design"
            description="Explore"
            link="#"
          />
          <ServiceCard
            number="02"
            title="Mobile App UI/UX Design"
            description="Explore"
            link="#"
          />
          <ServiceCard
            number="03"
            title="Dashboard & SaaS Design"
            description="Explore"
            link="#"
          />
        </div>
      </section>
      <section className="flex ml-10 flex-col md:flex-row justify-between p-10 bg-white">
        <div className="md:w-1/2">
          <span className="text-[rgb(134,113,243)] font-bold">Experience</span>
          <h2 className="text-6xl font-semibold mb-4">
            Skills &<br />
            Experience
          </h2>
          <p className="text-lg font-light mt-6 mb-8">
            <span className="inline-block">
              🦋 A specialist in UI/UX design.
            </span>
            <span className="inline-block [text-wrap:balance]">
              ✨ A passion of mine is designing and solving problems through
              user experience,{" "}
            </span>
            <span className="inline-block">😊 primarily on modern web UI.</span>
          </p>
          <h2 className="font-bold  text-3xl my-16">Skills</h2>
          <div className="grid grid-cols-3 gap-4 mr-10 h-1/2">
            <div className="flex flex-col items-center [text-wrap:balance]">
              <div className="bg-black p-4 rounded-full">
                <span role="img" aria-label="Visual Design">
                  🎨
                </span>
              </div>
              <span className="mt-2">Visual Design</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-black p-4 rounded-full">
                <span role="img" aria-label="Wireframe">
                  📐
                </span>
              </div>
              <span className="mt-2">Wireframe</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-black p-4 rounded-full">
                <span role="img" aria-label="User Experience Design">
                  💻
                </span>
              </div>
              <span className="mt-2">User Experience Design</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-black p-4 rounded-full">
                <span role="img" aria-label="Prototype">
                  🔧
                </span>
              </div>
              <span className="mt-2">Prototype</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-black p-4 rounded-full">
                <span role="img" aria-label="Art Direction">
                  🎨
                </span>
              </div>
              <span className="mt-2">Art Direction</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-black p-4 rounded-full">
                <span role="img" aria-label="User Research">
                  🔍
                </span>
              </div>
              <span className="mt-2">User Research</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <h3 className="text-3xl font-bold mb-6">Experience</h3>
          <ul>
            <li className="mb-4 p-4 border-t-2 border-black">
              <div className="flex justify-between">
                <span>2019 - Present</span>
                <span className="font-semibold text-2xl">
                  Software Engineer
                </span>
              </div>
              <div className="text-gray-600 flex justify-end">GTG</div>
            </li>
            <li className="mb-4 p-4 border-t-2 border-black">
              <div className="flex justify-between">
                <span>2018 - 2019</span>
                <span className="font-semibold text-2xl">
                  BackEnd Developer
                </span>
              </div>
              <div className="text-gray-600 flex justify-end">Shopee</div>
            </li>
            <li className="mb-4 p-4 border-t-2 border-black">
              <div className="flex justify-between">
                <span>2016 - 2018</span>
                <span className="font-semibold text-2xl">
                  Web UI/UX Designer
                </span>
              </div>
              <div className="text-gray-600 flex justify-end">Google</div>
            </li>
            <li className="mb-4 p-4 border-t-2 border-black">
              <div className="flex justify-between">
                <span>2014 - 2016</span>
                <span className="font-semibold text-2xl">UI Designer</span>
              </div>
              <div className="text-gray-600 flex justify-end">Facebook</div>
            </li>
          </ul>
          <div className="flex justify-center items-center">
            <img
              src="https://images.pexels.com/photos/3208317/pexels-photo-3208317.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              alt=""
              className="w-1/3 h-1/ rounded-2xl "
            />
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-black text-white py-2 px-4 rounded-full flex items-center">
              <span>Hire Me</span>
              <span className="ml-2">➡️</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-yellow-200 p-8 h-screen">
        <h2 className="text-5xl font-bold mb-8">Latest Projects</h2>
        <div className="relative flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative bg-white shadow-md p-4 rounded-lg transform md:translate-y-${
                index * 16
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-lg text-gray-600">{project.description}</p>
              <a
                href="#"
                className="absolute top-4 right-4 bg-purple-400 text-white p-2 rounded-full"
              >
                <span>&#8599;</span>
              </a>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-block bg-purple-400 text-white py-2 px-6 rounded-full hover:bg-purple-500 transition"
          >
            View all Projects
          </a>
        </div>
      </section>
    </div>
  );
};

export default App;
