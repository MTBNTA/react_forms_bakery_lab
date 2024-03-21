import { useState } from "react";

const Register = ({cakes, registerCake}) => {

    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [rating, setRating] = useState("");

    const isValid = () => {
        let validation =true;

        if(cakeName === "" || ingredients == [] || rating === ""){
            alert("Fill in all fields please!");
            validation = false;
        }

        if(cakes.find(cake => cake.cakeName === cakeName)){
            alert("This cake already exists!");
            validation = false;
        }
        return validation;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(isValid()){
            const newCake = {
                cakeName,
                ingredients,
                rating
            }
            registerCake(newCake);
        }
    }

    return ( 
        <>
            <h2>Add a cake:</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="cakeName"
                    placeholder="Enter cake name"
                    value={cakeName}
                    onChange={(event) => setCakeName(event.target.value)}
                />
                <input
                    type="text"
                    name="ingredients"
                    placeholder="Enter cake ingredients"
                    value={ingredients}
                    onChange={(event) => setIngredients([event.target.value])}
                />
                <input
                    type="number"
                    min="0"
                    max="5"
                    name="rating"
                    placeholder="Enter cake rating"
                    value={rating}
                    onChange={(event) => setRating(event.target.value)}
                />
                <input type="submit" value="Submit" />
            </form>
        </>
     );
}
 
export default Register;