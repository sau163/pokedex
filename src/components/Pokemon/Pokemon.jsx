import { Link } from 'react-router-dom';
import './Pokemon.css';
function Pokemon({name,url,id}){
    return(
        <Link to={`/pokemon/${id}`} className='pokemon-wrapper'>
            <div className="pokemon">

{/* this approch leads a refreshing the page but in spm(single page model )we try to avoide the refreshing thew page for this we need to use liberary react router DOM */}

{/* <a href={`/pokemon/${id}`}>
<div className='pokemon-name'>{name}</div>
    
    <img className='pokemon-image' src={url}/>
</a> */}
                                                             
    <div className='pokemon-name'>{name}</div>
    
    <img className='pokemon-image' src={url}/>
    
</div>
        </Link>
        
    )
}
export default Pokemon;