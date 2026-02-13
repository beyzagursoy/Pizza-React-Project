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

const FormInputOrder = ({ setActivePage, setOrderData }) => {
  const [ingredientOptions, setIngredientOptions] = useState([]);
  const [formData, setFormData] = useState({
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
      .catch((err) => console.log("Veri çekme hatası:", err));
  }, []);

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;

    if (type === "checkbox") {
      if (checked) {
        if (formData.selectedIngredients.length < 10) {
          setFormData({
            ...formData,
            selectedIngredients: [...formData.selectedIngredients, name],
          });
        }
      } else {
        setFormData({
          ...formData,
          selectedIngredients: formData.selectedIngredients.filter(
            (item) => item !== name
          ),
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const increaseQuantity = () => {
    setFormData({ ...formData, quantity: formData.quantity + 1 });
  };

  const decreaseQuantity = () => {
    if (formData.quantity > 1) {
      setFormData({ ...formData, quantity: formData.quantity - 1 });
    }
  };

  const ingredientsPrice = formData.selectedIngredients.length * 5;
  const basePrice = 85.5;
  const finalTotal = (basePrice + ingredientsPrice) * formData.quantity;

  const isFormInvalid =
    formData.selectedIngredients.length < 4 ||
    formData.selectedIngredients.length > 10 ||
    !formData.pizzaSize ||
    !formData.doughType ||
    formData.nameSurname.trim().length < 3;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormInvalid) return;

    const payload = {
      isim: formData.nameSurname,
      boyut: formData.pizzaSize,
      hamur: formData.doughType,
      malzemeler: formData.selectedIngredients,
      not: formData.orderNote,
      adet: formData.quantity,
      ek_ucret: ingredientsPrice,
      toplam_fiyat: finalTotal,
    };

    axios
      .post("https://reqres.in/api/pizza", payload, {
        headers: {
          "x-api-key": import.meta.env.VITE_API_KEY,
        },
      })
      .then((res) => {
        console.log("Sipariş başarıyla gönderildi. API Yanıtı:", res.data);

        setOrderData({
          ...formData,
          ingredientsPrice,
          finalTotal,
        });
        setActivePage("success");
      })
      .catch((err) => {
        console.error("Sipariş hatası:", err);
        alert("Siparişiniz gönderilirken bir hata oluştu.");
      });
  };

  return (
    <form style={{ width: "40%" }} onSubmit={handleSubmit}>
      <TopWrapper>
        <RadioButton
          handleChange={handleChange}
          selectedSize={formData.pizzaSize}
          showError={!formData.pizzaSize}
        />

        <Selected
          handleChange={handleChange}
          doughType={formData.doughType}
          showError={!formData.doughType}
        />
      </TopWrapper>

      <Checkbox
        ingredientOptions={ingredientOptions}
        selectedIngredients={formData.selectedIngredients}
        handleChange={handleChange}
        showError={formData.selectedIngredients.length < 4}
      />

      <Divider />

      <NameInfo
        nameSurname={formData.nameSurname}
        handleChange={handleChange}
        isInvalid={formData.nameSurname.trim().length < 3}
      />

      <TextArea
        orderNote={formData.orderNote}
        handleChange={handleChange}
      />

      <BottomSection>
        <Count
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          quantity={formData.quantity}
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