const Selected = (props) => {
    const { handleChange } = props;

    return (
        <section className="order-section-btn">
            <h2>Hamur Seç *</h2>
            <select onChange={handleChange} name="doughType" defaultValue="">
                <option value="" disabled hidden>Hamur Kalınlığı</option>
                <option value="thin">İnce Hamur</option>
                <option value="standart">Standart</option>
                <option value="thick">Kalın Hamur</option>
            </select>
        </section>
    )
}

export default Selected