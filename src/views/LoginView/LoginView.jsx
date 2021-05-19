import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

import { initialState } from './initialState';

import styles from './LoginView.module.css';

const LoginView = () => {
  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const asyncAction = authOperations.logIn(formData);
    dispatch(asyncAction);
    setFormData({ ...initialState });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <label className={styles.label}>
          Mail
          <input
            className={styles.formInput}
            type="email"
            name="email"
            value={formData.email}
            placeholder="enter email"
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          Password
          <input
            className={styles.formInput}
            type="password"
            name="password"
            value={formData.password}
            placeholder="enter password"
            onChange={handleChange}
          />
        </label>

        <button className={styles.btn} type="submit">
          LOG IN
        </button>
      </form>
    </div>
  );
};

export default LoginView;

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import authOperations from '../../redux/auth/auth-operations';

// import styles from './LoginView.module.css';

// class LoginView extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onLogin(this.state);
//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { email, password } = this.state;

//     return (
//       <div>
//         <form
//           onSubmit={this.handleSubmit}
//           className={styles.form}
//           autoComplete="off">
//           <label className={styles.label}>
//             Mail
//             <input
//               className={styles.formInput}
//               type="email"
//               name="email"
//               value={email}
//               placeholder="enter email"
//               onChange={this.handleChange}
//             />
//           </label>

//           <label className={styles.label}>
//             Password
//             <input
//               className={styles.formInput}
//               type="password"
//               name="password"
//               value={password}
//               placeholder="enter password"
//               onChange={this.handleChange}
//             />
//           </label>

//           <button className={styles.btn} type="submit">
//             LOG IN
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginView);
