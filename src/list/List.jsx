function List(props){
    return(
        <div className="list">
            <h2 className="listTitle">Shopping List</h2>
            <ul>
                {props.shoppingList.map((name) =>(
                <li className="listItem">{name}</li>
                ))}
            </ul>
        </div>
    );
}
export default List;