import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();
    const searchValue = React.useRef("");

    //to focus on the input field when the page loads
    React.useEffect(() => {
        searchValue.current.focus();
    }, []);

    //prevent the default behaviour of the form
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const searchCokctail = () => {
        setSearchTerm(searchValue.current.value);
    };

    return (
        <section className="section search">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">search your favorite cocktail</label>
                    <input
                        type="text"
                        id="name"
                        ref={searchValue}
                        onChange={searchCokctail}
                    ></input>
                </div>
            </form>
        </section>
    );
};

export default SearchForm;
