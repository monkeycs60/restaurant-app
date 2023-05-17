import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	useMap,
	Tooltip,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const PracticalInformations = () => {
	const locations = [
		{
			lat: 51.510607,
			lng: -0.134301,
			popupText: 'Chiaroscuro <br /> 10 Shaftesbury Ave <br /> London',
		},
		{ lat: 41.511607, lng: -0.135301, popupText: 'Autre lieu 1' },
		{ lat: 61.512607, lng: -0.136301, popupText: 'Autre lieu 2' },
		{ lat: 51.513607, lng: -0.637301, popupText: 'Autre lieu 3' },
		{ lat: 51.514607, lng: -0.438301, popupText: 'Autre lieu 4' },
	];
	return (
		<section className='relative overflow-hidden py-10 md:py-12'>
			<img
				className='absolute left-0 top-0'
				src='saturn-assets/images/contact/light-left-blue.png'
				alt=''
			/>
			<img
				className='absolute bottom-0 right-0 -mb-20'
				src='saturn-assets/images/contact/light-orange-right.png'
				alt=''
			/>
			<div className='container relative mx-auto px-4'>
				<div className='mx-auto max-w-7xl'>
					<div className='mx-auto mb-20 max-w-2xl text-center'>
						<span className='mb-4 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-900'>
							READY TO SUPPORT US
						</span>
						<h1 className='font-heading xs:text-6xl mb-4 text-5xl font-bold text-gray-900'>
							<span>Let&rsquo;s stay</span>
							<span className='font-serif italic'>connected</span>
						</h1>
						<p className='text-xl font-semibold text-gray-500'>
							We help people to grow their business using saturn ui
							library with professional and powerful solutions.
						</p>
					</div>
					<div className='xs:max-w-sm mx-auto lg:max-w-none'>
						<div className='mb-18 -mx-4 flex flex-wrap items-center'>
							<div className='mb-12 w-full px-4 lg:mb-0 lg:w-1/3'>
								<div className='flex items-center lg:justify-center'>
									<div className='mr-5 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-200 p-1 sm:mr-8 sm:h-20 sm:w-20'>
										<img
											src='saturn-assets/images/contact/icon-phone.svg'
											alt=''
										/>
									</div>
									<div>
										<span className='text-lg text-gray-500'>
											Phone
										</span>
										<span className='block text-lg font-semibold text-gray-900'>
											+1 891 4937
										</span>
									</div>
								</div>
							</div>
							<div className='mb-12 w-full px-4 lg:mb-0 lg:w-1/3'>
								<div className='flex items-center lg:justify-center'>
									<div className='mr-5 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-yellow-200 p-1 sm:mr-8 sm:h-20 sm:w-20'>
										<img
											src='saturn-assets/images/contact/icon-email.svg'
											alt=''
										/>
									</div>
									<div>
										<span className='text-lg text-gray-500'>
											Email
										</span>
										<span className='block text-lg font-semibold text-gray-900'>
											hello@yourdomain.com
										</span>
									</div>
								</div>
							</div>
							<div className='w-full px-4 lg:w-1/3'>
								<div className='flex items-center lg:justify-center'>
									<div className='mr-5 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-green-200 p-1 sm:mr-8 sm:h-20 sm:w-20'>
										<img
											className='h-8'
											src='saturn-assets/images/contact/icon-location.svg'
											alt=''
										/>
									</div>
									<div>
										<span className='text-lg text-gray-500'>
											Office
										</span>
										<span className='block text-lg font-semibold text-gray-900'>
											213, New York
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='rounded-4xl mt-8 flex h-[50vh] justify-center overflow-hidden rounded-lg'>
						<MapContainer
							center={[51.510607, -0.134301]}
							zoom={14}
							scrollWheelZoom={false}
							className='flex h-full w-2/3 justify-center rounded-lg'
						>
							<TileLayer
								attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
								url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
							/>
							<Marker position={[51.510607, -0.134301]}>
								<Popup>
									10 Shaftesbury Ave <br /> London
								</Popup>
								<Tooltip>Chiaroscuro Restaurant</Tooltip>
							</Marker>
						</MapContainer>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PracticalInformations;
