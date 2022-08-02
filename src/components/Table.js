import { useState } from "react";
import { useSelector } from "react-redux";
import { getCurrentPosts } from "../api/api";

// Components
import Cell from "./Cell";

// Таблица
const Table = () => {
    const { currentPage, filteredPosts, table } = useSelector(state => state);
    const posts = getCurrentPosts(currentPage, filteredPosts); // получаем пагинированные посты
    const [ sortName, setSortName ] = useState(table[0].name); // определеяем название столбца сортировки
    const [ isDescending, setDescending ] = useState(false); // определяем направление сортировки
    // сортируем пагинированные посты
    posts.sort((a,b) => {
        if(isDescending) {
            if (a[sortName] > b[sortName]) {
                return 1;
              }
              if (a[sortName] < b[sortName]) {
                return -1;
              }
              return 0;
        } else {
            if (a[sortName] < b[sortName]) {
                return 1;
              }
              if (a[sortName] > b[sortName]) {
                return -1;
              }
              return 0;
        };
    });

    return (
        <table>
            <thead>
                <tr>
                    {
                        table.map(({ name, title }) => ( <th><Cell 
                            name={ name } 
                            title={ title } 
                            sortName={ sortName } 
                            setSortName={ setSortName }
                            isDescending={ isDescending }
                            setDescending={ setDescending } 
                        /></th> ))
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