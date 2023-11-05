const Post = (props) => {
    return (

        <div className="Post">
            <div className="name-container">
                <h1>{props.name}</h1>
            </div>
            <div className="second_part">
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default Post;
