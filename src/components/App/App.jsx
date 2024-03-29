import { useState, useEffect } from 'react'
import './App.module.css'
import Description from '../Description/Description'
import Feedback from '../Feedback/Feedback'
import Option from '../Option/Option'
import Notification from '../Notification/Notification'

export default function App() {
    const [feedbacks, setFeedbacks] = useState(() => {
        const savedFeedbacks = localStorage.getItem("feedbacks")
        
        if (savedFeedbacks) {
            return JSON.parse(savedFeedbacks)
        }
        return {
            good: 0,
            neutral: 0,
            bad: 0
        }
    })

    const {good, neutral, bad} = feedbacks
    const totalFeedbacks = good + neutral + bad
    const goodRate = Math.round((good / totalFeedbacks) * 100)

    const updateFeedback = (type) => {
        if (type === "reset") {
            setFeedbacks({
                good: 0,
                neutral: 0,
                bad: 0
            })
            return
        }
        setFeedbacks({
            [type]: feedbacks[type]++,
            ...feedbacks
        })
    }

    useEffect(() => {
        localStorage.setItem("feedbacks", JSON.stringify(feedbacks))
    }, [feedbacks])

    return (
        <div className="content-container">
                <Description />
                <Option updateFeedback={updateFeedback} total={totalFeedbacks} />
                {totalFeedbacks > 0 ? <Feedback feedbacks={feedbacks} total={totalFeedbacks} goodRate={goodRate} /> : <Notification />}
        </div>
    )
}