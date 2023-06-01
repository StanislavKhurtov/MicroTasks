import React, {useState} from 'react';
import './App.css';

type FilterName = "all" | "ruble" | "dollar";

function App() {
    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"},
    ])

    const [filter, setFilter] = useState<FilterName>('all');

    let currentMoney = money;

    if (filter === 'ruble') {
        currentMoney = money.filter((filteredMoney: { banknote: string, nominal: number, number: string }) => filteredMoney.banknote === "ruble")
    }
    if (filter === 'dollar') {
        currentMoney = money.filter((filteredMoney: { banknote: string, nominal: number, number: string }) => filteredMoney.banknote === "dollar")
    }

    const onClickFilterHandler = (nameButton: FilterName) => {
        setFilter(nameButton)
    };


    return (
        <div className="App">
            <ul>
                {currentMoney.map((el, index) => {
                    return (
                        <li key={index}><span>{el.banknote}</span>
                            <span> {el.nominal}</span>
                            <span> {el.number}</span>
                        </li>
                    );
                })}
            </ul>
            <div className="buttons">
                <button onClick={() => onClickFilterHandler('all')}>all</button>
                <button onClick={() => onClickFilterHandler('ruble')}>ruble</button>
                <button onClick={() => onClickFilterHandler('dollar')}>dollar</button>
            </div>
        </div>
    );
}

export default App;
