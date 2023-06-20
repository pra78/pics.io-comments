import Comment from "components/Comment/Comment";
import { useSelector } from "react-redux";
import { selectComments } from "redux/comments/commentsSelectors";
import { CommentsListStyled } from "./CommentsList.styled";

const CommentsList = () => {
    const comments = useSelector(selectComments);

    return (
        <CommentsListStyled>
            {comments.map((commentItemProps) => (
                <Comment key={commentItemProps.id} {...commentItemProps}/>
            ))}
        </CommentsListStyled>
    )
};

export default CommentsList;