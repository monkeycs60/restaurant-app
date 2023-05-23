import { useState } from 'react';
import { LoginComponent } from './Auth/LoginComponent';
import { RegisterComponent } from './Auth/RegisterComponent';

const SignUp = ({
	setIsSuccess,
}: {
	setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [isLogin, setIsLogin] = useState(false);
	return isLogin ? (
		<LoginComponent
			isLogin={isLogin}
			setIsLogin={setIsLogin}
			setIsSuccess={setIsSuccess}
		/>
	) : (
		<RegisterComponent
			isLogin={isLogin}
			setIsLogin={setIsLogin}
			setIsSuccess={setIsSuccess}
		/>
	);
};

export default SignUp;
