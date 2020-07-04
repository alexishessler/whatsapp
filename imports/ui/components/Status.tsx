import React from 'react';
import StyledStatus from '../elements/StyledStatus';
import StyledAvatar from '../elements/StyledAvatar';
import FontAwesome from "react-fontawesome";


const Status = (props:any):JSX.Element => {
    return(
        <StyledStatus color="blue">
            <StyledAvatar>
                <FontAwesome
                    size="2x"
                    name="bell-slash"
                    className="account--color"
                />
            </StyledAvatar>
            <div className="status--textContainer">
                <div className="text--big">
                    Être averti(e) de nouveaux messages
                </div>
                <span className="text--small">Afficher les notifications sur le bureaux ></span>
            </div>
        </StyledStatus>
    )
}

export default Status;