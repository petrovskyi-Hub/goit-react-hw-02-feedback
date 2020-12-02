import PropTypes from 'prop-types';
import s from "./Statistics.module.css";
import Notification from '../Notification/Notification'


export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <div className="Statistics">            
            <h2>Statistics</h2>
            <Notification message="No feedback given"></Notification>
            {total >0 && <ul>
                <li><p>Good: {good}</p></li>
                <li><p>Neutral: {neutral}</p></li>
                <li><p>Bad: {bad}</p></li>
                <li><p>Total: {total}</p></li>
                <li><p>Positive feedback: {positivePercentage}%</p></li>
            </ul>}
        </div>
    )
            
}