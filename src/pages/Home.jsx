import { Link,useNavigate } from "react-router-dom";


function Home() {
  const naviagte= useNavigate();

  function navigateHandler(){
    naviagte('/products');
  }
  return (
    <div>
      <h1>My Home Page</h1>
      <p>
       Go to <Link to="/products">List of products</Link>
      </p>
      <button onClick={navigateHandler}>Navigate</button>
    </div>
  )
}

export default Home;
