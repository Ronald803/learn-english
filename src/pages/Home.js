import React from 'react';
import Carousel from '../components/Carousel';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Verb To Be
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        El verbo "to be" es uno de los verbos más importantes en inglés, y se utiliza para describir estados, identidades, relaciones y más.<br/>
                        Es un verbo irregular que tiene tres formas principales: "am" (para la primera persona singular), "is" (para la tercera persona singular) y "are" (para la segunda persona singular y todas las personas plurales).<br/>
                        Aquí tienes algunos ejemplos de cómo se utiliza "to be" en diferentes formas y tiempos:<br/>
                        Presente simple:<br/>
                        I am (yo soy/estoy)<br/>
                        You are (tú eres/estás)<br/>
                        He/she/it is (él/ella/ello es/está)<br/>
                        We are (nosotros somos/estamos)<br/>
                        They are (ellos/ellas son/están)<br/>
                        Pasado simple:<br/>
                        I was (yo era/estaba)<br/>
                        You were (tú eras/estabas)<br/>
                        He/she/it was (él/ella/ello era/estaba)<br/>
                        We were (nosotros éramos/estábamos)<br/>
                        They were (ellos/ellas eran/estaban)<br/>
                        Futuro simple:<br/>
                        I will be (yo seré/estaré)<br/>
                        You will be (tú serás/estarás)<br/>
                        He/she/it will be (él/ella/ello será/estará)<br/>
                        We will be (nosotros seremos/estaremos)<br/>
                        They will be (ellos/ellas serán/estarán)<br/>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Present Simple
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        La estructura del presente simple (simple present) en inglés es la siguiente:<br/>
                        Sujeto + Verbo (en infinitivo) + Complemento<br/>
                        Por ejemplo, para decir "Yo como una manzana" en presente simple, la estructura sería:<br/>
                        I (sujeto) + eat (verbo en infinitivo) + an apple (complemento)<br/>
                        Así, la oración completa quedaría:<br/>
                        I eat an apple.<br/>
                        Aquí te dejo algunos ejemplos más:<br/>
                        Él trabaja desde casa: He works from home.<br/>
                        Nosotros estudiamos para el examen: We study for the exam.<br/>
                        Ellos siempre llegan tarde: They always arrive late.<br/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Home;
