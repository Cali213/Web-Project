import React, {useState, useEffect} from "react";

/* function for fetching and filtering photos of dogs */
function API() {
    /* variable for displaying the images */
    const [data, setData] = useState("");
   /*  variable for filtering the data */
    const [query, setQuery] = useState("");
    
    /* arrow function that retrieves data from an API containing argument "breed", which is used for filtering data */
    const apiGet = async(breed) => {
        /* argument "breed" is added to url, which is used to fetch an image of dog breed */
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        const json = await response.json()
        /* "message" is the name of object containing all the dog breeds */
        setData(json.message)
    }
    
    useEffect(() => {
        /* call apiGet with query argument if query is true */
        if(query) {
            apiGet(query);
        }
        /* query is added so it renders everytime the value changes */
    }, [query])

    return (
    <>
    <div className="container">
        <div className="dogs">
            <p id="p">Type below a type of dog breed you'd like to see.</p>
            {/* setQuery grabs input value which gets added to the url */}
            <input type="text" value={query} onChange={(e)=> setQuery(e.target.value)}></input>
            {/* image of desired dog breed gets displayed in div */}
            <div className="img">{data && <img src={data} />}</div>
        </div>
    </div>,

    </>
    )
}

export default API