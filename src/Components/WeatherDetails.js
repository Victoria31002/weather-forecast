import React from "react";

function WeatherDetails(){
    return(
        <div>
            <div>
                <div><p>Detalhes do clima hoje</p></div>
                <div>
                    <div>
                        <img/>
                        <p>Sensação térmica</p>
                        <p>26ºc</p>
                    </div>
                    <div>
                        <img/>
                        <p>Probabilidade de chuva</p>
                        <p>0%</p>
                    </div>
                    <div>
                        <img/>
                        <p>Velocidade do vento</p>
                        <p>8 km/h</p>
                    </div>
                    <div>
                        <img/>
                        <p>Umidade do ar</p>
                        <p>40%</p>
                    </div>
                    <div>
                        <img/>
                        <p>Índice UV</p>
                        <p>5</p>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default WeatherDetails