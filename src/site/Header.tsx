import React, {FC} from 'react';

type HeaderType = {
    title:string
}
export const Header:FC<HeaderType> = ({title}) => {
    return (
        <>
            {title}
        </>
    );
};

