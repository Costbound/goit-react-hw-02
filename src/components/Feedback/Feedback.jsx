import css from './Feedback.module.css'

export default function Feedback({ feedbacks: { good, neutral, bad }, total, goodRate }) {
    return (
        <ul className={css.list}>
            <li>Good: { good }</li>
            <li>Neutral: { neutral }</li>
            <li>Bad: { bad }</li>
            <li>Total: { total }</li>
            <li>Positive: {goodRate}%</li>
        </ul>
    )
}