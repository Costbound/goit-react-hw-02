import css from './Options.module.css'

export default function Option({updateFeedback, total}) {
    return (
            <div className={css.container}>
                <button onClick={() => { updateFeedback("good") } }>Good</button>
                <button onClick={() => { updateFeedback("neutral") } }>Neutral</button>
                <button onClick={() => { updateFeedback("bad") } }>Bad</button>
                {total > 0 && <button onClick={() => { updateFeedback("reset") }}>Reset</button>}
            </div>
    )
}