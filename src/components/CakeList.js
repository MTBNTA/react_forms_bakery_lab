import Cake from "./Cake";
import Search from "./Search";

const CakeList = ({cakes, setCakes}) => {

    let mappedCakes = cakes.map((cake, index) => {
        return <Cake cake={cake} key={index} />
    });

    const filterCakes = (searchTerm) => {
        const filteredCakes = cakes.filter(cake => cake.cakeName.toLowerCase().includes(searchTerm));
        setCakes(filteredCakes);
    }

    console.log(mappedCakes);

    return ( 
        <>
            <Search filterCakes={filterCakes}/>
            <ul>
                {mappedCakes}
            </ul>
        </>
        
     );
}
 
export default CakeList;