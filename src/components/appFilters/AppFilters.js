import { useContext } from "react"
import Context from "../../context"
import "./appFilters.scss"



const AppFilters = (props) => {

    const buttonsData = [
        {name: 'fromBrazil', label: "Brazil"},
        {name: 'fromKenya', label: "Kenya"},
        {name: 'fromColumbia', label: "Columbia"},
        {name: 'all', label: "All"}
    ]

    const {items, filterItems, filter} = useContext(Context);

    const buttons = buttonsData.map(({name, label}) => {

        const active = filter === name;
        const clazz = active ? " filter--active" : "";
        return (
            <button className={`goods__top-filter${clazz}`}
                    type="button"
                    key={name}
                    onClick = {() => filterItems(items, name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="goods__top-filters">
            <span>Or filter</span>
            {buttons}
        </div>
    )  
}

export default AppFilters;