const Cake = ({cake}) => {

    return (
        <li>
            <h3>Name: {cake.cakeName}</h3>
            <p>Ingredients: {cake.ingredients.join(", ")}</p>
            <p>Rating: {cake.rating}</p>
        </li> 
    );
}
 
export default Cake;