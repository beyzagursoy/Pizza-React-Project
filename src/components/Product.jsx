import productData from '../../productData';
import menuDataList from './../../menuDataList';
const Product = () => {
    return (
        <>
            <section className="product-section">
                <div className="text-box">
                    <p className="text-1">en çok paketlenen menüler</p>
                    <h3>Acıktıran Kodlara Doyuran Lezzetler</h3>
                </div>
                <nav className="product-nav">
                    {menuDataList.map((item) => (
                        <button key={item.id} className="nav-button">
                            <img src={item.icon} alt={item.title} />
                            {item.title}
                        </button>
                    ))}
                </nav>
                <div className='product-items'>
                    {productData.map((product) => (
                        <div className='product' key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <div className='product-box'>
                                <h3>{product.name}</h3>
                                <div className='product-detail'>
                                    <p className='item'>{product.rating}</p>
                                    <p className='item'>({product.reviewCount})</p>
                                    <p className='item-2'>{product.price}₺</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Product