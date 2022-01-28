import '../styles/style.css';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { StyledArticle, StyledNav } from '../components/Article/Article.styled';
import { useIntersectionObserver, useHeadingsData } from '../components/Article/utils';
import ContentsTable from '../components/ContentsTable/ContentsTable';
import { StyledLayout, Sider, Content } from '../components/shared/Layout.styled';
import ReactPlayer from 'react-player';
import parse, { domToReact } from 'html-react-parser';
import { getArticleInfo } from '../redux/actions/article.actions';
import slugify from 'slugify';

const ArticlePage = () => {
  const slug = useParams();
  const article = useSelector((state) => state.article.info);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getArticleInfo(slug.article_id));
  }, [slug]);

  const TableOfContents = () => {
    const [activeId, setActiveId] = useState('');
    const { nestedHeadings } = useHeadingsData();
    useIntersectionObserver(setActiveId);
    return <ContentsTable headings={nestedHeadings} activeId={activeId} />;
  };

  const replaceHtmlWithReact = (domNode) => {
    if (!domNode.attribs) return;

    if (domNode.attribs.id === 'youtube') {
      return <ReactPlayer style={{ margin: '0 auto' }} url={domNode.attribs.href} />;
    } else if (domNode.name === 'h2') {
      return (
        <h2
          id={slugify(getText(domNode), {
            lower: true,
            remove: /[*+~.()'"!?:@]/g,
          })}
        >
          {domToReact(domNode.children, { replace: replaceHtmlWithReact })}
        </h2>
      );
    } else if (domNode.name === 'h3') {
      return (
        <h3
          id={slugify(getText(domNode), {
            lower: true,
            remove: /[*+~.()'"!?:@]/g,
          })}
        >
          {domToReact(domNode.children, { replace: replaceHtmlWithReact })}
        </h3>
      );
    }
  };

  const getText = (node) => {
    const recursor = (n) => {
      var i,
        a = '';
      if (n.nodeType !== 3) {
        if (n.childNodes)
          for (i = 0; i < n.childNodes.length; ++i) a = a.concat(recursor(n.childNodes[i]));
      } else a += n.data;
      return a;
    };
    return recursor(node);
  };

  return (
    <StyledLayout>
      <Sider article>
        <StyledNav>
          <TableOfContents />
        </StyledNav>
      </Sider>
      <Content article>
        <StyledArticle>
          <div className="container">
            <main>
              <img
                src={article?.image ? article?.image : `https://picsum.photos/800/300/?random`}
              />
              <div className="content">
                <h1>{article?.title}</h1>
                {article?.text &&
                  parse(article.text, {
                    replace: replaceHtmlWithReact,
                  })}
              </div>
            </main>
          </div>
        </StyledArticle>
      </Content>
      <Sider />
    </StyledLayout>
  );
};

export default ArticlePage;
