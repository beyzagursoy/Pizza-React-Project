const Product = () => {
    return (
        <>
            <section className="product-section">
                <div className="text-box">
                    <p className="text-1">en çok paketlenen menüler</p>
                    <h3>Acıktıran Kodlara Doyuran Lezzetler</h3>
                </div>
                <nav className="product-nav">
                    <button className="nav-button"><img src="assets/iteration-2/icons/1.svg" alt="" /> Ramen</button>
                    <button className="nav-button"><img src="assets/iteration-2/icons/2.svg" alt="" /> Pizza</button>
                    <button className="nav-button"><img src="assets/iteration-2/icons/3.svg" alt="" /> Burger</button>
                    <button className="nav-button"><img src="assets/iteration-2/icons/4.svg" alt="" /> French fries</button>
                    <button className="nav-button"><img src="assets/iteration-2/icons/5.svg" alt="" /> Fast food</button>
                    <button className="nav-button"><img src="assets/iteration-2/icons/6.svg" alt="" /> Soft drinks</button>
                </nav>
                <div className="product-items">
                    <div className="product">
                        <img src="assets/iteration-2/pictures/food-1.png" alt="" />
                            <div className="product-box">
                                <h3>Terminal Pizza</h3>
                                <div className="product-detail">
                                    <p className="item">4.9</p>
                                    <p className="item">(200)</p>
                                    <p className="item-2">60₺</p>
                                </div>
                            </div>
                    </div>
                    <div className="product">
                        <img src="assets/iteration-2/pictures/food-2.png" alt="" />
                            <div className="product-box">
                                <h3>Position Absolute Acı Pizza</h3>
                                <div className="product-detail">
                                    <p className="item">4.9</p>
                                    <p className="item">(200)</p>
                                    <p className="item-2">60₺</p>
                                </div>
                            </div>
                    </div>
                    <div className="product">
                        <img src="assets/iteration-2/pictures/food-3.png" alt="" />
                            <div className="product-box">
                                <h3>useEffect Tavuklu burger</h3>
                                <div className="product-detail">
                                    <p className="item">4.9</p>
                                    <p className="item">(200)</p>
                                    <p className="item-2">60₺</p>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product