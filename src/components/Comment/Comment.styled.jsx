import styled from '@emotion/styled';

export const ListItemStyled = styled.li`
    position: relative;
`;

export const ButtonStyled = styled.button`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -15px;
    right: 12px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: none;
    background-color: rgb(201, 151, 46);
`;

export const CommentBodyStyled = styled.p`
    width: 640px;
    height: 80px;
    padding: 30px 15px 15px 15px;
    background-color: rgb(252,237,137);
    color: rgb(144,140,109);
    margin: 40px auto;
`;

export const UserWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: -20px;
    left: 0px;
`;

export const UserAvatarStyled = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 24px;
    font-weight: 700;
    background-color: rgb(201, 151, 46);
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

export const UserNameStyled = styled.p`
    position: absolute;
    left: 34px;
    background-color: rgb(201, 151, 46);
    color: #000000;
    width: 150px;
    height: 24px;
    padding: 2px 20px;
`