import styles from '../styles/feedbackOptions.module.css';
// FeedbackOptions.js

export const FeedbackOptions = ({ options, onButtonClick }) => {
  return (
    <div className={styles.buttons}>
      {options.map(option => (
        <button
          className={styles.button}
          key={option}
          type="button"
          onClick={() => onButtonClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
