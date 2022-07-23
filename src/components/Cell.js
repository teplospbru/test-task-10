import { useDispatch, useSelector } from "react-redux";
import { sort } from "../redux/actions";

// Ячейка заголовка таблицы
const Cell = ({ name, title }) => {
    const dispatch = useDispatch();
    const { isDescending, sortBy } = useSelector(state => state);

    // Обработка клика по заголовку
    const clickHandler = () => {
        if(name == sortBy) {
            dispatch(sort(name, !isDescending));
        } else {
            dispatch(sort(name, false));
        }
    };

    return (
        <div className="th-content" onClick={ () => clickHandler() } data-testid="sort-{ name }">
            <span>{ title }</span>
            <div className="th-content__arrow">
                {
                    (sortBy == name) && 
                        <svg>
                            {
                                isDescending 
                                    ? <use xlinkHref="#arrow-up"></use> 
                                    : <use xlinkHref="#arrow-down"></use>
                            }
                        </svg>
                }
            </div>
        </div>
    )
};

export default Cell;