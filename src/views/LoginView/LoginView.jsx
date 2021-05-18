import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

import styles from './LoginView.module.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className={styles.form}
          autoComplete="off">
          <label className={styles.label}>
            Mail
            <input
              className={styles.formInput}
              type="email"
              name="email"
              value={email}
              placeholder="enter email"
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.label}>
            Password
            <input
              className={styles.formInput}
              type="password"
              name="password"
              value={password}
              placeholder="enter password"
              onChange={this.handleChange}
            />
          </label>

          <button className={styles.btn} type="submit">
            LOG IN
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
