import React from "react";
import container from "./data"
const PostTitle = React.createRef();
const PostText = React.createRef();

function AddPost() {
  const localPost = PostTitle.current.value;
  const localText = PostText.current.value;

  if (localPost && localText) {
    container.push({
      id: (container.length) + 1,
      postTitle: localPost,
      text: localText,
    });

    PostTitle.current.value = "";
    PostText.current.value = "";
  }
}

const Local = () => {
  return (
    <div className="create">
      <input type="text" placeholder="Название записи" ref={PostTitle} />
      <input className="input_2" type="text" placeholder="Text" ref={PostText} />
      <button onClick={AddPost}>Опубликовать</button>
    </div>
  );
};

export default Local;
