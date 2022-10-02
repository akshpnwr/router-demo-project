import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <NavLink to='/quotes' className={classes.active}>
            All Quotes
          </NavLink>
          <NavLink to='/new-quote' className={classes.active}></NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
