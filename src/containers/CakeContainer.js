import { useState } from "react";
import CakeList from "../components/CakeList";
import Register from "../components/Register";
import Search from "../components/Search";

const CakeContainer = () => {

    const initialData = [
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
    ]

    const [cakes, setCakes] = useState(initialData);

    const registerCake = (newCake) => {
        setCakes([...cakes, newCake]);
    }

    return (
        <>
            <CakeList cakes={cakes} setCakes={setCakes}/>
            <Register cakes={cakes} registerCake={registerCake} />
        </>
    );

}

export default CakeContainer;