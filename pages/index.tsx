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
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
	pageInfo: PageInfo;
	experiences: Experience[];
	skills: Skill[];
	projects: Project[];
	socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
	return (
		<div className='bg-[#141414] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scroll-smooth'>
			<Head>
				<title>{pageInfo?.name} - Developer</title>
			</Head>
			<Header socials={socials} />

			{/* Hero */}
			<section id='hero' className='snap-center'>
				<Hero pageInfo={pageInfo} />
			</section>

			{/* About */}
			{/* <section id='about' className='snap-center'>
				<About pageInfo={pageInfo} />
			</section> */}

			<section id='experience' className='snap-center'>
				<WorkExperience experiences={experiences} />
			</section>

			<section id='skills' className='snap-start'>
				<Skills skills={skills} />
			</section>

			<section id='projects' className='snap-start'>
				<Projects projects={projects} />
			</section>

			{/* <section id='contact' className='snap-start'>
				<ContactMe pageInfo={pageInfo} />
			</section> */}

			<footer className='sticky bottom-2  cursor-pointer'>
				<div className='flex items-center justify-center'>
					<Link href='#hero'>
						<img
							className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
							src='https://cdn.sanity.io/images/zod44fgn/production/6b87774b51f684556a568e735af90a486cb2d862-3024x3604.jpg'
							alt=''
						/>
					</Link>
				</div>
			</footer>
		</div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
	const pageInfo: PageInfo = await fetchPageInfo();
	const experiences: Experience[] = await fetchExperiences();
	const skills: Skill[] = await fetchSkills();
	const projects: Project[] = await fetchProjects();
	const socials: Social[] = await fetchSocials();

	return {
		props: {
			pageInfo,
			experiences,
			skills,
			projects,
			socials,
		},

		// Next.js will attempt to regenerate the page:
		// when a request comes in
		// at most once every 10 seconds
		// revalidate: 10,
	};
};
