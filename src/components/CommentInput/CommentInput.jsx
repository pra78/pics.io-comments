import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInput } from "redux/comments/commentsSelectors";
import { addComment, updateUserInput } from "redux/comments/commentsSlice";
import { FormStyled, SendButtonStyled, TextAreaStyled } from "./CommentInput.styled";

const CommentInput = () => { 
    const dispatch = useDispatch();
    const userInput = useSelector(selectUserInput);

    const handleSubmit = (event) => { 
        event.preventDefault();
        if (userInput) {
            dispatch(addComment({id: nanoid(), body: userInput, postId: nanoid(), user: {id: nanoid(), username: "currentuser"}}));
            dispatch(updateUserInput(""));
        }
    }
    
    const handleChange = (event) => {
        const { value } = event.target;
        dispatch(updateUserInput(value));
    }

    return (
        <FormStyled onSubmit={handleSubmit}>
            <TextAreaStyled value={userInput} onChange={handleChange} placeholder="Type your comment"/>
            <SendButtonStyled type="submit">Send</SendButtonStyled>
        </FormStyled>
    )
};

export default CommentInput;