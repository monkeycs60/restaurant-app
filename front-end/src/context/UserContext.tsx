import { createContext, Dispatch, SetStateAction } from 'react';

type UserContextType = {
	loggedIn: boolean;
	setLoggedIn: Dispatch<SetStateAction<boolean>>;
};

export const UserContext = createContext<UserContextType>(
	{} as UserContextType,
);
