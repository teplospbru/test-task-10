// Ячейка заголовка таблицы
const Cell = ({ name, title, sortName, setSortName, isDescending, setDescending }) => {

    // Обработка клика по заголовку
    const clickHandler = () => {
        setSortName(name)
        if(name == sortName) {
            setDescending(isDescending => !isDescending);
        } else {
            setDescending(false)
        }
    };

    return (
        <div className="th-content" onClick={ () => clickHandler() } data-testid="sort-{ name }">
            <span>{ title }</span>
            <div className="th-content__arrow">
                {
                    (sortName == name) && 
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