import Instagram from '../assets/Instagram_icon-icons.com_66804.png';
import Linkedin from '../assets/linkedin_socialnetwork_17441.png';

type TeamMemberProps = {
	photo: string;
	alt: string;
	identity: string;
	location: string;
	description: string;
};

const TeamMember = ({
	photo,
	alt,
	identity,
	location,
	description,
}: TeamMemberProps) => {
	return (
		<div className='banner-bg flex items-center justify-center gap-8 p-4 brightness-50 grayscale hover:brightness-100 hover:grayscale-0'>
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
		</div>
	);
};

export default TeamMember;
