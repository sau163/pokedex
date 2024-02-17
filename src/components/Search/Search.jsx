import useDebounce from '../../hooks/useDebounce';
import './Search.css';

function Search({updateSearchTerm}){
    const debounceUpdteSearch=useDebounce((e)=>updateSearchTerm(e.target.value));
    return(
        <input
        id='search-pokemon'
         type='text' 
         placeholder="which pokemon you're lookinf for ?"
         onChange={debounceUpdteSearch} />
         
    )
}
export default Search;