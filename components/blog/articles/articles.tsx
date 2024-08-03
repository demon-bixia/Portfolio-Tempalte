"use client"

import type { IArticle } from "@/types/interfaces";

import { useEffect, useState } from "react";
import articlesData from "@/data/articles";

import ArticleCard from "@/components/blog/article-card/article-card";
import Pagination from "@/components/ui/pagination/pagination";
import TextInput from "@/components/ui/text-input/text-input";
import Typography from "@/components/ui/typography/typography";
import IonIcon from "@reacticons/ionicons";

import styles from "./articles.module.css";


// **** Component **** //

const Articles = () => {
  const [filterText, setFilterText] = useState("");
  const [filteredArticles, setFilteredArticles] = useState<IArticle[]>([]);
  const [paginatedArticles, setPaginatedArticles] = useState<IArticle[][]>([]);
  const [page, setPage] = useState(0);

  /**
   * Paginates articles to 7 in each page
   */
  function paginate(articles: IArticle[]) {
    let result = [];
    for (let i = 0; i < articles.length; i += 7) {
      result.push(articles.slice(i, i + 7));
    }
    return result;
  }

  const changePage = (page: number) => {
    if (page >= 0 && page < paginatedArticles.length) {
      setPage(page);
    }
  }

  /**
   * set the filter text state when the input value changes
   */
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFilterText(event.target.value);
  };

  // filter articles when the filterText changes
  useEffect(() => {
    const paginated = paginate(articlesData.filter((article) => {
      return article.title.includes(filterText) || article.description.includes(filterText);
    }))
    setPaginatedArticles(paginated);
    setFilteredArticles(paginated[page]);
  }, [filterText, page]);

  return (
    <section id="articles" className={styles.articles}>
      <div className={styles.topSection}>
        <Typography className={styles.title} variant="heading-5">Recent Articles</Typography>
        <TextInput
          className={styles.searchInput}
          placeholder="Filter articles"
          value={filterText}
          onChange={handleFilterChange}
          endAdornment={<IonIcon name="search-outline" className={styles.icon} />}
        />
      </div>

      <div className={styles.articlesList}>
        {
          filteredArticles && filteredArticles.length > 0
            ? (
              <>
                <ArticleCard className={styles.newestArticle} article={filteredArticles[0]} />
                <div className={styles.articlesGrid}>
                  {filteredArticles.slice(1).map((article) => (
                    <ArticleCard
                      article={article}
                      key={article.url}
                    />
                  ))}
                </div>
              </>
            )
            : null
        }

        {
          paginatedArticles && paginatedArticles.length > 1
            ? (<Pagination paginatedArticles={paginatedArticles} page={page} changePage={changePage} />)
            : null
        }
      </div>
    </section>
  );
};


// **** Default export **** //

export default Articles;
