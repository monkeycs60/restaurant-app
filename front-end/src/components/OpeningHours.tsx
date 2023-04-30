const OpeningHours = () => {
	const hours = [
		{ day: 'Tuesday - Friday', time: '6:00 PM - 11:00 PM' },
		{ day: 'Saturday', time: '5:00 PM - 11:00 PM' },
		{ day: 'Sunday', time: '11:45 AM - 2:00 PM' },
	];

	return (
		<table className='mr-6 w-[42%] table-auto'>
			<thead>
				<tr>
					<th className='px-4 py-2 text-left text-xl text-amber-400'>
						Day
					</th>
					<th className='px-4 py-2 text-left text-xl text-amber-400'>
						Opening Hours
					</th>
				</tr>
			</thead>
			<tbody>
				{hours.map((entry, index) => (
					<tr
						key={index}
						className={index % 2 === 0 ? 'bg-amber-500/40' : ''}
					>
						<td className='border px-4 py-2 font-bold'>{entry.day}</td>
						<td className='border px-4 py-2'>{entry.time}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default OpeningHours;
