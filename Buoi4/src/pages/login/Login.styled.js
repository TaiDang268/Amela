import styled from "styled-components";
import bg from "../../assets/images/bg-login.jpg";

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${bg}) no-repeat center;
  background-size: cover;
`;
export const Container = styled.div`
  max-width: 1440px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
`;
export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  position: relative;
  grid-column: 7 / 12;

  max-width: 500px;
  margin: 0 auto;
  width: 100%;
  background-color: #999595;
  border-radius: 3px;
  min-height: 300px;
  border: 2px solid yellow;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (max-width: 768px) {
    grid-column: 1 / -1;
  }
`;
export const CameraWrap = styled.div`
  width: 100px;
  height: 100px;
  background-color: #999595;
  padding: 10px;
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  border: 2px solid yellow;
`;
export const CameraIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const FormItem = styled.div`
  width: 70%;
  max-width: 400px;
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  background-color: white;
  border-radius: 5px;
`;
export const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  padding-right: 20px;
`;
export const IconWrap = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    color: black;
    width: 28px;
    height: 28px;
  }
`;
export const CheckBoxWrap = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  user-select: none;
`;

export const ButtonForm = styled.button`
  border: none;
  outline: none;
  text-transform: uppercase;
  border-radius: 5px;
  width: 100%;
  padding: 12px 20px;
  font-weight: bold;
`;
