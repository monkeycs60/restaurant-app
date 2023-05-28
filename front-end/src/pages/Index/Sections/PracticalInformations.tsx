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
import clsx from 'clsx';
const PracticalInformations = () => {
	return (
		<section className='3xl:py-2 3xl:pb-10 relative m-auto w-[85%] overflow-hidden py-10 md:py-12 lg:w-auto'>
			<div className='container relative mx-auto px-4'>
				<div className='mx-auto max-w-7xl'>
					<div className='mx-auto mb-10 flex max-w-2xl flex-col gap-4 text-center lg:mb-20'>
						<h1 className='font-playfair mb-4 text-2xl font-bold text-gray-100 lg:text-5xl'>
							<span>Coming to </span>{' '}
							<span className='font-dancing block font-serif text-4xl text-orange-600 lg:inline lg:text-6xl'>
								Chiaroscuro
							</span>
						</h1>
						<p className='font-roboto text-gray-300 lg:text-xl'>
							Our team eagerly awaits your visit, whether it's during the
							weekday or over the weekend, ready to reawaken your senses.
						</p>
					</div>
					<div className='flex flex-col justify-between lg:mb-12 lg:flex-row'>
						<div className='xs:max-w-sm concept-text-background font-roboto mx-auto rounded-lg p-4 lg:w-1/2 lg:max-w-[50%]'>
							<div className='flex flex-col flex-wrap items-center gap-6 p-2 lg:gap-8 lg:p-6'>
								<div className='w-full px-4'>
									<div className='flex items-center gap-6'>
										<div className=' flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-700 p-1 sm:mr-8 lg:h-14 lg:w-14'>
											<RiContactsBook2Line
												className='h-3 w-3 lg:h-5 lg:w-5'
												color='white'
											/>
										</div>
										<div className='flex flex-col'>
											<span className='text-sm text-gray-500 lg:text-base'>
												Contact
											</span>
											<span className='block text-sm font-semibold text-gray-900 lg:text-base'>
												020 2831 9278
											</span>
											<span className='block text-sm font-semibold text-gray-900 lg:text-base'>
												chiaroscuro@contact.com
											</span>
										</div>
									</div>
								</div>
								<div className='w-full px-4'>
									<div className='flex items-start lg:gap-6'>
										<div className='mr-5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-700 p-1 sm:mr-8 lg:h-14 lg:w-14'>
											<GoLocation
												className='h-3 w-3 lg:h-5 lg:w-5'
												color='white'
											/>
										</div>
										<div>
											<span className='text-sm text-gray-500 lg:text-base'>
												Location
											</span>
											<span className='block text-sm font-semibold text-gray-900 lg:text-base'>
												10 Shaftesbury Avenue,
											</span>
											<span className='block text-sm font-semibold text-gray-900 lg:text-base'>
												London
											</span>
										</div>
									</div>
								</div>
								<div className='w-full px-4'>
									<div className='flex items-center lg:gap-6'>
										<div className='mr-5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-700 p-1 sm:mr-8 lg:h-14 lg:w-14'>
											<BsCalendarDay
												className='h-3 w-3 lg:h-5 lg:w-5'
												color='white'
											/>
										</div>
										<div>
											<span className='hidden text-sm text-gray-500 lg:block lg:text-base'>
												Opening Hours
											</span>
											<div className='flex w-full  items-center gap-8'>
												<div className='flex flex-col justify-center'>
													<span className='block text-sm font-semibold text-gray-900 lg:text-base'>
														Tuesday-Saturday
													</span>
													<span className='block text-xs text-gray-900 lg:text-sm'>
														12AM - 2PM / 7PM - 11PM
													</span>
												</div>
												<div className='flex flex-col justify-center'>
													<span className='block text-base font-semibold text-gray-900'>
														Sunday
													</span>
													<span className='block text-sm text-gray-900'>
														12AM - 2PM
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							className={clsx(
								'rounded-4xl flex h-72 justify-center overflow-hidden rounded-lg',
								'lg:h-auto lg:w-[35%] lg:-translate-x-48',
							)}
						>
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
