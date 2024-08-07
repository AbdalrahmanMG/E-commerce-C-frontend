import { Link } from 'react-router-dom';


const PageNotFound = () => {
  return (
    <div>
        <h1>404</h1>
        <p>
            <span>Opps! Page Not Found</span>
        </p>
        <p>he page you’re looking for doesn’t exist.</p>
        <Link to={'/'}>Go Home</Link>
    </div>
  )
}

export default PageNotFound