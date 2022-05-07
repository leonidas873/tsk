import { useState } from "react";
import {FiSearch} from 'react-icons/fi';
import './Search.css';
import {MdKeyboardArrowDown} from 'react-icons/md';


const Filters = () => {

const [show, setShow] = useState(false)    
const [active, setActive] = useState('');
const handleToggle = () => {
    setShow(!show);
    console.log(show)
}
    return <div className="filters" onClick={handleToggle}>
        <div className="filters__active" onClick={(state)=>setShow(!state)}>{active==='' ? "all filters" : active} <MdKeyboardArrowDown/></div>
        {show && <div className="filters__options">
            <div className="filters__option" onClick={()=>{setActive('')}}>all filters</div>
            <div className="filters__option" onClick={()=>{setActive('token')}}>token</div>
            <div className="filters__option" onClick={()=>{setActive('accounts')}}>accounts</div>
            <div className="filters__option" onClick={()=>{setActive('contract')}}>contract</div>
            <div className="filters__option" onClick={()=>{setActive('txn ID')}}>txn ID</div>
        </div>}
    </div>
}

const Search = () => {
    return <div className="search">
        <div className="search__icon"><FiSearch/></div>
        <div className="search__input"><input type="text" placeholder="Search by Address / Txn ID / Token / Block"/></div>
        <Filters/>
    </div>
}

export default Search;