import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, InputContainer, InputField, InputLabel } from '../../utils/styles';
import styles from './index.module.scss';

export const Loginform = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data: any) => {
		console.log(data);
	};

	console.log(errors);

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<InputContainer>
				<InputLabel htmlFor="email">Email</InputLabel>
				<InputField
					type="email"
					id="email"
					{...register('email', {
						required: 'Email is required',
					})}
				/>
			</InputContainer>
			<InputContainer className={styles.loginFormPassword}>
				<InputLabel htmlFor="password">Password</InputLabel>
				<InputField
					type="password"
					id="password"
					{...register('password', {
						required: 'Password is required',
					})}
				/>
			</InputContainer>
			<Button className={styles.button}>Login</Button>
			<div className={styles.footerText}>
				<span>Don't have an account? </span>
				<Link to="/register">Register</Link>
			</div>
		</form>
	);
};
