import { useEffect, useState } from "react"
import axios from "axios"
import Checkbox from "./Order-Forms/Checkbox"
import TextArea from "./Order-Forms/TextArea"
import OrderInfo from "./Order-Forms/OrderInfo"
import RadioButton from "./Order-Forms/RadioButton"
import Selected from "./Order-Forms/Selected"
import NameInfo from "./Order-Forms/NameInfo"
import Count from "./Order-Forms/Count"
import Summary from "./Order-Forms/Summary"

const FormInputOrder = () => {
    const [ingredientOptions, setIngredientOptions] = useState([]);
    const [orderData, setOrderData] = useState({
        pizzaSize: "",
        doughType: "",
        orderNote: "",
        quantity: 1,
        selectedIngredients: [],
    });

    useEffect(() => {
        axios.get("/chechbox.json")
            .then((res) => {
                setIngredientOptions(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
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
                            name
                        ],
                    });
                }
            } else {
                setOrderData({
                    ...orderData,
                    selectedIngredients: orderData.selectedIngredients.filter(
                        (item) => item !== name,
                    ),
                });
            }
        } else {
            setOrderData({ ...orderData, [name]: value });
        }
    };

    const isFormInvalid =
        orderData.selectedIngredients.length < 4 ||
        orderData.selectedIngredients.length > 10 ||
        !orderData.pizzaSize ||
        !orderData.doughType;

    const increaseQuantity = () => {
        setOrderData({ ...orderData, quantity: orderData.quantity + 1 });
    };

    const decreaseQuantity = () => {
        if (orderData.quantity > 1) {
            setOrderData({ ...orderData, quantity: orderData.quantity - 1 });
        }
    };

    const ingredientsPrice = orderData.selectedIngredients.length * 5;
    const finalTotal = (85.5 + ingredientsPrice) * orderData.quantity;

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <OrderInfo />

            <RadioButton
                handleChange={handleChange}
                selectedSize={orderData.pizzaSize}
            />

            <Selected handleChange={handleChange} />

            <Checkbox
                ingredientOptions={ingredientOptions}
                selectedIngredients={orderData.selectedIngredients}
                handleChange={handleChange}
            />

            {orderData.selectedIngredients.length < 4 && (
                <p style={{ color: "red" }}>En az 4 malzeme seçiniz.</p>
            )}

            <br />
            <br />
            <hr />

            <NameInfo />

            <TextArea
                orderNote={orderData.orderNote}
                handleChange={handleChange}
            />

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
        </form>
    )
}

export default FormInputOrder


/*import { useEffect, useState } from "react";
import axios from "axios";
import CheckBox from "./CheckBox";
import SelectButton from "./SelectButton";
import OrderInfo from "./OrderInfo";
import RadioButtons from "./RadioButtons";
import OrderTextarea from "./OrderTextarea";
import OrderCount from "./OrderCount";
import SummaryBox from "./SummaryBox";
export default function FormInputs() {
  const [toppings, setToppings] = useState([]);
  const [formData, setFormData] = useState({
    size: "",
    dough: "",
    note: "",
    num: 1,
    selectedToppings: [],
  });
  useEffect(() => {
    axios
      .get("/mockToppings.json")
      .then((res) => setToppings(res.data))
      .catch((err) => console.error(err));
  }, []);
  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    if (type === "checkbox") {
      if (checked) {
        if (formData.selectedToppings.length < 10) {
          setFormData({
            ...formData,
            selectedToppings: [...formData.selectedToppings, name],
          });
        }
      } else {
        setFormData({
          ...formData,
          selectedToppings: formData.selectedToppings.filter(
            (item) => item !== name,
          ),
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const isFormInvalid =
    formData.selectedToppings.length < 4 ||
    formData.selectedToppings.length > 10 ||
    !formData.size ||
    !formData.dough;
  const increaseNum = () => {
    setFormData({ ...formData, num: formData.num + 1 });
  };
  const decreaseNum = () => {
    if (formData.num > 1) {
      setFormData({ ...formData, num: formData.num - 1 });
    }
  };
  const toppingsPrice = formData.selectedToppings.length * 5;
  const finalTotal = (85.5 + toppingsPrice) * formData.num;


  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <OrderInfo />
      <RadioButtons handleChange={handleChange} selectedSize={formData.size} />
      <SelectButton handleChange={handleChange} />
      <CheckBox
        toppings={toppings}
        selectedToppings={formData.selectedToppings}
        handleTopChange={handleChange}
      />
      {formData.selectedToppings.length < 4 && (
        <p style={{ color: "red" }}>En az 4 malzeme seçiniz.</p>
      )}
      <OrderTextarea note={formData.note} handleChange={handleChange} />
      <br />
      <br />
      <hr />
      <div className="order-footer">
        <OrderCount
          increaseNum={increaseNum}
          decreaseNum={decreaseNum}
          num={formData.num}
        />
        <SummaryBox
          toppingsPrice={toppingsPrice}
          finalTotal={finalTotal}
          isFormInvalid={isFormInvalid}
        />
      </div>
    </form>
  );
} */