const Header = (props) => {
    const { setActivePage } = props
    return (
        <>
            <header>
                <div className="t-yemek">
                    <img className="logo" src="assets/iteration-1/logo.svg" alt="" />
                    <div class="text">
                        <h4 className="font-1">fırsatı kaçırma</h4>
                        <h2 className="header">KOD ACIKTIRIR</h2>
                        <h2 className="header">PİZZA, DOYURUR</h2>
                    </div>
                    <a onClick={() => setActivePage("Form")} className="button" href="">ACIKTIM</a>
                </div>
            </header>
        </>

    )
}
export default Header