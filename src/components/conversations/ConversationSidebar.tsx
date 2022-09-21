import { FC, useState } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import {
	Button,
	ConversationSidebarContainer,
	ConversationSidebarHeader,
	ConversationSidebarItem,
	ConversationSidebarStyle,
} from '../../utils/styles';
import { ConversationType } from '../../utils/types';
import { CreateConversationModal } from '../modals/CreateConversationModal';
import styles from './index.module.scss';

type Props = {
	conversations: ConversationType[];
};

export const ConversationSidebar: FC<Props> = ({ conversations }) => {
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			{showModal && <CreateConversationModal setShowModal={setShowModal} />}
			<ConversationSidebarStyle>
				<ConversationSidebarHeader>
					<Button width={110} onClick={() => setShowModal(!showModal)}>
						<HiOutlinePlus size={14} />
						<span>Add Conversation</span>
					</Button>
				</ConversationSidebarHeader>
				<ConversationSidebarContainer>
					{conversations.map((conversation) => (
						<ConversationSidebarItem
							onClick={() => navigate(`/conversations/${conversation.id}`)}
							key={conversation.id}>
							<div className={styles.conversationAvatar}></div>
							<div>
								<span className={styles.conversationName}>{conversation.name}</span>
								<span className={styles.conversationLastMessage}>{conversation.lastMessage}</span>
							</div>
						</ConversationSidebarItem>
					))}
				</ConversationSidebarContainer>
			</ConversationSidebarStyle>
		</>
	);
};
