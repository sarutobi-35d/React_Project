import { useState, useMemo, useEffect } from "react"


export default function Results({items, search, onResultatsNb}){

    const [results, setResults] = useState([]);

    const filterItems = useMemo(() => findMatch(items, search), [items, search]);

    useEffect(() =>{
        onResultatsNb(results)
    }, [results]);


    function findMatch(item, search) {

        const res = items.filter(i => {

            const fullName =`${i.name.first} ${i.name.last}`.toLowerCase();
            const email = i.email.toLowerCase();
            const phone = i.phone.toLowerCase();
            const city = i.location.city.toLowerCase();
            const country = i.location.country.toLowerCase();

            return (
                fullName.includes(search) ||
                email.includes(search) ||
                phone.includes(search) ||
                city.includes(search) ||
                country.includes(search)
            );

        });

        setResults(res);
        return res;
    }


    return(

        <>
            {results.length > 1 ? <div>{results.length} resultats</div> : <div>{results.length} resultat</div>}
            <table className="listSearch">
                <tbody>
                    {search !== "" ? (
                        filterItems.map((item, index) =>(
                            <tr key={index} onClick={() => onItemsSelected(item)}>
                                <td>{item.name.last}</td>
                                <td>{item.name.first}</td>
                                <td>{item.name.email}</td>
                                <td>{item.name.phone}</td>
                                <td>{item.location.country}</td>
                                <td>{item.location.city}</td>
                            </tr>      
                        ))
                    ) : (
                        null
                    )}
                </tbody>
            </table>
        </>
    )
}