import { useDispatch, useSelector } from "react-redux";
import { inputValue, search } from "../redux/actions";
import { Link } from "react-router-dom";

// Поиск
const Search = () => {
    const dispatch = useDispatch();
    const { currentValue } = useSelector(state => state);

    // Хэндлер инпута
    const inputHandler = e => {
        const value = e.target.value;
        if(/^[\d\D\s]*$/.test(value)) {
            dispatch(inputValue(value))
        }
    }

    // Хэндлер кнопки "лупа"
    const clickHandler = () => {
        dispatch(search());
    }

    // Хэндлер кнопки "enter"
    const enterButtonHandler = e => {
        if(e.key === 'Enter') {
            dispatch(search());
        }
    }

    return (
        <div className="search">
            <input 
                type="text" placeholder="Поиск" 
                value={ currentValue } 
                onChange={ e => inputHandler(e) } 
                onKeyPress={ enterButtonHandler }
                data-testid="search-input"
            ></input>
            <div className="search__icon" onClick={ () => clickHandler() } data-testid="search-btn">
                <Link to='/'>
                    <svg>
                        <use xlinkHref="#search"></use>
                    </svg>
                </Link>
                
            </div>
        </div>
    )
};

export default Search;