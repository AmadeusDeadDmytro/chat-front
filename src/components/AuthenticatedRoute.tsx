import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getAuthUser } from '../utils/api';
import { User } from '../utils/types';

const useAuth = () => {
	const [user, setUser] = useState<User | undefined>();
	const [loading, setLoading] = useState(true);
	const controller = new AbortController();

	useEffect(() => {
		setLoading(true);
		getAuthUser()
			.then(({ data }) => {
				setUser(data);
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

export const AuthenticatedRoute: FC<PropsWithChildren> = ({ children }) => {
	const location = useLocation();
	const { user, loading } = useAuth();

	if (loading) {
		return <div>loading</div>;
	}
	if (user) {
		return <>{children}</>;
	}

	return <Navigate to="/login" state={{ from: location }} replace />;
};
