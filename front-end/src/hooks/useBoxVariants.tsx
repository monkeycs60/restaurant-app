import { useEffect, useState } from 'react';

const useBoxVariants = (config: any) => {
	const [boxVariants, setBoxVariants] = useState({});

	useEffect(() => {
		const handleResize = () => {
			const isMobile = window.innerWidth < 1024;
			if (!isMobile) {
				setBoxVariants({
					hidden: config.hidden,
					visible: config.visible,
				});
			} else {
				setBoxVariants({});
			}
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [config]);

	return boxVariants;
};

export default useBoxVariants;
