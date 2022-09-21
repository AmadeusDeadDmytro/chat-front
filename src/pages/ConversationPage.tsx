import { Outlet, useParams } from 'react-router-dom';
import { ConversationPanel } from '../components/conversations/ConversationPanel';
import { ConversationSidebar } from '../components/conversations/ConversationSidebar';
import { Page } from '../utils/styles';

export const ConversationPage = () => {
	const { id } = useParams();

	return (
		<Page padding={30}>
			<ConversationSidebar conversations={[]} />
			{!id && <ConversationPanel />}
			<Outlet />
		</Page>
	);
};
