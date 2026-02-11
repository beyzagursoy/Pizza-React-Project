import menuData from "../../menuData"

const MenuCategories = () => {
    
    return (
        <>
            <section className="menu-categories">
                <nav>
                    <ul>
                        {menuData.map((item) => (
                            <li key={item.id}>
                                <a href="#">
                                    <img src={item.icon} alt={item.title} />
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </section>
        </>
    )
}

export default MenuCategories