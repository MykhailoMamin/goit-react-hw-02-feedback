import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h1 className={css.title}>{title}</h1>
      {children}
    </section>
  );
};

export const Statistics = ({ good, neutral, bad }) => {
  return (
    <Section title="Statistics">
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {good + neutral + bad}</p>
      <p>Average: {((good - bad) / (good + neutral + bad)).toFixed(2)}</p>
      <p>
        Positive Feedback: {((good / (good + neutral + bad)) * 100).toFixed(2)}%
      </p>
    </Section>
  );
};
