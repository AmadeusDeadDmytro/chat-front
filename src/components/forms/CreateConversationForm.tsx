import { ButtonPrimary, InputContainer, InputField, InputLabel, TextField } from '../../utils/styles';
import styles from './index.module.scss';

export const CreateConversationForm = () => {
	return (
		<form className={styles.createConversationForm}>
			<section>
				<InputContainer backgroundColor="#5a5c66">
					<InputLabel>Recipient</InputLabel>
					<InputField />
				</InputContainer>
			</section>
			<section className={styles.message}>
				<InputContainer backgroundColor="#5a5c66">
					<InputLabel>Message (optional)</InputLabel>
					<TextField />
				</InputContainer>
			</section>
			<section className={styles.submitButton}>
				<ButtonPrimary width={50} onClick={(e) => e.preventDefault()}>
					Submit
				</ButtonPrimary>
			</section>
		</form>
	);
};
