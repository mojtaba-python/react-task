import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";


const Posts = () => {

    const [getId, setId] = useState({
        posts: [
            {
                id: 1,
                title: 'Show Post 1'
            },
            {
                id: 2,
                title: 'Show Post 2'
            },
            {
                id: 3,
                title: 'Show Post 3'
            },
            {
                id: 4,
                title: 'Show Post 4'
            }
        ],
    })

    return (
        <div className="container" style={{ textAlign: '-webkit-center'}}>
            <div className="div_body">
                
                    <div className="col-5 col-lg-3  col-md-4 tabs">
                        <div className="side_bar">

                            {getId.posts.map(post => (
                                <NavLink
                                    className="link_side_bar py-2"
                                    to={`/posts/${post.id}`}
                                    key={post.id}>
                                    {post.title}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className="col-7 col-lg-6 col-md-6 ">
                        <Outlet />
                    </div>
               

            </div>
        </div>
    )
}
export default Posts;