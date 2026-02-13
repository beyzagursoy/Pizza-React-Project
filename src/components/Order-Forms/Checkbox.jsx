import styled from "styled-components";

const Container = styled.div`
margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: "Barlow", sans-serif;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #292929
`;

const Info = styled.p`
  font-family: "Barlow", sans-serif;
  font-size: 16px;
  color: #5f5f5f;
  fonrt-weight: 500;
  
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 40px;
  margin-top: 15px;
`;

const HiddenCheckbox = styled.input`
  display: none;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
`;

const Box = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 8px;
  background-color: ${({ checked }) =>
    checked ? "#FDC913" : "#FAF7F2"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  color: #5F5F5F;
  transition: 0.2s;
`;

const Text = styled.span`
  color: #5F5F5F;
  font-size: 16px;
  font-weight: 700;
`;

const Checkbox = ({ ingredientOptions, handleChange, selectedIngredients, showError }) => {
  return (
    <Container>
      <Title>Ek Malzemeler <span style={{ color: "red" }}>*</span></Title>
      <Info>En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺</Info>

      <Grid>
        {ingredientOptions.map((e) => {
          const isChecked = selectedIngredients.includes(e.name);
          const limitReached =
            selectedIngredients.length >= 10 && !isChecked;

          return (
            <Label key={e.id} htmlFor={e.name}>
              <HiddenCheckbox
                id={e.name}
                name={e.name}
                type="checkbox"
                data-cy="ingredient-checkbox"
                checked={isChecked}
                onChange={handleChange}
                disabled={limitReached}
              />

              <Box checked={isChecked}>
                {isChecked && "✓"}
              </Box>

              <Text>{e.name}</Text>
            </Label>
          );
        })}
      </Grid>
      {showError && (
        <span style={{ color: "red", fontSize: "14px", marginTop: "10px" }}>
          En az 4 malzeme seçiniz.
        </span>
      )}
    </Container>
  );
};

export default Checkbox;
