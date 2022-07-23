import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentPage } from "../redux/actions";

// Пагинация
const Pagination = () => {
    const { currentPage, totalPages } = useSelector(state => state);
    const dispatch = useDispatch();
    // Определяем номер страницы пагинации, куда сошлётся кнопа "назад"
    const clickBackValue = ((currentPage - 1) >= 1) ? (currentPage - 1) : currentPage;
    // Определяем номер страницы пагинации, куда сошлётся кнопа "вперед"
    const clickForwardValue = ((currentPage + 1) <= totalPages) ? (currentPage + 1) : currentPage;

    let arr = [];
    for(let i = 1; i <= totalPages; i++) {
        arr.push(i);
    }
    // Хэндлер клика по цифре страницы
    const clickHandler = (id) => {
        dispatch(setCurrentPage(id));
    }

    // Хэндлер клика по кнопке "назад"
    const backClickHandler = () => {
        dispatch(setCurrentPage(clickBackValue));
    }

    // Хэндлер клика по кнопке "вперед"
    const forwardClickHandler = () => {
        dispatch(setCurrentPage(clickForwardValue));
    }

    return (
        <div className="pagination">
            <Link to={ '/' + clickBackValue } onClick={ () => backClickHandler() }>Назад</Link>
            <div>
                {
                    arr.map(page => page == currentPage 
                        ? <span className="active" key={ 'a_'+ page }>{ page }</span>  // цифра текущей страницы (зелёный цвет)
                        : <Link to={ '/' + page } onClick={ () => clickHandler(page) } key={ 'a_'+ page }>{ page }</Link> )
                }
            </div>
            <Link to={ '/' + clickForwardValue } onClick={ () => forwardClickHandler() }>Вперёд</Link>
        </div>
    )
}

export default Pagination;