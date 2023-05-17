import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	useMap,
	Tooltip,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { RiContactsBook2Line } from 'react-icons/ri';
import { GoLocation } from 'react-icons/go';
import { BsCalendarDay } from 'react-icons/bs';
const PracticalInformations = () => {
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
					<div className='mx-auto mb-20 flex max-w-2xl flex-col gap-4 text-center'>
						<h1 className='font-playfair xs:text-6xl mb-4 text-5xl font-bold text-gray-100'>
							<span>Let&rsquo;s visit </span>{' '}
							<span className='font-dancing font-serif text-6xl text-orange-600'>
								Chiaroscuro
							</span>
						</h1>
						<p className='font-roboto text-xl text-gray-300'>
							Don't miss out on this unparalleled London experience! Our
							eager team awaits your visit, whether it's during the
							weekday or over the weekend
						</p>
					</div>
					<div className='mb-12 flex justify-between'>
						<div className='xs:max-w-sm concept-text-background font-roboto mx-auto w-1/2 rounded-lg p-6 lg:max-w-[50%]'>
							<div className='flex flex-col flex-wrap items-center gap-8 p-6'>
								<div className='w-full px-4'>
									<div className='flex items-center gap-6'>
										<div className=' flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-700 p-1 sm:mr-8 sm:h-14 sm:w-14'>
											<RiContactsBook2Line
												className='h-5 w-5'
												color='white'
											/>
										</div>
										<div className='flex flex-col'>
											<span className='text-base text-gray-500'>
												Phone
											</span>
											<span className='block text-base font-semibold text-gray-900'>
												020 2831 9278
											</span>
											<span className='mt-1 text-base text-gray-500'>
												Email
											</span>
											<span className='block text-base font-semibold text-gray-900'>
												chiaroscuro@contact.com
											</span>
										</div>
									</div>
								</div>
								<div className='w-full px-4'>
									<div className='flex items-start gap-6'>
										<div className='mr-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-700 p-1 sm:mr-8 sm:h-14 sm:w-14'>
											<GoLocation
												className='h-5 w-5'
												color='white'
											/>
										</div>
										<div>
											<span className='text-base text-gray-500'>
												Location
											</span>
											<span className='block text-base font-semibold text-gray-900'>
												10 Shaftesbury Avenue,
											</span>
											<span className='block text-base font-semibold text-gray-900'>
												London
											</span>
										</div>
									</div>
								</div>
								<div className='w-full px-4'>
									<div className='flex items-center gap-6'>
										<div className='mr-5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-700 p-1 sm:mr-8 sm:h-14 sm:w-14'>
											<BsCalendarDay
												className='h-5 w-5'
												color='white'
											/>
										</div>
										<div className='flex w-full  items-center gap-8'>
											<div className='flex flex-col justify-center'>
												<span className='block text-base font-semibold text-gray-900'>
													Tuesday-Saturday
												</span>
												<span className='block text-sm text-gray-900'>
													12:00 - 14:00 / 19:00 - 23:00
												</span>
											</div>
											<div className='flex flex-col justify-center'>
												<span className='block text-base font-semibold text-gray-900'>
													Sunday
												</span>
												<span className='block text-sm text-gray-900'>
													12:00 - 14:00
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='rounded-4xl flex w-[35%] -translate-x-48 justify-center overflow-hidden rounded-lg'>
							<MapContainer
								center={[51.510607, -0.134301]}
								zoom={14}
								scrollWheelZoom={false}
								className='m-auto flex h-[80%] w-full items-center justify-center rounded-lg'
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
			</div>
		</section>
	);
};

export default PracticalInformations;
