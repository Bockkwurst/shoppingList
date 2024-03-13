import styles from './Card.module.css'
import PropTypes from "prop-types";

function Card(props) {
    return (
        <div className={styles.card}>
            <img className={styles.cardImage}
                 src={props.image}
                 alt={props.name}></img>
                <h2 className={styles.cardTitle}>{props.name}</h2>
                <p className={styles.cardText}>Hinzufügen</p>
        </div>
    );
}
Card.propTypes = {
    cardImage: PropTypes.string,
    cardTitle: PropTypes.string,
    cardText: PropTypes.string,
}
export default Card