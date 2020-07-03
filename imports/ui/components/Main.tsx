// REACT

import React from 'react';
import Left from './Left';
import Right from './Right';
import StyledMain from "../elements/StyledMain";

const Main = (props:any):JSX.Element => {
    return(
        <StyledMain>
            <Left></Left>
            <Right right></Right>
        </StyledMain>
    )
}

export default Main;
