import { useState } from 'react';
import useWindowSize from './useWindowSize'

function WindowSize() {
    const {width, height} = useWindowSize()

    function  getImg() {
        if(width <= 768) return '/public/img/task3/img03.png'
        else if(width <= 1024) return '/public/img/task3/img02.png'
        else return '/public/img/task3/img01.png'
    }

    return (
        <div className="taskBlock mb2">
            <div className="content">
                <div className="mb1">
                    <h1 className="title">Задача 3</h1>
                    <p>
                        useWindowSize – розмір вікна браузера
                        Створіть кастомний хук useWindowSize, 
                        який повертає поточну ширину та висоту вікна браузера. 
                        Він повинен оновлюватися при зміні розміру вікна.
                        Створіть компонент, який відображає поточні розміри вікна браузера 
                        (ширина x висота), використовуючи useWindowSize. На основі розмірів 
                        відображати іконки монітора, планшета або телефона.
                    </p>
                </div>
                <div className="block">
                    <div>
                        <img 
                            src={getImg()}
                            alt='gadget'
                        />
                    </div>
                    <div>
                        {`width:${width} х height:${height}`}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WindowSize;