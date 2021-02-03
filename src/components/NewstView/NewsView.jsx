import Article from './Article';
import s from './NewsView.module.css';

const NewstView = ({ articles, query }) => {
  return (
    <>
      <h1 className={s.heading}>Статті по запиту: {query}</h1>
      <ul className={s.articlesList}>
        {articles.map(({ title, url, urlToImage }) => (
          <Article
            key={title}
            title={title}
            url={url}
            urlToImage={urlToImage}
          />
        ))}
      </ul>
    </>
  );
};
export default NewstView;
