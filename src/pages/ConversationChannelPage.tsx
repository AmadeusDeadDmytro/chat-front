import { useContext } from 'react';
import { AuthContext } from '../utils/context/AuthContext';
import { ConversationChannelPageStyle } from '../utils/styles';

export const ConversationChannelPage = () => {
	const { user } = useContext(AuthContext);
	return (
		<ConversationChannelPageStyle>
			<span>{user && user.email}</span>
		</ConversationChannelPageStyle>
	);
};
