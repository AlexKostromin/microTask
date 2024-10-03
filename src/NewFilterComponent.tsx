import React, {FC} from 'react';
import {FilteredBanknotsType, MoneyType} from "./App";

type NewFilterComponentType = {
    currentMoney:MoneyType[]
    onclick:(banknots: FilteredBanknotsType)=>void
}

const NewFilterComponent:FC<NewFilterComponentType> = ({currentMoney,onclick}) => {
    return (
        <div>
            <ul>
                {currentMoney.map((el, index) =>
                    <li key={index}>
                        <span>{el.banknots}</span>
                        <span>{el.value}</span>
                        <span>{el.number}</span>
                    </li>)}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onclick('RUBLS')}>Rubls</button>
                <button onClick={() => onclick('Dollars')}>Dollars</button>
                <button onClick={() => onclick('all')}>All</button>
            </div>
        </div>
    );
};

export default NewFilterComponent;