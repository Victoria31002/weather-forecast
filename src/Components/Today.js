import React from "react";
import Icons from "../img/Icons.png"

function Today() {
    return (

        <div className={'info-today'}>
            <div className={'location'}>
                <div>
                    <p>Porto Alegre, RS</p>
                    <p>Segunda-feira, 15 de maio de 2023</p>
                </div>
                <p>21:39</p>
            </div>
            <div className={'weather-today'}>
                <div style={{marginRight: "85px"}}>
                    <p style={{fontSize: "96px", color: "rgba(255, 255, 255, 1)"}}>28ºc</p>
                    <div className={"details"}>
                        <p>32ºc / 26ºc </p>
                        <div className={"divider"}/>
                        <p>Poucas nuvens</p>
                    </div>
                </div>

                <div style={{marginTop: '-40px'}}>
                    <img src={Icons}/>
                </div>
            </div>
        </div>
    )

}

export default Today