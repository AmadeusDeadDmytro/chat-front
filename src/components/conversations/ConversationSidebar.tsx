import { TbEdit } from 'react-icons/tb';
import { ConversationSidebarStyle } from '../../utils/styles';

export const ConversationSidebar = () => {
	return (
		<ConversationSidebarStyle>
			<header>
				<h1>Conversations</h1>
				<TbEdit size={36} />
			</header>
		</ConversationSidebarStyle>
	);
};
