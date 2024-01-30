import { Link, useNavigate, useParams } from 'react-router-dom';
import { FcFilmReel } from 'react-icons/fc';
import { BsSearchHeart } from 'react-icons/bs';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { IoPersonCircleOutline } from 'react-icons/io5';
import styles from './Header.module.css';
import { useEffect, useState } from 'react';
import HotKeywords from './HotKeywords';
import { useSearchHistory } from '../context/SearchHistoryContext';

function Header() {
  const [term, setTerm] = useState('');
  const { keyword } = useParams();
  const { addHandler, deleteHandler } = useSearchHistory();

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setTerm(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();

    if (!term.trim().length) return;

    addHandler(term);

    navigate(`/videos/${term}`);

    setTerm('');
  };

  useEffect(() => {
    setTerm(keyword || '');
  }, [keyword, deleteHandler]);

  return (
    <>
      <header className={styles.header}>
        <Link to='/' className={styles.logoBox}>
          <FcFilmReel className={styles.logoIcon} />
          <h1 className={styles.logoText}>VIDEOBUS</h1>
        </Link>

        <form action='' onSubmit={searchHandler} className={styles.searchForm}>
          <input
            onChange={changeHandler}
            value={term}
            placeholder='Search...'
            className={styles.searchInput}
          />

          <button
            type='reset'
            className={styles.resetBtn}
            onClick={() => setTerm('')}
          >
            <RiDeleteBack2Line className={styles.resetIcon} />
          </button>

          <button type='submit' className={styles.searchBtn}>
            <BsSearchHeart className={styles.searchIcon} />
          </button>

          <HotKeywords />
        </form>

        <div className={styles.loginIcon}>
          <IoPersonCircleOutline />
        </div>
      </header>
    </>
  );
}

export default Header;
