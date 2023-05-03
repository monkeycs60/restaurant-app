type TransitionTitleProps = {
	title: string;
	position: 'left' | 'right';
};
const TransitionTitle = ({ title, position }: TransitionTitleProps) => {
	return (
		<div className='mb-[10vh] mt-[16vh] flex h-[15vh] items-center justify-center'>
			<div className='concept-bg relative h-full w-full'>
				<h2
					className='font-handwriting absolute -bottom-2 text-end text-6xl text-gray-300 xl:text-8xl'
					style={position === 'right' ? { right: '10%' } : { left: '10%' }}
				>
					{title}
				</h2>
			</div>
		</div>
	);
};

export default TransitionTitle;
