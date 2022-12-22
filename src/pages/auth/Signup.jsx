import React from "react";
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div class="hold-transition register-page">
    <div className="register-box">
      <div className="register-logo">
        <a href="../../index2.html">
          <b>Admin</b>LTE
        </a>
      </div>
      <div className="card">
        <div className="card-body register-card-body">
          <p className="login-box-msg">Register a new membership</p>
          <form action="../../index.html" method="post">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Full name"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-user" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Retype password"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                {/* <div className="icheck-primary">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="terms"
                    defaultValue="agree"
                  />
                  <label htmlFor="agreeTerms">
                    I agree to the <a href="#">terms</a>
                  </label>
                </div> */}
              </div>
              <div className="col-4">
                <button type="submit" className="btn btn-info btn-flat btn-block">
                  Register
                </button>
              </div>
            </div>
          </form>
          <Link to={'/signin'} className="text-center">
            I already have a membership
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}
