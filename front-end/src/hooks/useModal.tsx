import { useState } from 'react';

const useModal = (): [boolean, () => void, () => void] => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const openModal = (): void => {
		setIsModalOpen(true);
	};

	const closeModal = (): void => {
		setIsModalOpen(false);
	};

	return [isModalOpen, openModal, closeModal];
};

export default useModal;
