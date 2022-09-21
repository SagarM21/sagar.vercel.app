import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
	directionLeft?: boolean;
	skill: Skill;
};

const Skill = ({ directionLeft, skill }: Props) => {
	return (
		<div className='group relative flex cursor-pointer'>
			<motion.img
				initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
				className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-24 md:h-24 filter group-hover:grayscale transition duration-300 ease-in-out'
				src={urlFor(skill?.image).url()}
			/>
			<div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 md:w-24 md:h-24 ease-in-out group-hover:bg-white h-20 w-20 rounded-full z-0'>
				<div className='flex items-center justify-center h-full'>
					<p className='text-3xl font-bold opacity-100 text-black'>
						{skill?.progress}%
					</p>
				</div>
			</div>
		</div>
	);
};

export default Skill;
