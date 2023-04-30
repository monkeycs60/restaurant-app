import HeadChef from '../../assets/HeadChef.png';
import Second from '../../assets/Second.png';
import LineParty from '../../assets/LineCook.png';
import Junior from '../../assets/junior.png';
import Waitress1 from '../../assets/waitress1.png';
import Waitress2 from '../../assets/waitress2.png';
import TeamMember from '../TeamMember';

const Team = () => {
	return (
		<div className='m-[10vh] grid grid-cols-2 gap-6 bg-amber-500/40 p-12'>
			<TeamMember
				photo={HeadChef}
				alt='Head Chef'
				identity='Head Chef - Marco Williamson'
				location='London, England'
				description='Having worked in renowned restaurants across the globe, Marco brings a wealth of international experience to the table. His passion for combining global flavors and expertise in multi-sensory dining make every meal an unforgettable journey for our guests.'
			/>
			<TeamMember
				photo={Second}
				alt='Second Chef'
				identity='Second Chef - Liam Turner'
				location='Manchester, England'
				description='Liam has been working with Marco for over 8 years. He is a master of British and European flavors and innovative cooking techniques.'
			/>
			<TeamMember
				photo={LineParty}
				alt='Line Cook'
				identity='Line Cook - Oliver Harrison'
				location='Birmingham, England'
				description='A skilled cook with a passion for fresh, locally-sourced ingredients, Oliver specializes in crafting exquisite dishes that stimulate the senses, taking full advantage of the unique dining experience provided by dining in the dark.'
			/>
			<TeamMember
				photo={Junior}
				alt='Junior Chef'
				identity='Junior Chef - Emily Rapalo'
				location='Edinburgh, Scotland'
				description='A recent graduate of a top culinary school, Emily is eager to learn and brings her enthusiasm and creativity to the kitchen team.'
			/>
			<TeamMember
				photo={Waitress1}
				alt='Waitress'
				identity='Waitress - Charlotte Fink'
				location='Dublin, Ireland'
				description='Charlotte has a keen eye for detail and a genuine passion for exceptional service, making every  visit to the restaurant a truly memorable experience.'
			/>
			<TeamMember
				photo={Waitress2}
				alt='Waitress'
				identity='Waitress - Amelia Collins'
				location='Cardiff, Wales'
				description='With her warm and friendly personality, Amelia ensures that every guest feels welcome and well taken care of throughout their dining experience.'
			/>
		</div>
	);
};

export default Team;
