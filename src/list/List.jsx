import Checkbox from "./Checkbox.jsx";
import styles from "./List.module.css";

function List(props) {

    return (
        <div className={styles.list}>
            <h2 className={styles.listTitle}>Shopping List</h2>
            {props.shoppingList.map((name, index) => (
                <Checkbox
                    className={styles.listItems}
                    key={index}
                    name={name}
                    checked={false}
                    onChange={(e) => handleCheckboxChange(e, index)}
                />
                //<li className="listItem">{name}</li>
            ))}

        </div>
    );
}



export default List;