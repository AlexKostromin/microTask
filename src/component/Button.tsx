import React, {FC} from 'react';

type ButtonType = {
    title: string
    callBack: () => void
}


export const Button: FC<ButtonType> = ({title, callBack}) => {
    const onClickHandler = () => {
        callBack()
    }
    return (
        <button onClick={onClickHandler}>{title}</button>
    );
};

