import styled from 'styled-components';

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

export const Page = styled.div`
	height: 100%;
	background-color: #1a1a1a;
	display: flex;
	justify-content: center;
	align-items: center;
`;
