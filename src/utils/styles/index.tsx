import styled from 'styled-components';
import { PageProps } from './styleTypes';

export const SIDEBAR_WIDTH = 400;

export const InputField = styled.input`
	background: inherit;
	outline: none;
	border: none;
	font-size: 18px;
	width: 100%;
	box-sizing: border-box;
	padding: 0;
	margin: 4px 0;
`;

export const InputContainer = styled.div`
	background-color: #131313;
	padding: 12px 16px;
	border-radius: 10px;
	width: 100%;
	box-sizing: border-box;
`;

export const InputLabel = styled.label`
	display: block;
	color: #8f8f8f;
	font-size: 14px;
	margin: 4px 0;
`;

export const Button = styled.button`
	width: 100%;
	outline: none;
	border: none;
	background-color: #2b09ff;
	font-size: 16px;
	border-radius: 10px;
	padding: 25px 0;
	font-weight: 500;
	transition: background-color 0.25s ease;
	transition: border 0.5s ease;
	border: 2px solid #2b09ff;
	box-sizing: border-box;
	&:hover {
		cursor: pointer;
		background-color: #4327fc;
	}
	&:active {
		background-color: #4327fc;
	}
	&:focus {
		border: 2px solid #fff;
		background-color: #4327fc;
	}
`;

export const Page = styled.div<PageProps>`
	height: 100%;
	background-color: #1a1a1a;
	display: ${(props) => props.display};
	justify-content: ${(props) => props.justifyContent};
	align-items: ${(props) => props.alignItems};
`;

export const ConversationSidebarStyle = styled.aside`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: ${SIDEBAR_WIDTH}px;
	background-color: #1a1a1a;
	border-right: 1px solid #54545443;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const ConversationSidebarHeader = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: ${SIDEBAR_WIDTH}px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 32px;
	background-color: #151515;
	height: 100px;
	border-bottom: 1px solid #54545443;

	& h1 {
		font-weight: 500;
	}
`;

export const ConversationChannelPageStyle = styled.div`
	height: 100%;
	margin-left: ${SIDEBAR_WIDTH}px;
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
