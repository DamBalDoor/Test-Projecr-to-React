import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useFertching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading] = useFertching( async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })
    const [fetchComments, isComLoading] = useFertching( async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            {isLoading
                ? <Loader/>
                : <div style={{width: '800px'}}>
                    <h2>{post.id}. {post.title}</h2>
                    <p>{post.body}</p>
                  </div>
            }
            <br/><h1>
                Комментарии:
            </h1>
            {isComLoading
                ? <Loader/>
                : <div style={{width: '800px'}}>
                    {comments.map(comm =>
                        <div key={comm.id} style={{marginTop: 15}}>
                            <h3>{comm.email}</h3>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;