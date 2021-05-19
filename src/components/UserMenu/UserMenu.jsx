import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';

import styles from './UserMenu.module.css';

const UserMenu = () => {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <span className={styles.name}>
        <span className={styles.welcome}>Welcome,</span> {name}
      </span>
      <button className={styles.btn} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;

// import React from 'react';
// import { connect } from 'react-redux';
// import authSelectors from '../../redux/auth/auth-selectors';
// import authOperations from '../../redux/auth/auth-operations';

// import styles from './UserMenu.module.css';

// const UserMenu = ({ avatar, name, onLogout }) => (
//   <div className={styles.container}>
//     <img src={avatar} alt="" width="32" className={styles.avatar} />
//     <span className={styles.name}>
//       <span className={styles.welcome}>Welcome,</span> {name}
//     </span>
//     <button className={styles.btn} type="button" onClick={onLogout}>
//       Logout
//     </button>
//   </div>
// );

// const mapStateToProps = state => ({
//   name: authSelectors.getUserName(state),
//   avatar: null,
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
