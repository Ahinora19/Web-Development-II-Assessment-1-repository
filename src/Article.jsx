
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

function Article() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/assets/text-content.md')
      .then((response) => response.text())
      .then((text) => {
        const articleOnly = text.split('## The Author')[0];
        setContent(articleOnly);
      })
      .catch((error) => console.error(error));
  }, []);

  const sections = content.split('## Heading');
  const introduction = sections[0] || '';
  const columns = sections.slice(1);

  return (
    <article className="article-content">
      <div className="article-introduction">
        
<h1>Erased Tapes:</h1>

<h2 className="article-subtitle">
  Exploring the Sonic Frontier
</h2>

<ReactMarkdown>
  {introduction.replace(
    '# Erased Tapes: Exploring the Sonic Frontier',
    ''
  )}
</ReactMarkdown>

      </div>

      <div className="original-article-columns">
        {columns.map((section, index) => (
          <section key={index}>
            <ReactMarkdown>
              {`## Heading\n${section}`}
            </ReactMarkdown>
          </section>
        ))}
      </div>
    </article>
  );
}

export default Article;
