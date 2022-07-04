// React Icons
import { SiLinkedin, SiGmail, SiGithub } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";

// Component(s)`
import Layout from "../../components/Layout/Index";
import Header from "../../components/Header/Index";
import Anchor from "../../components/Anchor/Index";
import AnchorChildren from "../../components/AnchorChildren/Index";
import SectionTitle from "../../components/SectionTitle/Index";

const About = () => {
  return (
    <Layout title="About">
      <>
        <Header title="About" subtitle="this project!" />{" "}
        <h6 className="mt-8 text-lg text-justify">
          This project was made by{" "}
          <Anchor link="https://isaachermel.com.br" text="Isaac Hermel" />{" "}
          (a.k.a myself) to learn{" "}
          <Anchor link="https://tailwindcss.com/" text="Tailwind CSS" /> and
          it's basics features, seeing the{" "}
          <Anchor
            link="https://www.youtube.com/watch?v=bxmDnn7lrnk&list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw"
            text="Tailwind CSS Tutorial by The Net Ninja"
          />
          .
        </h6>
        <SectionTitle title="Tecnologies used in this web page:" />
        <ul className="list-disc pl-8 text-base mt-8">
          <li>
            <Anchor link="https://reactjs.org/" text="React" />
          </li>
          <li>
            <Anchor link="https://www.typescriptlang.org/" text="TypeScript" />
          </li>
          <li>
            <Anchor link="https://reactrouter.com/" text="React Router" />
          </li>
          <li>
            <Anchor link="https://tailwindcss.com/" text="Tailwind CSS" />
          </li>
        </ul>
        <SectionTitle title="More about me:" />
        <div className="flex flex-col items-center md:flex-row mt-8 gap-8">
          <img
            src="/images/profile.jpg"
            alt="Isaac Hermel's photo"
            className="w-56 h-56 rounded-full object-contain shadow-lg hover:-translate-y-2 transition ease-out duration-300"
          />
          <p className="text-center text-base w-11/12 md:w-2/3">
            I'm a student in the IT area who wants to have new challenges and
            experiencies in the areas of Front End Development and UX/UI Design.
            I'm currently working at{" "}
            <Anchor link="https://umbler.com/br" text="Umbler 🐨" /> as an Front
            End Developer, creating tools and optimizing process to help the
            customer success team and the quality of the service.
          </p>
        </div>
        <SectionTitle title="Contact me:" />
        <div className="flex justify-evenly mt-8">
          <div className="flex flex-col gap-4">
            <AnchorChildren link="https://www.linkedin.com/in/isaachermel/">
              <>
                <SiLinkedin size={22} />
                LinkedIn
              </>
            </AnchorChildren>
            <AnchorChildren link="mailto:isaachermel@gmail.com">
              <>
                <SiGmail size={22} />
                Gmail
              </>
            </AnchorChildren>
          </div>
          <div className="flex flex-col gap-4">
            <AnchorChildren link="https://github.com/H3rmel">
              <>
                <SiGithub size={22} />
                GitHub
              </>
            </AnchorChildren>
            <AnchorChildren link="https://isaachermel.com.br">
              <>
                <CgWebsite size={22} /> Website
              </>
            </AnchorChildren>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default About;
