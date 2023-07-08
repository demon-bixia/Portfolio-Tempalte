import Button from '@/components/ui/button/button';
import IonIcon from '@reacticons/ionicons';
import styles from './pagination.module.css';


// **** Component **** //

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <ul className={styles.pages}>
        <li>
          <Button className={styles.pageLink} color='white' href='#'>
            <IonIcon name='chevron-back-outline' className={styles.icon} />
          </Button>
        </li>
        <li><Button className={styles.pageLink} color='white' disabled>1</Button></li>
        <li><Button className={styles.pageLink} color='white' href='#'>2</Button></li>
        <li><Button className={styles.pageLink} color='white' href='#'>3</Button></li>
        <li>
          <Button className={styles.pageLink} color='white' href='#'>
            <IonIcon name='chevron-forward-outline' className={styles.icon} />
          </Button>
        </li>
      </ul>
    </div>
  );
};


// **** Default export **** //

export default Pagination;
