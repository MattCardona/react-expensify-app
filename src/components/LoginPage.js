import React from 'react';
import {connect} from 'react-redux';
import {startLogin, startLoginGithub} from '../actions/auth.js';

export const LoginPage = ({startLogin, startLoginGithub}) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify</h1>
        <p>Get you expenses under control.</p>
        <button className="button" onClick={startLogin}>Login with Google</button>
        <button className="button button--github" onClick={startLoginGithub}>Login with Github</button>
      </div>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startLoginGithub: () => dispatch(startLoginGithub())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);