import { useState, useEffect } from "react";

const CitySearch = ({ allLocations}) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChanged = (event) => {
      const value = event.target.value;
      const filteredLocations = allLocations ? allLocations.filter((location) => {
        return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
      }) : [];
      setQuery(value);
      setSuggestions(filteredLocations);
      setShowSuggestions(true);
    };

    const handleItemClicked = (event) => {
      const value = event.target.textContent;
      setQuery(value);
      setShowSuggestions(false);
    };
 
    useEffect(() => {
      setSuggestions(allLocations);
    }, [JSON.stringify(allLocations)]);
    
    return (
      <div id="city-search">
      <input
        type="text"
        className="city"
        placeholder="Search for a city"
        value={query}
        onFocus={()=> {
              setSuggestions(allLocations)
              setShowSuggestions(true);
            }}
            onChange={handleInputChanged}
            />
            {showSuggestions && (
            <ul className="suggestions">
              {suggestions.map((suggestion)=> (
              <li onClick={handleItemClicked} key={suggestion}>
                {suggestion}
              </li>
            ))}
              <li key='See all cities' onClick={handleItemClicked}>
              <b>See all cities</b>
              </li>
            </ul>
            )}
        </div>
    );
}
   export default CitySearch;