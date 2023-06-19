import Comment from "components/Comment/Comment";
import { useSelector } from "react-redux";
import { selectComments } from "redux/comments/commentsSelectors";


const CommentsList = () => {
    const comments = useSelector(selectComments);

    return (
        <ul>
            {comments.map((commentItemProps) => (
                <Comment key={commentItemProps.id} {...commentItemProps}/>
            ))}
        </ul>
    )
};

export default CommentsList;