import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import NewComponent from "./NewComponent";
import {Button} from "./component/Button";
import NewFilterComponent from "./NewFilterComponent";

export type FilteredBanknotsType = 'all' | 'RUBLS' | 'Dollars'
export type MoneyType = {
    banknots: string
    value: number
    number: string
}
function App() {
    const [students, setStudents] = useState([
            {id: 1, name: "James", age: 8},
            {id: 2, name: "Robert", age: 18},
            {id: 3, name: "John", age: 28},
            {id: 4, name: "Michael", age: 38},
            {id: 5, name: "William", age: 48},
            {id: 6, name: "David", age: 58},
            {id: 7, name: "Richard", age: 68},
            {id: 8, name: "Joseph", age: 78},
            {id: 9, name: "Thomas", age: 88},
            {id: 10, name: "Charles", age: 98},
            {id: 11, name: "Christopher", age: 100},
        ]
    )
    const ButtonFoo1 = (name: string, age: number) => {
        console.log(`Hello ${name}! Твой возраст ${age}`)
    }
    const ButtonFoo2 = (name: string) => {
        console.log(`Hello ${name}!`)
    }
    const [money, setMoney] = useState<MoneyType[]>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    const [filteredBanknots, setFilteredBanknots] = useState<FilteredBanknotsType>('all')
    //  let currentMoney = money.filter(el => el.banknots === 'Dollars' )
    let currentMoney = money
    if (filteredBanknots === 'Dollars') {
        currentMoney = money.filter(el => el.banknots === 'Dollars')
    }
    if (filteredBanknots === 'RUBLS') {
        currentMoney = money.filter(el => el.banknots === 'RUBLS')
    }
    const onclickHandler = (banknots: FilteredBanknotsType) => {
        setFilteredBanknots(banknots)
    }
    return (
        // <NewComponent students={students}/>
        <div>
            {/*    <Button callBack={()=>ButtonFoo1('Ivan', 21)} title={'MyYouTubeChanel-1'}/>
            <Button callBack={()=>ButtonFoo2('Vasya')} title={'MyYouTubeChanel-2'}/>*/}
          <NewFilterComponent currentMoney={currentMoney} onclick={onclickHandler}/>
            <h1>1</h1>
        </div>
    );
}


export default App;