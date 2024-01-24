import { useNavigate } from 'react-router-dom';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { LuHistory } from 'react-icons/lu';
import styles from './SideBar.module.css';

function SideBar({ searched, onDelete }) {
  const navigate = useNavigate();

  return (
    <section className={styles.historyContainer}>
      <div className={styles.historyTitleBox}>
        <LuHistory className={styles.historyIcon} />
        <span className={styles.historyText}>History</span>
      </div>
      <ul className={styles.searched}>
        {searched?.map((keyword, idx) => {
          return (
            <li className={styles.keywordBox} key={idx}>
              <span onClick={() => navigate(`videos/${keyword}`)}>
                {keyword}
              </span>
              <RiDeleteBack2Line
                onClick={() => onDelete(keyword)}
                className={styles.deleteIcon}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default SideBar;
