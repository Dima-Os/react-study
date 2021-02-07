import Article from './Article';
import s from './NewsView.module.css';

const NewstView = ({ articles }) => {
  return (
    <>
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
