import { useState } from "react";
import useDebounce from "./useDebounce";
import { useMemo } from "react";

function SearchTimeout({dataArr}) {
    const [searchTerm, setSearchTerm] = useState('')

    const debounceSearchTerm = useDebounce(searchTerm, 500)

    const filterItems = useMemo(()=> {
        return dataArr.filter((el) =>
            el.name.toLowerCase().includes(debounceSearchTerm.toLowerCase())
        )
        
    }, [debounceSearchTerm, dataArr])
    return (
        <div className="taskBlock mb2">
            <div className="content">
                <div className="mb1">
                    <h1 className="title">Задача 4</h1>
                    <p>
                        useDebounce – відкладений виклик функції
                        Створіть кастомний хук useDebounce, який приймає значення та затримку в мілісекундах. 
                        Він повинен повертати "відкладене" значення, яке оновлюється лише після того, як минув 
                        заданий час без змін.
                        Створіть поле пошуку, де результати пошуку оновлюються не відразу після кожного символу, 
                        а з невеликою затримкою (наприклад, 500мс) після зупинки введення, використовуючи useDebounce.
                    </p>
                </div>
                <div className="blockBig">
                    <div>
                        <label>
                            <input 
                                placeholder="Пошук..." 
                                id="1" 
                                className="input"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </label>
                    </div>
                    <ul className="scrollableList">
                        {filterItems.map((el) =>(
                            <li key={el.id}>
                                {`Назва товару: ${el.name}`}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SearchTimeout;