import { useEffect } from 'react';
const useCleanStorageOnLoad = () => {
	useEffect(() => {
		localStorage.removeItem('bookingData');
		localStorage.removeItem('bookingId');
	}, []);
};

export default useCleanStorageOnLoad;
