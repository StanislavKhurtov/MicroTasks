import React from "react";
import {Button} from "../Button";
import { MoneyType, FilterType } from "../App";

type NewComponentType = {
    currentMoney: MoneyType[];
    onClickFilter: (nameBtn: FilterType) => void;
};

export const NeComp = (props: NewComponentType) => {


    return (
        <>
            <ul>
                {props.currentMoney.map((el, index) => {
                    return (
                        <li key={index}>
                            <span>{el.banknote}</span>
                            <span> {el.nominal}</span>
                            <span> {el.number}</span>
                        </li>
                    );
                })}
            </ul>
            <div className="buttons">
                <Button name={'all'} callback={() => props.onClickFilter("all")}/>
                <Button name={'ruble'} callback={() => props.onClickFilter("ruble")}/>
                <Button name={'dollar'} callback={() => props.onClickFilter("dollar")}/>
            </div>
        </>);
}