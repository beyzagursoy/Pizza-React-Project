import styled from "styled-components"
import FormInputOrder from "./FormInputOrder"

const ButtonMain = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    fornt-family: 'Barlow';
    font-size: 16px;
`

const OrderForm = (props) => {
    const { setActivePage } = props
    return (
        <div className="orderForm-conatiner">
            <header className="orderForm-header">
                <img src="\assets\iteration-1\logo.svg" />
                <div>
                    <nav className="form-navigation">
                        <ButtonMain onClick={() => setActivePage('home')} className="form-btn">Anasayfa</ButtonMain>
                        <span className="form-seperate">-</span>
                        <span className="form-active">Sipariş Oluştur</span>
                    </nav>
                </div>

            </header>
            <FormInputOrder />
        </div>
    )
}

export default OrderForm