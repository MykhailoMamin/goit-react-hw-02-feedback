import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.btnList}>
      {options.map((option, index) => (
        <li key={index}>
          <button
            className={css.feedbackBtb}
            id={option}
            onClick={e => onLeaveFeedback(e)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
