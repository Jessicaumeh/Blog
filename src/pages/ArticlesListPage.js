// Importing components
import ArticleList from '../components/ArticlesList';
// Importing data
import articles from './article-content';

const ArticleListPage = () => {
    return( 
        <>
        <h1>Articles</h1>
        <ArticleList articles={articles} />
        </>
        );
}
//exporting
export default ArticleListPage;