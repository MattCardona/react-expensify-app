// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuses code
// Render hijacking
// Prop manipulation

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
      <div>
        {props.isAdmin && <p>This is private info. Please don't share.</p>}
        <WrappedComponent {...props}/>
      </div>
    )
};

const requireAuthenication = (InnerComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <InnerComponent {...props}/> : <h1>Sorry you do not have the authorization to see the secret sauce.</h1>}
    </div>
    )
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthenication(Info);
// ReactDOM.render(<AdminInfo isAdmin={true} info="Here are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Here are the details" />, document.getElementById('app'));