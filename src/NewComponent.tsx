import React, {FC} from 'react';
import s from './NewComponent.module.css'

type NewComponentType = {
    students: StudentsType[]
}
type StudentsType = {
    id: number
    name: string
    age: number
}
const NewComponent: FC<NewComponentType> = ({students}) => {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    return (
        <table className={s.table}>
            <caption className={s.caption}>
                Cars
            </caption>
            {topCars.map((el,index)=>
                <tr className={s.tr}>
                <th className={s.th} scope="col">{el.manufacturer}</th>
                    <th scope="row" className={s.th}>{el.model}</th>
            </tr>

            )}
        </table>
        /*<ul>
            {students.map((el, index) =>
                <li key={el.id}>
                    <span>{el.name}</span>
                    <span>{el.age}</span>
                </li>)}
        </ul>*/
    );
};

export default NewComponent;