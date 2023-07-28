import React, { useState, useEffect } from "react";
import { Modal, Button, ModalHeader } from "react-bootstrap";

//COMPONENTS
import HummusBody from "../components/HummusBody";

const Hummus = () => {
  const [ingredients, setIngredients] = useState([
    { name: "Garbanzo", proportion: 250 },
    { name: "Zumo de Limon", proportion: 60 },
    { name: "Agua", proportion: 100 },
    { name: "Tahini", proportion: 260 },
    { name: "Ajo ", proportion: 30 },
    { name: "Aceite de oliva ", proportion: 50 },
  ]);

  const [selectedIngredient, setSelectedIngredient] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [result, setResult] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedIngredient(false);
    setResult(null);
    setQuantity("");
  };

  const handleShowModal = () => setShowModal(true);

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
      const calculatedQuantity = (
        (ingredient.proportion * quantity) /
        selectedIngredientObj.proportion
      ).toFixed(0);

      return {
        ...ingredient,
        calculatedQuantity,
      };
    });

    setResult(calculatedIngredients);
  };

  const renderIngredientInputs = () => {
    return (
      <select
        className="selectIngredient"
        onChange={(event) => handleIngredientSelect(event.target.value)}
      >
        {ingredients.map((ingredient) => (
          <option
            key={ingredient.name}
            value={ingredient.name}
            className="nameOfIngredient"
          >
            {ingredient.name}
          </option>
        ))}
      </select>
    );
  };

  const renderResult = () => {
    if (!result) {
      return null;
    }

    return (
      <div>
        <h3 className="resultTitle">NECESITAS</h3>
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
      <div>
        <div className="dish-title">
          <h1>HUMMUS</h1>
        </div>
        <Button variant="success botonCalcula" onClick={handleShowModal}>
          CALCULA TUS CANTIDADES
        </Button>

        <HummusBody />

        <Modal className="modal" show={showModal} onHide={handleCloseModal}>
          <Modal.Body>
            <div className="calculatorWrapper">
              <div className="selectIngredient">
                <h3 className="selectIngredientTitle">
                  Selecciona un ingrediente:
                </h3>

                {renderIngredientInputs()}
              </div>
              {selectedIngredient && (
                <div>
                  <h3 className="selectedIngredient">
                    Cantidad de {selectedIngredient}
                  </h3>
                  <div className="cuantity">
                    <label className="label">
                      <input
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="inputForm"
                      />{" "}
                      gr
                    </label>
                    {quantity.length > 0 ? (
                      <button className="inputButton" onClick={handleCalculate}>
                        Aceptar
                      </button>
                    ) : null}
                  </div>
                </div>
              )}
              {renderResult()}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="danger"
              onClick={handleCloseModal}
              className="closeCalculateForm"
            >
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
export default Hummus;
