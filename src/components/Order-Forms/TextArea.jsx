const TextArea = (props) => {
    const { orderNote, handleChange } = props
    return (
        <div className="textarea-container">
            <label htmlFor="orderNote">Sipariş Notu</label><br />
            <input
                id="orderNote"
                name="orderNote"
                type="text"
                value={orderNote}
                onChange={handleChange}
                placeholder="Siparişine eklemek istediğin bir not var mı?" />
        </div>
    )
}

export default TextArea