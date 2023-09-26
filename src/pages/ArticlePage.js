import { useParams } from 'react-router-dom';
import articles from './article-content';

// Define component named
const ArticlePage =() => {
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);

    return(        
        // Loop paragraphs and display
        <>
        <h1>{article.title}</h1>
        {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
        </>
        );
}
//exporting
export default ArticlePage;