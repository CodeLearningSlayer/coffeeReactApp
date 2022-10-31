import {useContext, useState} from "react";
import "./appSearch.scss";
import Context from "../../context";

const AppSearch = (props) => {


    const [term, setTerm] = useState();
    const {searchItem} = useContext(Context);

    const onUpdateSearch = (e) => {
        const term = e.target.value;
        setTerm(term);
        searchItem(term);
    }

    return (
        <div className="goods__top-search">
            <span>Looking for</span>
            <input className="goods__top-input" 
                placeholder="start typing here..." 
                type="text" 
                value={term}
                onChange={onUpdateSearch}/>
        </div>
    )
}

export default AppSearch;