import css from './FeedbackOptions.module.css';
import { Section } from 'components/Section/Section';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title="Feedback Options">
      <ul className={css.btnList}>
        {options.map((option, index) => (
          <li key={index}>
            <button
              className={css.feedbackBtb}
              id={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </Section>
  );
};
