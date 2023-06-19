import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllComments } from "redux/comments/commentsOperations";
import CommentInput from "components/CommentInput/CommentInput";
import CommentsList from "components/CommentsList/CommentsList";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments());
    }, [dispatch])

    return (
        <>
            <CommentsList/>
            <CommentInput />
        </>
    )
 };

export default Home;