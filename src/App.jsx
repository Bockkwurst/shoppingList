import Card from './cardComponents/Card.jsx'
import {useState} from "react";
import List from '.list/List.jsx';

function App() {
    const [shoppingList, setShoppingList] = useState([]);
    const handleAddToList = (itemName) =>{
        setShoppingList([...shoppingList, itemName]);
    };

    return (
        <>
            <List items={shoppingList}/>
            <Card name="Mehl" image="https://static.vecteezy.com/system/resources/thumbnails/022/219/008/small/sack-with-flour-isolated-on-a-transparent-background-png.png"/>
            <Card name="Zitronen" image="https://static.vecteezy.com/system/resources/thumbnails/027/536/297/small/lemon-lemon-lemon-transparent-background-ai-generative-free-png.png"/>
            <Card name="Eier" image="https://static.vecteezy.com/system/resources/thumbnails/009/887/172/small/eggs-in-the-bowl-free-png.png"/>
        </>
    );
}

export default App
