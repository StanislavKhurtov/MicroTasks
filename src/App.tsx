import React, {useState} from 'react';
import './App.css';
import {Button} from "./Button";

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
    const toFoo1 = () => {
        console.log('12324')
    }

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
                <Button name={"all"} callback={() => onClickFilterHandler('all')}/>
                <Button name={"ruble"} callback={() => onClickFilterHandler('ruble')}/>
                <Button name={"dollar"} callback={() => onClickFilterHandler('dollar')}/>
            </div>

        </div>
    );
}

export default App;
