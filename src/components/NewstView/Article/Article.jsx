import s from './Article.module.css';

const Article = ({ title, url, urlToImage }) => {
  return (
    <li className={s.article}>
      <h2 className="article-heading">{title}</h2>
      <a href={url}>
        <img src={urlToImage} alt="" width="300" />
      </a>
    </li>
  );
};

export default Article;
