import { useContext, useEffect, useState } from 'react';
import { getAuthUser } from '../utils/api';
import { AuthContext } from '../utils/context/AuthContext';

export const useAuth = () => {
	const [loading, setLoading] = useState(true);
	const { user, updateAuthUser } = useContext(AuthContext);
	const controller = new AbortController();

	useEffect(() => {
		setLoading(true);
		getAuthUser()
			.then(({ data }) => {
				updateAuthUser(data);
				setTimeout(() => setLoading(false), 1000);
			})
			.catch((err) => {
				console.log(err);
				setTimeout(() => setLoading(false), 1000);
			});

		return () => {
			controller.abort();
		};
	}, []);

	return { loading, user };
};
