import React, { useState, useEffect } from "react";
//COMPONENTS
import HummusCard from "../components/HummusCard";

const Hummus = () => {
  const [ingredients, setIngredients] = useState([
    { name: "Garbanzo", proportion: 250 },
    { name: "Zumo de Limon", proportion: 60 },
    { name: "Agua", proportion: 100 },
    { name: "Tahini", proportion: 260 },
    { name: "Ajo ", proportion: 30 },
    { name: "Aceite de oliva ", proportion: 50 },
  ]);

  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [quantity, setQuantity] = useState("");
  const [result, setResult] = useState(null);

  const handleIngredientSelect = (ingredient) => {
    setSelectedIngredient(ingredient);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCalculate = () => {
    if (!selectedIngredient || !quantity) {
      return;
    }

    const selectedIngredientObj = ingredients.find(
      (ingredient) => ingredient.name === selectedIngredient
    );

    const calculatedIngredients = ingredients.map((ingredient) => {
      const calculatedQuantity =
        (ingredient.proportion * quantity) / selectedIngredientObj.proportion;

      return {
        ...ingredient,
        calculatedQuantity,
      };
    });

    setResult(calculatedIngredients);
  };

  const renderIngredientInputs = () => {
    return ingredients.map((ingredient) => (
      <div key={ingredient.name}>
        <button
          className="selectIngredient"
          onClick={() => handleIngredientSelect(ingredient.name)}
        >
          {ingredient.name}
        </button>
      </div>
    ));
  };

  const renderResult = () => {
    if (!result) {
      return null;
    }

    return (
      <div>
        <h3 className="result">Resultado:</h3>
        <div className="resultCard">
          {result.map((ingredient) => (
            <p className="resultName" key={ingredient.name}>
              {ingredient.name}: {ingredient.calculatedQuantity} gr
            </p>
          ))}
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="dish-title">
        <h1>HUMMUS</h1>
      </div>
      <div className="dish-body">
        <div className="rowFirst">
          <div className="col-6">
            <div className="dish-body-explanation">
              <div className="recipee-container">
                <div className="recipee-title">
                  <h1>Ingredients</h1>
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
                      <span class="end">100 gr.</span>ite
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
              <h1>Explanation</h1>
              <p>
                <span className="number">1</span> Cuece los garbanzos hasta que
                estén tiernos. Habiéndolos dejado en remojo la noche anterior,
                tardarán aproximadamente 1 hora y 30 minutos en olla
                tradicional, mientras que en olla expréss tardará entre 20 y 25
                minutos. Se pueden
              </p>
              <p>
                <span className="number">2</span> Pon el ajo y la sal en un
                mortero y machaca hasta obtener una pasta. Añade el zumo de
                limón y deja reposar durante 10 minutos (esto servirá para que
                el sabor a ajo sea suave, sutil y delicado). Seguidamente filtra
                la mezcla con un colador y reserva.c
              </p>
              <p>
                <span className="number">3</span> En el vaso de la batidora
                añade la mezcla de limón y el tahini y tritura hasta mezclar
              </p>
              <p>
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
      <h2>Calculadora de Cantidades</h2>
      <div className="selectIngredient">
        <h3>Selecciona un ingrediente:</h3>
        {renderIngredientInputs()}
      </div>
      {selectedIngredient && (
        <div>
          <h3 className="selectedIngredient">
            Ingrediente seleccionado: {selectedIngredient}
          </h3>
          <div className="cuantity">
            <label>
              Cantidad disponible:
              <input
                type="text"
                value={quantity}
                onChange={handleQuantityChange}
                className="inputForm"
              />{" "}
              gr
            </label>
            <button className="inputButton" onClick={handleCalculate}>
              Aceptar
            </button>
          </div>
        </div>
      )}
      {renderResult()}
    </>
  );
};

export default Hummus;
