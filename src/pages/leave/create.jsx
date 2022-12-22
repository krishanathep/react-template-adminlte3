import React,{useState} from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function create() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Create leave</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Create leave</li>
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
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="">Leave Type</label>
                        <select className="form-control">
                          <option>ลาป่วย</option>
                          <option>ลากิจ</option>
                          <option>ลากิจหักเงิน</option>
                          <option>ลาพักร้อน</option>
                          <option>ลาออก</option>
                          <option>ลามะ</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="">Leave Detail</label>
                        <textarea
                          className="form-control"
                          name=""
                          id=""
                          cols="35"
                          rows="3"
                          placeholder="รายละเอียดวันลา"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="">Leave Amount</label>
                        <input className="form-control" type="number" placeholder="จำนวนวันลา" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="">Start Date</label>
                        <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="">End Date</label>
                        <DatePicker className="form-control" selected={endDate} onChange={(date) => setEndDate(date)} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="float-right">
                        <button
                          onClick={() => alert("เพิ่มข้อมูลเรียบแล้วครับ")}
                          className="btn btn-primary btn-flat"
                        >
                          Submit
                        </button>{" "}
                        <Link to={"/leave"} className="btn btn-danger btn-flat">
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
  );
}
