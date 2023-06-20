import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllComments } from "redux/comments/commentsOperations";
import CommentInput from "components/CommentInput/CommentInput";
import CommentsList from "components/CommentsList/CommentsList";
import { HomeWrapperSection } from "./Home.styled";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments());
    }, [dispatch])

    return (
        <HomeWrapperSection>
            <CommentsList/>
            <CommentInput />
        </HomeWrapperSection>
    )
 };

export default Home;