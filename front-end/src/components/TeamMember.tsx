import Instagram from '../assets/Instagram_icon-icons.com_66804.png';
import Linkedin from '../assets/linkedin_socialnetwork_17441.png';
import { motion } from 'framer-motion';

type TeamMemberProps = {
	isInView: boolean;
	photo: string;
	alt: string;
	identity: string;
	location: string;
	description: string;
};

const TeamMember = ({
	isInView,
	photo,
	alt,
	identity,
	location,
	description,
}: TeamMemberProps) => {
	return (
		<motion.div
			className='banner-bg flex items-center justify-center gap-8 p-4 brightness-50 grayscale hover:brightness-100 hover:grayscale-0'
			initial={{ opacity: 0, y: 30 }}
			animate={
				isInView
					? { opacity: 1, y: 0, transition: { duration: 1.5 } }
					: { opacity: 0 }
			}
			transition={{ duration: 1.5 }}
		>
			<img src={photo} alt={alt} className='h-full w-1/3 object-cover ' />
			<div className='flex flex-col gap-4 text-gray-100'>
				<h3 className='text-xl font-bold'>{identity}</h3>
				<div className='flex justify-between'>
					<p className='italic'>{location}</p>
					<div className='flex gap-2'>
						<a
							href='https://www.instagram.com/'
							target='_blank'
							rel='noreferrer'
						>
							<img
								src={Instagram}
								alt='Instagram link'
								className='h-2/3'
							/>
						</a>
						<a
							href='https://www.linkedin.com/'
							target='_blank'
							rel='noreferrer'
						>
							<img
								src={Linkedin}
								alt='Linkedin link'
								className='h-2/3'
							/>
						</a>
					</div>
				</div>
				<p className='text-sm'>{description}</p>
			</div>
		</motion.div>
	);
};

export default TeamMember;
