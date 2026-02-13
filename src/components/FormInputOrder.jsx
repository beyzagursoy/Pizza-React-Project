import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Checkbox from "./Order-Forms/Checkbox";
import TextArea from "./Order-Forms/TextArea";
import RadioButton from "./Order-Forms/RadioButton";
import Selected from "./Order-Forms/Selected";
import NameInfo from "./Order-Forms/NameInfo";
import Count from "./Order-Forms/Count";
import Summary from "./Order-Forms/Summary";

const FormInputOrder = () => {
  const [ingredientOptions, setIngredientOptions] = useState([]);
  const [orderData, setOrderData] = useState({
    pizzaSize: "",
    doughType: "",
    nameSurname: "",
    orderNote: "",
    quantity: 1,
    selectedIngredients: [],
  });

  useEffect(() => {
    axios
      .get("/chechbox.json")
      .then((res) => setIngredientOptions(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;

    if (type === "checkbox") {
      if (checked) {
        if (orderData.selectedIngredients.length < 10) {
          setOrderData({
            ...orderData,
            selectedIngredients: [
              ...orderData.selectedIngredients,
              name,
            ],
          });
        }
      } else {
        setOrderData({
          ...orderData,
          selectedIngredients:
            orderData.selectedIngredients.filter(
              (item) => item !== name
            ),
        });
      }
    } else {
      setOrderData({ ...orderData, [name]: value });
    }
  };

  const increaseQuantity = () => {
    setOrderData({
      ...orderData,
      quantity: orderData.quantity + 1,
    });
  };

  const decreaseQuantity = () => {
    if (orderData.quantity > 1) {
      setOrderData({
        ...orderData,
        quantity: orderData.quantity - 1,
      });
    }
  };

  const isFormInvalid =
    orderData.selectedIngredients.length < 4 ||
    orderData.selectedIngredients.length > 10 ||
    !orderData.pizzaSize ||
    !orderData.doughType;

  const ingredientsPrice =
    orderData.selectedIngredients.length * 5;

  const finalTotal =
    (85.5 + ingredientsPrice) *
    orderData.quantity;


  const TopWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    gap: 60px;
    align-items: flex-start;
  `;

  const Divider = styled.div`
    margin: 40px 0;
    height: 1px;
    background-color: #e5e5e5;
  `;

  const BottomSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 30px;
    gap: 60px;
  `;


  return (
    <form
      style={{ width: "40%" }}
      onSubmit={(e) => e.preventDefault()}
    >
      <TopWrapper>
        <RadioButton
          handleChange={handleChange}
          selectedSize={orderData.pizzaSize}
          showError={!orderData.pizzaSize}
        />

        <Selected
          handleChange={handleChange}
          doughType={orderData.doughType}
          showError={!orderData.doughType}
        />

      </TopWrapper>

      <Checkbox
        ingredientOptions={ingredientOptions}
        selectedIngredients={orderData.selectedIngredients}
        handleChange={handleChange}
        showError={orderData.selectedIngredients.length < 4}
      />


      <Divider />

      <NameInfo
        nameSurname={orderData.nameSurname}
        handleChange={handleChange}
        isInvalid={orderData.nameSurname.trim().length < 3}
      />

      <TextArea
        orderNote={orderData.orderNote}
        handleChange={handleChange}
      />


      <BottomSection>
        <Count
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          quantity={orderData.quantity}
        />

        <Summary
          ingredientsPrice={ingredientsPrice}
          finalTotal={finalTotal}
          isFormInvalid={isFormInvalid}
        />
      </BottomSection>
    </form>
  );
};

export default FormInputOrder;
