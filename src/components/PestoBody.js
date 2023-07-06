import React from "react";

const PestoBody = () => {
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
                      <span class="start">Albahaca</span>
                      <span class="space"></span>
                      <span class="end">100 gr.</span>
                    </li>
                    <li className="list-item">
                      <span class="start">Piñones</span>
                      <span class="space"></span>
                      <span class="end">75 gr.</span>
                    </li>
                    <li className="list-item">
                      <span class="start">Parmesano</span>
                      <span class="space"></span>
                      <span class="end">200 gr.</span>
                    </li>
                    <li className="list-item">
                      <span class="start">Ajo</span>
                      <span class="space"></span>
                      <span class="end">15 gr.</span>
                    </li>
                    <li className="list-item">
                      <span class="start">Aceite de Oliva</span>
                      <span class="space"></span>
                      <span class="end">160 gr.</span>
                    </li>
                    <li className="list-item">
                      <span class="start">Sal</span>
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
                <span className="number">1</span> Separamos las hojas de
                albahaca del tallo (no lo utilizamos porque amarga y estropea el
                resultado), las lavamos y secamos a conciencia. Para ello, las
                extendemos sobre una hoja de papel absorbente de cocina,
                colocamos otra hoja encima y presionamos ligeramente con la
                palma de la mano, con cuidado de no romper ninguna hoja.
              </p>
              <p className="paragraph">
                <span className="number">2</span> Mientras las hojas de albahaca
                se secan, pelamos los dientes de ajo, los cortamos en dos, a lo
                largo, y retiramos el gérmen{" "}
              </p>
              <p className="paragraph">
                <span className="number">3</span> Tostamos los piñones en una
                sartén, sin aceite.
              </p>
              <p className="paragraph">
                <span className="number">4</span> Colocamos todos los
                ingredientes en el vaso de un robot de cocina, junto con la
                mitad del aceite y una pizca de sal, y trituramos.
              </p>
              <p className="paragraph">
                <span className="number">5</span> Cuando hayamos obtenido una
                papilla y no se aprecien trozos de piñones ni de albahaca,
                dejamos de triturar para añadir el resto del aceite. Trituramos
                de nuevo, sólo para integrar el aceite, y ya tenemos nuestra
                salsa de pestolista para utilizar.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://sixhungryfeet.com/wp-content/uploads/2020/06/Green-Pesto-3.jpg"
        className="pestoImg"
      />
    </div>
  );
};

export default PestoBody;
