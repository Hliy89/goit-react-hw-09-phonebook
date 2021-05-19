import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import authSelectors from '../../redux/auth/auth-selectors';

import styles from './AppBar.module.css';

const AppBar = () => {
  const isLogIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header className={styles.header}>
      <Navigation />
      {isLogIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;

// import React from 'react';
// import { connect } from 'react-redux';
// import Navigation from '../Navigation/Navigation';
// import UserMenu from '../UserMenu/UserMenu';
// import AuthNav from '../AuthNav/AuthNav';
// import authSelectors from '../../redux/auth/auth-selectors';

// import styles from './AppBar.module.css';

// const AppBar = ({ isAuthenticated }) => (
//   <header className={styles.header}>
//     <Navigation />
//     {isAuthenticated ? <UserMenu /> : <AuthNav />}
//   </header>
// );

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(AppBar);
