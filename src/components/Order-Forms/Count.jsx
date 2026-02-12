const Count = (props) => {
    const { increaseQuantity, decreaseQuantity, quantity } = props;
    return (
        <div className="count-container">
            <button type="button" onClick={decreaseQuantity}>-</button>
            <div className="count-display">{quantity}</div>
            <button type="button" onClick={increaseQuantity}>+</button>
        </div>
    )

}

export default Count