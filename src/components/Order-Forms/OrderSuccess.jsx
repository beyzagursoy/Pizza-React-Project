import React from 'react';
import styled from 'styled-components';
import OrderSucces from './OrderSuccess';

const Container = styled.div`
  background-color: #CE2829;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  color: white;
  font-family: 'Barlow', sans-serif;
  text-align: center;
`;

const HeaderLogo = styled.h1`
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 60px;
  font-family: Londrina Solid
`;

const Tagline = styled.p`
  font-family: 'Satisfy', cursive; /* El yazısı fontu */
  color: #FDC913;
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-family: 'Barlow', sans-serif;
  font-size: 5rem;
  font-weight: 300;
  margin: 0;
  border-bottom: 1px solid white;
  padding-bottom: 40px;
  width: 100%;
  max-width: 600px;
  letter-spacing: 2px;
`;

const OrderDetails = styled.div`
  color: #ffff;
  margin-top: 40px;
  line-height: 1.8;
  
  h4 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 30px;
  }

  p {
    font-size: 1.1rem;
    margin: 5px 0;
    font-weight: 400;
    span {
      font-weight: 700;
    }
  }
`;

const Card = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  padding: 30px 40px;
  width: 100%;
  max-width: 350px;
  margin-top: 50px;
  text-align: left;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    font-weight: 600;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  font-size: 1.1rem;
  font-weight: ${props => props.bold ? '700' : '400'};
`;

const OrderSuccess = ({ orderData }) => {
  if (!orderData) return <Container>Sipariş verisi yükleniyor...</Container>;

  return (
    <Container>
      <HeaderLogo>Teknolojik Yemekler</HeaderLogo>

      <Tagline>lezzetin yolda</Tagline>
      <Title data-cy="success-title">SİPARİŞ ALINDI</Title>

      <OrderDetails>
        <h4>Position Absolute Acı Pizza</h4>
        <p>Boyut: <span>{orderData.pizzaSize}</span></p>
        <p>Hamur: <span>{orderData.doughType}</span></p>
        <p>Ek Malzemeler: <span>{orderData.selectedIngredients.join(', ')}</span></p>
      </OrderDetails>

      <Card>
        <h3>Sipariş Toplamı</h3>
        <Row>
          <span>Seçimler</span>
          <span>{orderData.ingredientsPrice?.toFixed(2)}₺</span>
        </Row>
        <Row bold>
          <span>Toplam</span>
          <span>{orderData.finalTotal?.toFixed(2)}₺</span>
        </Row>
      </Card>
    </Container>
  );
};

export default OrderSuccess;