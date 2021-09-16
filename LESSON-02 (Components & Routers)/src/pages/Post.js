import React from 'react'
import { useParams,useLocation } from 'react-router'

// const Post = ({match}) => {
//     return (
//         <div>
//             <h2>Post id: {match.params.id} </h2>
//         </div>
//     )
// }

const Post = () => {
    const {id} = useParams();

    const item = new URLSearchParams(useLocation().search)
    return (
        <div>
            <h2>Post id: {id} </h2>
            <h2>Adı : {item.get(`name`)}</h2>
            <h2>Soyadı : {item.get("surname")}</h2>
        </div>
    )
}

export default Post
