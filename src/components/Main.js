import { useParams } from 'react-router-dom';
import { useEffect } from "react";

// Components
import Table from './Table';
import Pagination from './Pagination';
import { setCurrentPage } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {
    const { id } = useParams(); // id из url (по сути это текущая страница пагинации)
    const { filteredPosts: posts, totalPages } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if(id) dispatch(setCurrentPage(id)); // Записываем в state текущий id из url
    }, [])

    return posts.length > 0 
        ? id && id > totalPages // если посты есть
            ? ( <span>No Such Page</span> ) // если id из url больше, чем всего пагинированных страниц
            : ( // если id из url меньше, чем всего пагинированных страниц
                <>
                    <Table />
                    <Pagination />
                </> )
        : ( <span>Not Found</span> ) // если постов нет
}

export default Main;