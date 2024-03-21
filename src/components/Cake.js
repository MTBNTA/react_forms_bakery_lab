const Cake = ({cake}) => {

    return (
        <div className="cake">
            <h3>{cake.cakeName}</h3>
            <p>Ingredients: {cake.ingredients.join(", ")}</p>
            <p>Rating: {cake.rating}</p>
        </div> 
    );
}
 
export default Cake;