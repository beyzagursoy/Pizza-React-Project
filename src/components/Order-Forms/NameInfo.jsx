
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: "Barlow", sans-serif;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: 600;
  color: #292929;
`;

const Input = styled.input`
  padding: 20px;
  border-radius: 6px;
  border: none;
  background-color: #FAF7F2;
  font-size: 14px;

  &::placeholder {
    color: #5F5F5F;
    font-weight: 500;
    font-family: "Barlow", sans-serif;
  }

  &:focus {
    outline: none;
  }
`;

const Divider = styled.div`
  margin: 40px 0;
  height: 1px;
  background-color: #e5e5e5;
`;
const NameInfo = (props) => {
    const {nameSurname, handleChange, isInvalid} = props
    return (
        <>
      <Container>
        <Label htmlFor="nameSurname">Ad Soyad <span style={{ color: "red" }}>*</span></Label>
        <Input
          id="nameSurname"
          name="nameSurname"
          type="text"
          data-cy="name-input"
          value={nameSurname}
          onChange={handleChange}
          placeholder="İsim bilgilerinizi giriniz."
        />
        {isInvalid && (
          <span style={{ color: "red", fontSize: "14px" }}>
            İsim en az 3 karakter olmalıdır.
          </span>
        )}
      </Container>

      <Divider />
    </>
    )
}

export default NameInfo