import OpeningHours from '../OpeningHours';

const PracticalInformations = () => {
	return (
		<div className='flex flex-col gap-[6vh] p-8 text-white'>
			<div className='flex justify-between'>
				<div className='flex w-1/2 flex-col gap-4 p-8'>
					<h3 className='font-classic text-2xl font-bold text-amber-400'>
						Address
					</h3>
					<p>
						Chiaroscuro, 123 Dark Street, London, SW1A 1AA, United Kingdom
					</p>
					<h3 className='font-classic text-2xl font-bold text-amber-400'>
						Getting Here
					</h3>
					<p>
						The restaurant is a 5-minute walk from Westminster Underground
						Station (served by Circle, District, and Jubilee lines) and a
						10-minute walk from Victoria Station. There are nearby parking
						facilities and bike-sharing stations.
					</p>
				</div>
				<OpeningHours />
			</div>
			<div className='flex w-full justify-between gap-4 p-8'>
				<div className='flex w-1/3 flex-col gap-4'>
					<h3 className='font-classic w- text-2xl font-bold text-amber-400'>
						Prices
					</h3>
					<div>
						<p>Penumbra Path: £55 per person (blindfold)</p>
						<p>Pitch Black Experience: £70 per person (dark room)</p>
					</div>
				</div>
				<div className='flex w-1/3 flex-col gap-4'>
					<h3 className='font-classic text-2xl font-bold text-amber-400'>
						Reservations
					</h3>
					<p>
						Please call{' '}
						<span className='font-bold text-amber-500'>
							{' '}
							+44 20 1234 5678{' '}
						</span>{' '}
						or book online through our website to reserve your dining
						experience at Chiaroscuro.
					</p>
				</div>
				<div className='flex w-1/3 flex-col gap-4'>
					<h3 className='font-classic text-2xl font-bold text-amber-400'>
						Payment Methods
					</h3>
					<p>
						We accept all major credit/debit cards, mobile payments. We
						will soon implement a Chiaroscuro gift card.
					</p>
				</div>
			</div>
			<div className='flex w-full justify-between gap-4 p-8'>
				<div className='flex w-1/3 flex-col gap-4'>
					<h3 className='font-classic text-2xl font-bold text-amber-400'>
						Allergies & Dietary Restrictions
					</h3>
					<p>
						We cater to various dietary needs and allergies. Kindly inform
						our staff when making your reservation, and we will do our
						best to accommodate your requirements.
					</p>
				</div>
				<div className='flex w-1/3 flex-col gap-4'>
					<h3 className='font-classic text-2xl font-bold text-amber-400'>
						Accessibility
					</h3>
					<p>
						Chiaroscuro is wheelchair accessible and provides disabled
						parking spaces nearby. Our staff is trained to assist visually
						impaired guests throughout the dining experience.
					</p>
				</div>
				<div className='flex w-1/3 flex-col gap-4'>
					<h3 className='font-classic text-2xl font-bold text-amber-400'>
						Contact
					</h3>
					<p>
						For any inquiries or further information, please call +44 20
						1234 5678, email us at info@chiaroscuro-restaurant.co.uk, or
						connect with us on Instagram and Facebook.
					</p>
				</div>
			</div>
		</div>
	);
};

export default PracticalInformations;
