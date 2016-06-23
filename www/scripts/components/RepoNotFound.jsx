import React from 'react';
import Link from 'react-router/lib/Link';

export class RepoNotFound extends React.Component {
  render() {
    return (
      <div>
        <h2>404</h2>
        <p>
          It looks like you've taken a wrong turn somewhere.
        </p>
        <p>
          Please check the URL, or go back and try again.
        </p>
        <div className="card">
          <Link to="/info">
            <div className="header">
              <h3 className="card-title">Back to Information Repository</h3>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
