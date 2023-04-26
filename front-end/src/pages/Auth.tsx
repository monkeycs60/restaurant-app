import clsx from 'clsx';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';

const Auth = () => {
	return (
		<div className={clsx('mx-16 flex h-screen items-center justify-around')}>
			<Login />
			<Register />
		</div>
	);
};

export default Auth;
