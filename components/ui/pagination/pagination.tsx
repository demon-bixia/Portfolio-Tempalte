import Button from "@/components/ui/button/button";
import { IArticle } from "@/types/interfaces";
import IonIcon from "@reacticons/ionicons";
import styles from "./pagination.module.css";


// **** Types **** //

interface IProps {
  paginatedArticles: IArticle[][];
  page: number;
  changePage: (page: number) => void;
}


// **** Component **** //

const Pagination = ({ paginatedArticles, page, changePage }: IProps) => {
  const handlePageChange = (page: number) => changePage(page);

  return (
    <div className={styles.pagination}>
      <ul className={styles.pages}>
        <li>
          <Button onClick={() => handlePageChange(page - 1)} className={styles.pageLink} color="white">
            <IonIcon name="chevron-back-outline" className={styles.icon} />
          </Button>
        </li>
        {paginatedArticles.map((_articles, index) => (
          <li key={index}>
            <Button
              onClick={() => handlePageChange(index)}
              className={styles.pageLink}
              color="white"
              disabled={index === page}
            >
              {index + 1}
            </Button>
          </li>
        ))}
        <li>
          <Button onClick={() => handlePageChange(page + 1)} className={styles.pageLink} color="white" >
            <IonIcon name="chevron-forward-outline" className={styles.icon} />
          </Button>
        </li>
      </ul>
    </div>
  );
};


// **** Default export **** //

export default Pagination;
