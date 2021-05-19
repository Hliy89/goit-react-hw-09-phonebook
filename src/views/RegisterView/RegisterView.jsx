import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

import { initialState } from './initialState';

import styles from './RegisterView.module.css';

const RegisterView = () => {
  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const asyncAction = authOperations.register(formData);
    dispatch(asyncAction);
    setFormData({ ...initialState });
  };

  return (
    <>
      <div className={styles.formContainer}>
        <form
          onSubmit={handleSubmit}
          className={styles.form}
          autoComplete="off">
          <label className={styles.label}>
            Name
            <input
              className={styles.formInput}
              type="text"
              name="name"
              value={formData.name}
              placeholder="enter name"
              onChange={handleChange}
            />
          </label>

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
            SIGN UP
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterView;

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import authOperations from '../../redux/auth/auth-operations';

// import styles from './RegisterView.module.css';

// class RegisterView extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onRegister(this.state);
//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { name, email, password } = this.state;

//     return (
//       <div className={styles.formContainer}>
//         <form
//           onSubmit={this.handleSubmit}
//           className={styles.form}
//           autoComplete="off">
//           <label className={styles.label}>
//             Name
//             <input
//               className={styles.formInput}
//               type="text"
//               name="name"
//               value={name}
//               placeholder="enter name"
//               onChange={this.handleChange}
//             />
//           </label>

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
//             SIGN UP
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);
