import Instagram from '../assets/Instagram_icon-icons.com_66804.png';
import Linkedin from '../assets/linkedin_socialnetwork_17441.png';
import { motion } from 'framer-motion';

type TeamMemberProps = {
	customClassName: string;
	translatePhoto?: string;
	isInView: boolean;
	photo: string;
	alt: string;
	identity: string;
	location: string;
	description: string;
};

const TeamMember = ({
	customClassName,
	translatePhoto,
	isInView,
	photo,
	alt,
	identity,
	location,
	description,
}: TeamMemberProps) => {
	return (
		<div
			className={`relative flex w-full flex-col items-center justify-center gap-8 rounded-lg bg-gray-700 brightness-50 grayscale hover:brightness-100 hover:grayscale-0 xl:flex-row ${customClassName}`}
		>
			<div className={`${translatePhoto} h-full w-1/4`}>
				<img
					src={photo}
					alt={alt}
					className='h-full w-full object-cover '
				/>
			</div>
			<div className='flex w-3/4 flex-col gap-4 text-gray-100'>
				<h3 className='font-playfair text-xl font-bold'>{identity}</h3>
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
				<p className='font-roboto text-sm'>{description}</p>
			</div>
		</div>
	);
};

export default TeamMember;
