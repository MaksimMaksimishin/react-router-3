import { Link, useParams, useNavigate } from "react-router-dom";

export const SinglePost = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data:posts } = props;
  const post = posts.find(item => item.id == id);

  const gobackHandler = () => {
    navigate('/blog', { state: { id } });
  }

  return (
    <div className="single-post-page">
      <h1>Single page</h1>
      <button onClick={ gobackHandler }>go back</button>
      <Link to="/blog" state={ { id } }>back to blog</Link>

      {
        post 
          ? (
            <div className="post">
              <h3 className="post__title">{ post.title }</h3>
              <p className="post__body">{ post.body }</p>
            </div>
          )
          : <h3>No post data (((</h3>
      }
      
    </div>
  );
};