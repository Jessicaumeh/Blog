// navigation between routes in a React application.
import { Link } from 'react-router-dom';

// articles.
const ArticleList = ({articles}) => {
    return(
    <>
    {articles.map(article => (

        // Clickable link
            <Link  key={article.name} className="article-list-item" to={`/articles/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0,150)}...</p>
            </Link>
        ))}
    </>
    );
}
 //exporting
export default ArticleList;