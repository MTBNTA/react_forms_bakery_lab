import Cake from "./Cake";

const CakeList = ({cakes}) => {

    const mapCakes = cakes.map((cake, index) => {
        return <Cake cake={cake} key={index} />
    });

    return ( 
        <ul>
            {mapCakes}
        </ul>
     );
}
 
export default CakeList;