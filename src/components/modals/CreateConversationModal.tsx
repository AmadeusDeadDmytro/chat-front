import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import { TbUser } from 'react-icons/tb';
import { ButtonIcon, OverlayStyle } from '../../utils/styles';
import { CreateConversationForm } from '../forms/CreateConversationForm';
import { ModalContainer, ModalContentBody, ModalHeader } from './index';

type Props = {
	setShowModal: Dispatch<SetStateAction<boolean>>;
};

export const CreateConversationModal: FC<Props> = ({ setShowModal }) => {
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => e.key === 'Escape' && setShowModal(false);
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, []);

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const { current } = ref;
		if (current === e.target) setShowModal(false);
	};

	return (
		<OverlayStyle ref={ref} onClick={handleOverlayClick}>
			<ModalContainer>
				<ModalHeader>
					<div>
						<TbUser size={22} />
						<h5>Add Conversation</h5>
					</div>
					<ButtonIcon width={30} onClick={() => setShowModal(false)}>
						<IoMdClose size={20} color="#000" />
					</ButtonIcon>
				</ModalHeader>
				<ModalContentBody>
					<CreateConversationForm />
				</ModalContentBody>
			</ModalContainer>
		</OverlayStyle>
	);
};
