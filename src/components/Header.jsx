const Header = (props) => {
    const { setActivePage } = props
    return (
        <>
            <header className="header-main-page">
                <div className="t-yemek">
                    <img className="logo" src="assets/iteration-1/logo.svg" alt="" />
                    <div className="text">
                        <h4 className="font-1">fırsatı kaçırma</h4>
                        <h2 className="header">KOD ACIKTIRIR</h2>
                        <h2 className="header">PİZZA, DOYURUR</h2>
                    </div>
                    <button onClick={() => setActivePage("Form")} className="button" href="">ACIKTIM</button>
                </div>
            </header>
        </>

    )
}
export default Header