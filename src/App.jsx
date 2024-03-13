import Card from './cardComponents/Card.jsx'
import List from './list/List.jsx'
import React, {useState} from "react";


function App() {
    const [shoppingList, setShoppingList] = useState([])
    const handleCardClick = (name) => {
        setShoppingList((previousList) => [...previousList, name]);
    };
    const handleCheckboxChange = (index) =>{
        const updatedList = [...shoppingList];
        const checkedItem = updatedList.splice(index, 1)[0];
        updatedList.push(checkedItem);
        setShoppingList(updatedList);
    };
    return (
        <>
            <List shoppingList={shoppingList} onCheckboxChange={handleCheckboxChange}/>
            <Card name="Mehl" image="https://static.vecteezy.com/system/resources/thumbnails/022/219/008/small/sack-with-flour-isolated-on-a-transparent-background-png.png" handleClick={handleCardClick}/>
            <Card name="Zitronen" image="https://static.vecteezy.com/system/resources/thumbnails/027/536/297/small/lemon-lemon-lemon-transparent-background-ai-generative-free-png.png" handleClick={handleCardClick}/>
            <Card name="Eier" image="https://static.vecteezy.com/system/resources/thumbnails/009/887/172/small/eggs-in-the-bowl-free-png.png" handleClick={handleCardClick}/>
        </>
    );

}

export default App
