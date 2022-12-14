import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
	pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
	const [text, count] = useTypewriter({
		words: [`${pageInfo?.name}`, "Guy-who-loves-building.tsx"],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
			<BackgroundCircles />
			<img
				src={urlFor(pageInfo?.heroImage).url()}
				alt=''
				className='relative w-32 h-32 rounded-full mx-auto object-cover'
			/>
			<div className='z-20'>
				<h2 className='text-sm uppercase text-gray-500 tracking-[15px]'>
					{pageInfo?.role}
				</h2>
				<h1 className='text-5xl font-semibold px-10'>
					<span className='mr-3'>{text}</span>
					<Cursor cursorColor='#F7AB0A' />
				</h1>

				<div className='mt-4 space-x-1'>
					{/* <Link href='#about'>
						<button className='heroButton'>About</button>
					</Link> */}
					<Link href='#experience'>
						<button className='heroButton'>Experience</button>
					</Link>
					<Link href='#skills'>
						<button className='heroButton'>Skills</button>
					</Link>
					<Link href='#projects'>
						<button className='heroButton'>Projects</button>
					</Link>
					<a href='/cv.pdf' target='_blank' rel='noreferrer'>
						<button className='heroButton'>Resume</button>
					</a>
				</div>
			</div> 
		</div>
	);
}

export default Hero;
