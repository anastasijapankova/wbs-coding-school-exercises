import { useParams } from "react-router-dom"
import { posts } from "./bloglist"

export function BlogPost() {

    const { Id } = useParams()

    console.log(Id)
    console.log(posts)

    return (

        < div className="App">
            <h1>Welcome to BlogPost page</h1>
            <p>You are on the BlogPost page {posts[Id - 1].id}</p>

        </div >
    )
}