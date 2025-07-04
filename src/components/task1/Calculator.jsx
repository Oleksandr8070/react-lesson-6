import { useMemo, useState } from "react";
import ResultDisplay from "./ResultDisplay";

function Calculator() {
    const [numA, setNumA] = useState(0)
    const [numB, setNumB] = useState(0)
    const [counter, setCounter] = useState(0)

    const sum = useMemo(()=> {
        const valueA = parseInt(numA)
        const valueB = parseInt(numB)
        return valueA + valueB;
    },[numA, numB])

    return ( 
        <div className="taskBlock mb2">
            <div className="content">
                <div className="mb1">
                    <h1 className="title">Задача 1</h1>
                    <p>
                        Створіть компонент-калькулятор, який має два незалежні поля вводу: 
                        одне для числа A і одне для числа B. Також є окремий компонент 
                        ResultDisplay, 
                        який відображає A + B. Обгорніть ResultDisplay у React.memo. 
                        Використайте useMemo в 
                        батьківському компоненті, щоб обчислити A + B і передати цей 
                        результат до ResultDisplay. 
                        Переконайтеся, що ResultDisplay ререндериться лише тоді, коли 
                        змінюються A або B, а не 
                        коли змінюється інший незалежний стан у батьківському компоненті 
                        наприклад, лічильник, що не впливає на A чи B.
                    </p>
                </div>
                <div className="blockSmall">
                    <div>
                        <label>
                            A
                            <input className="input"  id="a" value={numA} onChange={(e)=> setNumA(e.target.value)}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            B
                            <input className="input" id="b" value={numB} onChange={(e)=> setNumB(e.target.value)} />
                        </label>
                    </div>
                    <ResultDisplay sum={sum}/>
                    <button className="button" onClick={() => setCounter(counter + 1)}>
                                counter ({counter})
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;