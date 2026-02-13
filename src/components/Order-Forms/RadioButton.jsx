import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: 'Barlow', sans-serif;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

const SizeWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const HiddenRadio = styled.input`
  display: none;
`;

const SizeButton = styled.label`
  color: #5F5F5F;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ selected }) =>
    selected ? "#FFEECC" : "#FAF7F2"};
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${({ selected }) =>
      selected ? "#FFEECC" : "#FAF7F2"};
  }
`;

const RadioButton = ({ handleChange, selectedSize, showError }) => {
  const sizes = ["S", "M", "L"];

  return (
    <Section>
      <Title>
        Boyut Seç <span style={{ color: "red" }}>*</span>
      </Title>

      <SizeWrapper>
        {sizes.map((size) => (
          <div key={size}>
            <HiddenRadio
              type="radio"
              name="pizzaSize"
              value={size}
              onChange={handleChange}
              checked={selectedSize === size}
              id={size}
            />
            <SizeButton htmlFor={size} selected={selectedSize === size}>
              {size}
            </SizeButton>
          </div>
        ))}
      </SizeWrapper>
      {showError && (
        <span style={{ color: "red", fontSize: "14px" }}>
          Boyutu seçiniz.
        </span>
      )}
    </Section>
  );
};

export default RadioButton;
