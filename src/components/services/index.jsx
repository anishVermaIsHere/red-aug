import { servicesTags } from "../../utils/constants";
import { Icons } from "../common/Icons";
import Searchbox from "../common/Searchbox";

const Services = () => {
  return (
    <section className="px-4 py-30 w-full">
      <h1 className="text-6xl text-center text-white">Explore our services</h1>
      <Searchbox />
      <div className="flex flex-wrap justify-center items-center gap-4 p-4 mx-auto w-full">
        {servicesTags.map((tg) => (
          <div className="px-3 py-2 text-center cursor-pointer hover:bg-gray-500 text-white border border-gray-400 rounded-full">
            {tg.label}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 p-4">
        <div className="col-span-5 lg:col-span-3 h-80 flex flex-col justify-end p-8 bg-primary shadow-xl rounded-3xl bg-radial">
          <p className="text-3xl text-white mb-5">AI Strategy & Advisory</p>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo odit
            aliquid ipsam nam libero earum, nihil dicta dolorum dolorem
            laudantium incidunt distinctio, cupiditate alias sit consectetur
            voluptates veritatis error quo.
          </p>
        </div>
        <div className="col-span-5 lg:col-span-2 h-80 flex flex-col justify-end p-8 bg-purple-950 bg-[url('https://img.freepik.com/premium-photo/artificial-intelligence-metaverse-background-banner-showing-ai-technology-generative-ai_620624-6970.jpg')] bg-cover shadow-xl rounded-3xl">
          <p className="text-3xl text-white mb-5">Generative AI & Large Language Models (LLMs)</p>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo odit
            aliquid ipsam nam libero earum, nihil dicta dolorum dolorem
            laudantium incidunt distinctio, cupiditate alias sit consectetur
            voluptates veritatis error quo.
          </p>
        </div>
        <div className="col-span-5 lg:col-span-2 h-80 flex flex-col justify-end p-8 bg-purple-950 bg-[url('https://ats.org/wp-content/uploads/2023/08/AdobeStock_551568044.jpeg')] bg-cover shadow-xl rounded-3xl">
          <p className="text-3xl text-white mb-5">Computer Vision & Image Analysis</p>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo odit
            aliquid ipsam nam libero earum, nihil dicta dolorum dolorem
            laudantium incidunt distinctio, cupiditate alias sit consectetur
            voluptates veritatis error quo.
          </p>
        </div>
        <div className="col-span-5 lg:col-span-3 h-80 flex flex-col justify-end p-8 bg-primary shadow-xl rounded-3xl bg-radial">
          <p className="text-3xl text-white mb-5">Machine Learning & Deep Learning</p>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo odit
            aliquid ipsam nam libero earum, nihil dicta dolorum dolorem
            laudantium incidunt distinctio, cupiditate alias sit consectetur
            voluptates veritatis error quo.
          </p>
        </div>
        <div className="col-span-5 lg:col-span-3 h-80 flex flex-col justify-end p-8 bg-primary shadow-xl rounded-3xl bg-radial">
          <p className="text-3xl text-white mb-5">Web Scraping & Big Data Extraction</p>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo odit
            aliquid ipsam nam libero earum, nihil dicta dolorum dolorem
            laudantium incidunt distinctio, cupiditate alias sit consectetur
            voluptates veritatis error quo.
          </p>
        </div>
        <div className="col-span-5 lg:col-span-2 h-80 flex flex-col justify-end p-8 bg-purple-950 bg-[url('https://murf.ai/resources/media/posts/61/ai-technology-brain-background-digital-transformation-concept-1-1.jpg')] bg-cover shadow-xl rounded-3xl">
          <p className="text-3xl text-white mb-5">AI for Industry specific Applications</p>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo odit
            aliquid ipsam nam libero earum, nihil dicta dolorum dolorem
            laudantium incidunt distinctio, cupiditate alias sit consectetur
            voluptates veritatis error quo.
          </p>
        </div>
        <div className="col-span-5 h-80 flex flex-col justify-end p-8 bg-purple-950 bg-[url('https://img.freepik.com/premium-photo/dark-black-abstract-modern-background-ai-generated_406939-8850.jpg?w=900')] bg-cover shadow-xl rounded-3xl">
          <p className="text-3xl text-white mb-5">Third Party AI & API Integrations</p>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo odit
            aliquid ipsam nam libero earum, nihil dicta dolorum dolorem
            laudantium incidunt distinctio, cupiditate alias sit consectetur
            voluptates veritatis error quo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
