import { useDispatch } from "react-redux";
import { deleteComment } from "redux/comments/commentsSlice";
import { ButtonStyled, CommentBodyStyled, ListItemStyled, UserAvatarStyled, UserNameStyled, UserWrapperStyled } from "./Comment.styled";

const Comment = ({ id, body, user }) => {
    const dispatch = useDispatch();

    return (
        <ListItemStyled key={id}>
            <UserWrapperStyled>
                <UserAvatarStyled>{user.username.slice(0, 1).toUpperCase()}</UserAvatarStyled>
                <UserNameStyled>{user.username}</UserNameStyled>
            </UserWrapperStyled>
            <CommentBodyStyled>{body}</CommentBodyStyled>
            <ButtonStyled type="button" onClick={() => dispatch(deleteComment(id))}>
                <svg fill="#000000" width="16px" height="16px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                    <path d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z" />
                </svg>
            </ButtonStyled>
        </ListItemStyled>
    )
};

export default Comment;