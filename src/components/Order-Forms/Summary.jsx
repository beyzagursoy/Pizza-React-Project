import styled from "styled-components";

const Wrapper = styled.div`
  width: 360px;
  font-family: "Barlow", sans-serif;
  padding-bottom: 80px;
`;

const Card = styled.div`
  background-color: #FAF7F2;
  padding: 30px;
  border-radius: 6px;
  border: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #292929;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
  color: #5F5F5F;
`;

const TotalRow = styled(Row)`
  font-weight: 600;
  color: #CE2829;
  font-size: 18px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 6px;
  background-color: #FDC913;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  

  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
`;

const Summary = ({ ingredientsPrice, finalTotal, isFormInvalid }) => {
  return (
    <Wrapper>
      <Card>
        <Title>Sipariş Toplamı</Title>

        <Row>
          <span>Seçimler</span>
          <span>{ingredientsPrice.toFixed(2)}₺</span>
        </Row>

        <TotalRow>
          <span>Toplam</span>
          <span>{finalTotal.toFixed(2)}₺</span>
        </TotalRow>
      </Card>

      <SubmitButton disabled={isFormInvalid} type="submit">
        SİPARİŞ VER
      </SubmitButton>
    </Wrapper>
  );
};

export default Summary;
