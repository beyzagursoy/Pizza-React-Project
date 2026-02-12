const Summary = (props) => {
    const { ingredientsPrice, finalTotal, isFormInvalid } = props;

    return (
        <div className="summary-container">
            <h3>Sipariş Toplamı</h3>

            <div className="summary-row">
                <span>Seçimler</span>
                <span>{ingredientsPrice.toFixed(2)}₺</span>
            </div>

            <div className="summary-tow-total">
                <span>Toplam</span>
                <span>{finalTotal.toFixed(2)}₺</span>
            </div>

            <button disabled={isFormInvalid} type="submit" className="submit-btn">
                Sipariş Ver
            </button>
        </div>

    )

}

export default Summary