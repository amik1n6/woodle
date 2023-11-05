import Post from './Post';
import container from './data';

const Posts = () => {
  let postElement = container.map(p => <Post name ={p.postTitle} date ={p.id} text= {p.text}/>)
  return (
    <div className='post_container'>
      {postElement}
    </div>
  );
}


export default Posts;
