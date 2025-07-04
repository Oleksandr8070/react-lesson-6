import { useDeferredValue, useMemo, useState, useCallback } from "react";

import GridRow from "./GridRow";

function  DataGrid({dataArr}) {
    const [searchTerm, setSearchTerm] = useState('')
    const [sortTerm, setSortTerm] = useState(null)
    
    const deferredSearchTerm = useDeferredValue(searchTerm)
    const deferredSortTerm  = useDeferredValue(sortTerm)

    const handleSort1 = useCallback(() => setSortTerm(1), [])
    const handleSort2 = useCallback(() => setSortTerm(2), [])
    const handleResetSort = useCallback(() => setSortTerm(null), [])

    const filterItems = useMemo(() => {
        let filterList = dataArr.filter((el) => 
            el.name.toLowerCase().includes(deferredSearchTerm.toLowerCase()))

        if (deferredSortTerm === 1) {
            return [...filterList].sort((a,b) => a.price - b.price)
        } else if (deferredSortTerm === 2) {
            return [...filterList].sort((a, b) => b.price - a.price)
        }

        return filterList
    },[dataArr, deferredSearchTerm, deferredSortTerm]) 
    
    return (
        <div className="taskBlock mb2">
            <div className="content">
                <div className="mb1">
                    <h1 className="title">Задача2</h1>
                    <p>
                        Таблиця з фільтрацією та сортуванням, чутлива до UI
                        </p>
                    <ul>
                        <li>
                            Створіть компонент DataGrid (батьківський) та GridRow (дочірній).
                        </li>
                        <li>
                            DataGrid отримує великий масив даних, має поле вводу для фільтрації, кнопки для сортування за 
                            різними колонками.
                        </li>
                        <li>
                            GridRow (обгорнутий у React.memo) відображає один рядок даних.
                        </li>
                        <li>
                            Використайте useDeferredValue для пошукового запиту та/або параметрів сортування.
                        </li>
                        <li>
                            Використайте useMemo для обчислення відфільтрованих та відсортованих даних на основі 
                            відкладених значень.
                        </li>
                        <li>
                            Використайте useCallback для функцій-обробників сортування та інших інтерактивних елементів, 
                            які передаються до дочірніх компонентів.
                        </li>
                        <li>
                            Мета: забезпечити швидкий відгук на введення та кліки, навіть якщо обробка даних займає час.
                        </li>
                    </ul>
                </div>
                <div  className="blockBig">
                    <div>
                            <input
                                className="input"
                                type="text"
                                placeholder="Пошук..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    <div className="displayFlex contentBetween mb1">
                        <div>
                            <button 
                                className="button"
                                onClick={handleSort2}>
                                Від дорогих до дешевих
                            </button>
                        </div>
                        <div>
                            <button 
                                className="button"
                                onClick={handleSort1}
                            >
                                Від дешевих до дорогих
                            </button>
                        </div>
                        <div>
                            <button 
                                className="button"
                                onClick={handleResetSort}
                            >
                                Скинути сортування
                            </button>
                        </div>
                    </div>
                    <ul className="scrollableList">
                        {filterItems.map((el)=> (
                            <GridRow key={el.id}{...el}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default  DataGrid;