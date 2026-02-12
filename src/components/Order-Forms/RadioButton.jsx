const RadioButton = (props) => {
    const {handleChange, selectedSize} = props
    return (
        <section className="order-radio-btn">
            <h2>Boyut Seç *</h2>
            <label htmlFor="radioA">
                <input id="radioA" type="radio" name="pizzaSize" value="Küçük" onChange={handleChange} checked={selectedSize === "Küçük"} />Küçük
            </label><br />

            <label htmlFor="radioB">
                <input id="radioB" type="radio" name="pizzaSize" value="Standart" onChange={handleChange} checked={selectedSize === "Standart"} />Standart
            </label><br />

            <label htmlFor="radioC">
                <input id="radioC" type="radio" name="pizzaSize" value="Büyük" onChange={handleChange} checked={selectedSize === "Büyük"} />Büyük
            </label>
        </section>
    )
}

export default RadioButton