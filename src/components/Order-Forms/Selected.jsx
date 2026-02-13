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

const StyledSelect = styled.select`
  width: 250px;
  padding: 15px;
  border-radius: 8px;
  border: none;
  background-color: #FAF7F2;
  font-size: 16px;
  cursor: pointer;

  &:focus {
    outline: none;
    border: 2px solid #FFEECC";
  }
`;

const Selected = ({ handleChange, doughType, showError }) => {
  return (
    <Section>
      <Title>
        Hamur Seç <span style={{ color: "red" }}>*</span>
      </Title>

      <StyledSelect
        name="doughType"
        data-cy="dough-select"
        value={doughType}
        onChange={handleChange}
      >
        <option value="" disabled hidden>
          — Hamur Kalınlığı Seç —
        </option>
        <option value="İnce Hamur">İnce Hamur</option>
        <option value="Standart">Standart</option>
        <option value="Kalın Hamur">Kalın Hamur</option>
      </StyledSelect>

      {showError && (
        <span style={{ color: "red", fontSize: "14px" }}>
          Hamur tipini seçiniz.
        </span>
      )}
    </Section>
  );
};


export default Selected;