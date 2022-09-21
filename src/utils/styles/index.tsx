import styled from 'styled-components';
import { ButtonProps, InputContainerProps, PageProps } from './styleTypes';

export const SIDEBAR_WIDTH = 330;

export const InputField = styled.input`
	background: inherit;
	outline: none;
	border: none;
	font-size: 14px;
	width: 100%;
	box-sizing: border-box;
	padding: 0;
	margin: 4px 0;
`;

export const InputContainer = styled.div<InputContainerProps>`
	background-color: ${(props) => props.backgroundColor || '#131313'};
	padding: 12px 16px;
	border-radius: 4px;
	width: 100%;
	box-sizing: border-box;
`;

export const InputLabel = styled.label`
	display: block;
	color: rgba(255, 255, 255, 0.75);
	font-size: 12px;
	margin: 4px 0;
`;

export const TextField = styled.textarea`
	background: inherit;
	outline: none;
	border: none;
	font-size: 14px;
	width: 100%;
	box-sizing: border-box;
	padding: 0;
	margin: 4px 0;
	resize: none;
	min-height: 100px;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const Button = styled.button<ButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	outline: none;
	border: none;
	background-color: #5a5c66;
	font-size: 14px;
	border-radius: 4px;
	padding: 13px 15px;
	font-weight: 400;
	transition: background-color 0.25s ease;
	transition: border 0.5s ease;
	border: 2px solid transparent;
	box-sizing: border-box;
	color: rgba(255, 255, 255, 0.7);
	cursor: pointer;
	min-width: ${(props) => (props.width ? `${props.width}px` : '100%')};
	&:hover,
	&:active,
	&:focus {
		border: 2px solid #c8c8c8;
	}
`;

export const ButtonPrimary = styled(Button)`
	background-color: rgb(61, 177, 107);
	transition: background-color 0.25s ease;
	padding: 10px 15px;
	&:hover {
		background-color: rgb(44, 135, 80);
	}
`;

export const ButtonIcon = styled(Button)`
	background-color: #e1e1e1;
	border-radius: 50%;
	height: ${(props) => props.width}px;
	padding: 0;
	& path {
		color: #464852;
	}
`;

export const Page = styled.div<PageProps>`
	height: 100%;
	background-color: #272935;
	display: ${(props) => props.display};
	justify-content: ${(props) => props.justifyContent};
	align-items: ${(props) => props.alignItems};
	padding: ${(props) => props.padding || 0}px;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
`;

export const ConversationSidebarStyle = styled.aside`
	height: 100%;
	width: ${SIDEBAR_WIDTH}px;
	background-color: #464852;
	overflow-y: scroll;
	border-radius: 5px;
	margin-right: 30px;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const ConversationSidebarHeader = styled.header`
	width: ${SIDEBAR_WIDTH}px;
	box-sizing: border-box;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 20px;

	& span {
		margin-left: 8px;
	}
`;

export const ConversationChannelPageStyle = styled.div`
	height: 100%;
`;

export const ConversationSidebarContainer = styled.div`
	padding-top: 100px;
`;

export const ConversationSidebarItem = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	padding: 18px 32px;
	border-bottom: 1px solid #54545443;
	background-color: #131313;
`;

export const OverlayStyle = styled.div`
	height: 100%;
	width: 100%;
	background-color: #0000009f;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 99;
	filter: blur(0.5);
	top: 0;
	left: 0;
`;

export const ModalContainerStyle = styled.div`
	background-color: #464852;
	border-radius: 4px;
	width: 500px;
	overflow: hidden;
`;

export const ModalHeaderStyle = styled.header`
	width: 100%;
	padding: 10px 18px;
	background-color: #5a5c66;
	padding: 20px 30px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;

	& > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	& h5 {
		color: rgba(255, 255, 255, 0.75);
		font-size: 20px;
		font-weight: 400;
		margin-left: 12px;
		margin-top: 3px;
	}
`;

export const ModalContentBodyStyle = styled.div`
	padding: 30px;
`;
