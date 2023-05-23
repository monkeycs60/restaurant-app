import { useState } from 'react';
import { LoginComponent } from './Auth/LoginComponent';
import { RegisterComponent } from './Auth/RegisterComponent';

const SignUp = () => {
	const [isLogin, setIsLogin] = useState(false);
	return isLogin ? (
		<LoginComponent isLogin={isLogin} setIsLogin={setIsLogin} />
	) : (
		<RegisterComponent isLogin={isLogin} setIsLogin={setIsLogin} />
	);
};

export default SignUp;
