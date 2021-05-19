import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';

import styles from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={styles.link}
          activeClassName={styles.activeLink}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;

// import React from 'react';
// import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import authSelectors from '../../redux/auth/auth-selectors';

// import styles from './Navigation.module.css';

// const Navigation = ({ isLoggedIn }) => (
//   <nav>
//     <NavLink
//       to="/"
//       exact
//       className={styles.link}
//       activeClassName={styles.activeLink}>
//       Home
//     </NavLink>

//     {isLoggedIn && (
//       <NavLink
//         to="/contacts"
//         exact
//         className={styles.link}
//         activeClassName={styles.activeLink}>
//         Contacts
//       </NavLink>
//     )}
//   </nav>
// );

// const mapStateToProps = state => ({
//   isLoggedIn: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Navigation);
