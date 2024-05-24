import css from './Feedback.module.css';

export default function Feedback({
  feedbackCounts: { good, bad, neutral },
  totalFeedback,
}) {
  function calcPercentage() {
    const positivePercentage = Math.round((good / totalFeedback) * 100);

    return positivePercentage;
  }

  return (
    <>
        <p>Good: {good}</p>       
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
             
      <p className={css.summary}>Total: {totalFeedback}</p>
      <p className={css.summary}>
        Positive: <span className={css.accent}>{calcPercentage() || 0}%</span>
      </p>
    </>
  );
}