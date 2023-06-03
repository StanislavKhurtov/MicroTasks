import React, {useState} from 'react';
import './App.css';
import {NeComp} from "./Components/NeComp";


export type FilterType = "all" | "dollar" | "ruble";

export type MoneyType = {
    banknote: string,
    nominal: number,
    number: string,
}

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

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money;

    if (filter === "dollar") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "dollar")
    }
    if (filter === "ruble") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "ruble")
    }

    const onClickFilter = (nameBtn: FilterType) => {
        setFilter(nameBtn);
    }


    return (
        <div className="App">
            <NeComp currentMoney={currentMoney} onClickFilter={onClickFilter}/>
        </div>
    );
}

export default App;


/* let [message, setMessage] = useState([
      {message: 'message1'},
      {message: 'message2'},
      {message: 'message3'},
  ])*/


/*  <FullInput/>
            {message.map((el,index) => {
                return(
                    <div key={index}>{el.message}</div>
                );
            })}*/
export class currentMoney {
}