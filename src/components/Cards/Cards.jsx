import "./Cards.css"

const Cards = (props) => {
    const { setActivePage } = props
    return (
        <>
            <section className="cards">
                <div className="cards-box">

                    <div className="card-left">
                        <div className="card-left-text">
                            <h2>
                                Özel<br />
                                Lezzetus
                            </h2>
                            <p>Position:Absolute Acı Burger</p>
                            <button onClick={() => setActivePage("form")} className="btn">SİPARİŞ VER</button>
                        </div>
                        <img src="assets/iteration-2/cta/kart-1.png" alt="" />
                    </div>

                    <div className="cards-right">
                        <div className="card-top">
                            <div className="card-right-top-text">
                                <h3>Hackathlon<br />Burger Menü</h3>
                                <button onClick={() => setActivePage("form")} className="btn">SİPARİŞ VER</button>
                            </div>
                            <img src="assets/iteration-2/cta/kart-2.png" alt="" />
                        </div>

                        <div className="card-bottom">
                            <div className="card-right-bottom-text">
                                <h3>
                                    <span id="red-text">Çoooook</span> hızlı<br />npm gibi kurye
                                </h3>
                                <button onClick={() => setActivePage("form")} className="btn">SİPARİŞ VER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cards