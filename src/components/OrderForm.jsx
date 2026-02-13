import styled from "styled-components"
import FormInputOrder from "./FormInputOrder"
import OrderInfo from "./Order-Forms/OrderInfo"

const Header = styled.header`
    background-color: #CE2829;
    border: 1px solid #C20608;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    
`
const ImgNew = styled.img`
    margin-bottom: 35px;
`


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #FFFF !important;
    margin: 0 auto;  
`;


const OrderForm = ({ setActivePage, setOrderData }) => {
    return (
        <div className="orderForm-conatiner">
            <Header className="orderForm-header">
                <ImgNew src="/assets/iteration-1/logo.svg" />
            </Header>
            <OrderInfo />
            <Wrapper><FormInputOrder setActivePage={setActivePage}
                setOrderData={setOrderData} /></Wrapper>

        </div>
    )
}

export default OrderForm