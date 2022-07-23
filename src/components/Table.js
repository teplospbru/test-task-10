import { useSelector } from "react-redux";
import { getCurrentPosts } from "../api/api";

// Components
import Cell from "./Cell";

// Таблица
const Table = () => {
    const { currentPage, filteredPosts, table } = useSelector(state => state);
    const posts = getCurrentPosts(currentPage, filteredPosts); // получаем пагинированные посты

    return (
        <table>
            <thead>
                <tr>
                    {
                        table.map(({ name, title }) => ( <th><Cell name={ name } title={ title } /></th> ))
                    } 
                </tr> 
            </thead>
            <tbody>
                {
                    (posts.length > 0) && posts.map(({ id, title, body }) => (
                        <tr  key={ 'b_'+ id }>
                            <td>{ id }</td>
                            <td>{ title }</td>
                            <td>{ body }</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
};

export default Table;