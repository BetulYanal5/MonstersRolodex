import './search-box.styles.css'
const SearchBox = ({className, placeholder, OnChangeHandler}) => (
         <input
            className={`search-box ${className}`}
            type="search"
            placeholder={placeholder}
            onChange={OnChangeHandler}
         />
        
)

export default SearchBox;