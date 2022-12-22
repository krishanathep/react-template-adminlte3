import React from "react";
import { Link } from "react-router-dom";

export default function view() {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">View leave</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">View leave</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="login-card-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <table className="table table-bordered mt-5">
                          <tr>
                            <td width={"30%"}>Leave Type</td>
                            <td>ลาป่วย</td>
                          </tr>
                          <tr>
                            <td>Leave Detail</td>
                            <td>ปวดหัวตัวร้อน ไปทำงานไม่ไหวจริงๆ</td>
                          </tr>
                          <tr>
                            <td>Amount</td>
                            <td>1 วัน</td>
                          </tr>
                          <tr>
                            <td>Leave Date</td>
                            <td>21/12/22 - 22/12/22</td>
                          </tr>
                          <tr>
                            <td>Created At</td>
                            <td>21/12/22</td>
                          </tr>
                          <tr>
                            <td>Status</td>
                            <td><span className="badge badge-success">อนุมัติ</span></td>
                          </tr>
                        </table>
                      </div>
                      <div className="col-md-12">
                        <div className="float-right">
                          <Link to={'/leave'} className="btn btn-danger btn-flat">
                            Cancel
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
