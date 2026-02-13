import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  width: 55px;
  height: 55px;
  border: none;
  border-radius: 6px;
  background-color: #FDC913;
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
`;

const Display = styled.div`
  width: 55px;
  height: 55px;
  background-color: #ffff;
  border: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
`;

const Count = ({ increaseQuantity, decreaseQuantity, quantity }) => {
  return (
    <Container>
      <Button type="button" onClick={decreaseQuantity}>
        -
      </Button>

      <Display>{quantity}</Display>

      <Button type="button" onClick={increaseQuantity}>
        +
      </Button>
    </Container>
  );
};

export default Count;
