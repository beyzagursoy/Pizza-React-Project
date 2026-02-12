const Checkbox = (props) => {

    const { ingredientOptions, handleChange, selectedIngredients } = props
    return (
        <div className="checkbox-container">
            <h2>Ek Malzemeler</h2>
            <p>En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺</p>
            {ingredientOptions.map((e) => {
                const isChecked = selectedIngredients.includes(e.name);
                const limitReached = selectedIngredients.length >= 10 && !isChecked;

                return (
                    <label key={e.id} htmlFor={e.name}>
                        <input
                            id={e.name}
                            name={e.name}
                            type="checkbox"
                            value="checked"
                            checked={isChecked}
                            onChange={handleChange}
                            disabled={limitReached}
                        />
                        {e.name}
                    </label>
                )
            })}
        </div>
    )
}

export default Checkbox

