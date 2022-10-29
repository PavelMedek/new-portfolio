import { motion } from "framer-motion";
import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { Exprerience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo[];
  experiences: Exprerience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 ">
      <Head>
        <title>{pageInfo.name} - Portfolie</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className=" snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className=" snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className=" snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className=" snap-start">
        <Skills skills={skills} />
      </section>

      {/* Projects */}

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className=" snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className=" sticky bottom-5 w-full cursor-pointer">
          <div className=" flex items-center justify-center">
            <motion.img
              className=" h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://scontent.fprg5-1.fna.fbcdn.net/v/t39.30808-6/274641580_2488156411318596_2155048477663333313_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=DbVAhAEhSJMAX9Pbnr_&_nc_ht=scontent.fprg5-1.fna&oh=00_AfAI0mc5wqvj0rQSoBM7L43bbuqpHhmZjF3fK7acFyNp9g&oe=6362B5B9"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo[] = await fetchPageInfo();
  const experiences: Exprerience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
  };
};
