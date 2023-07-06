import React from "react";

const HummusBody = () => {
  return (
    <div>
      <div className="dish-body">
        <div className="rowFirst">
          <div className="col-6">
            <div className="dish-body-explanation">
              <div className="recipee-container">
                <div className="recipee-title">
                  <h1>Ingredientes</h1>
                </div>
                <div className="recipee-ingredients">
                  <ul>
                    <li className="list-item">
                      <span class="start">Grabanzo</span>
                      <span class="space"></span>
                      <span class="end">250 gr.</span>
                    </li>
                    <li className="list-item">
                      <span class="start">Zumo de Limon</span>
                      <span class="space"></span>
                      <span class="end">60 gr.</span>
                    </li>
                    <li className="list-item">
                      <span class="start">Agua</span>
                      <span class="space"></span>
                      <span class="end">100 gr.</span>
                    </li>
                    <li className="list-item">
                      <span class="start">Tahini</span>
                      <span class="space"></span>
                      <span class="end">260 gr.</span>
                    </li>
                    <li className="list-item">
                      <span class="start">Ajo</span>
                      <span class="space"></span>
                      <span class="end">30 gr.</span>
                    </li>
                    <li className="list-item">
                      <span class="start">Aceite de oliva</span>
                      <span class="space"></span>
                      <span class="end">50gr</span>
                    </li>
                    <li className="list-item">
                      <span class="start">Sal</span>
                      <span class="space"></span>
                      <span class="end">Al gusto</span>
                    </li>
                    <li className="list-item">
                      <span class="start">Comino</span>
                      <span class="space"></span>
                      <span class="end">Al gusto</span>
                    </li>
                    <li className="list-item">
                      <span class="start">Pimenton</span>
                      <span class="space"></span>
                      <span class="end">Al gusto</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="dish-body-explanation">
              <h1>Receta</h1>
              <p className="paragraph">
                <span className="number">1</span> Cuece los garbanzos hasta que
                estén tiernos. Habiéndolos dejado en remojo la noche anterior,
                tardarán aproximadamente 1 hora y 30 minutos en olla
                tradicional, mientras que en olla expréss tardará entre 20 y 25
                minutos. Se pueden
              </p>
              <p className="paragraph">
                <span className="number">2</span> Pon el ajo y la sal en un
                mortero y machaca hasta obtener una pasta. Añade el zumo de
                limón y deja reposar durante 10 minutos (esto servirá para que
                el sabor a ajo sea suave, sutil y delicado). Seguidamente filtra
                la mezcla con un colador y reserva.c
              </p>
              <p className="paragraph">
                <span className="number">3</span> En el vaso de la batidora
                añade la mezcla de limón y el tahini y tritura hasta mezclar
              </p>
              <p className="paragraph">
                <span className="number">4</span> Seguidamente añade los
                garbanzos escurridos y el comino y tritura hasta obtener un puré
                espeso. Si con tu batidora tienes dificultad para triturar los
                garbanzos, añade un par de cucharadas del agua de cocción para
                ayudar.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://i0.wp.com/www.onceuponachef.com/images/2012/07/Hummus.jpg?resize=1200%2C1553&ssl=1"
        className="hummusImg"
      />
    </div>
  );
};

export default HummusBody;
