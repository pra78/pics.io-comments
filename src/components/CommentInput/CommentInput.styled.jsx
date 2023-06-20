import styled from '@emotion/styled';

export const FormStyled = styled.form`
    position: relative;
    width: 680px;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 60px;
`;

export const TextAreaStyled = styled.textarea`
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    border-color: rgb(125, 87, 46);
    background-color: #ffffff;
    font-size: 16px;
    resize: none;
`;

export const SendButtonStyled = styled.button`
    position: absolute;
    bottom: 50px;
    right: -40px;
    width: 80px;
    height: 30px;
    background-color: rgb(88, 37, 37);
    border: none;
    color: #ffffff;
    box-shadow: 6px 6px 4px 0px rgba(0,0,0, 0.2)
`;