import { Link, useNavigate, useParams } from 'react-router-dom';
import { FcFilmReel } from 'react-icons/fc';
import { BsSearchHeart } from 'react-icons/bs';
import { IoPersonCircleOutline } from 'react-icons/io5';
import styles from './Header.module.css';
import { useEffect, useState } from 'react';
import HotKeywords from './HotKeywords';

function Header({ onAdd, onDelete }) {
  const [term, setTerm] = useState('');
  const { keyword } = useParams();

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setTerm(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();

    if (!term.trim().length) return;

    onAdd(term);

    navigate(`/videos/${term}`);

    setTerm('');
  };

  useEffect(() => {
    setTerm(keyword || '');
  }, [keyword, onDelete]);

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
