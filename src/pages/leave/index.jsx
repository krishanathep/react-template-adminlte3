import React from 'react'
import { Link } from 'react-router-dom'

export default function eleave() {

  const leave = [
    {
      id: 1, type: "ลาป่วย", detail: "ปวดหัวตัวร้อน ไปทำงานไม่ไหวจริงๆ", start: "21/12/22", end: "23/12/22", amount: 1,status: 'อนุมัติ', created_at: "21/12/22",
    },
    {
      id: 2, type: "ลาป่วย", detail: "ปวดหัวตัวร้อน ไปทำงานไม่ไหวจริงๆ", start: "24/12/22", end: "23/12/22", amount: 2,status: 'อนุมัติ', created_at: "21/12/22",
    },
    {
      id: 3, type: "ลากิจ", detail: "ไปทำธุระเรื่องโอนบ้านให้แฟนอีกคน", start: "25/12/22", end: "23/12/22", amount: 2,status: 'ไม่อนุมัติ', created_at: "21/12/22",
    },
    {
      id: 4, type: "ลาพักร้อน", detail: "ไปต่างจังหวัดเพื่อพักผ่อนช่วงปีใหม่", start: "30/12/22", end: "23/12/22", amount: 3,status: 'ไม่อนุมัติ', created_at: "21/12/22",
    },
    {
      id: 5, type: "ลาพักร้อน", detail: "ไปต่างจังหวัดเพื่อพักผ่อนช่วงปีใหม่", start: "31/12/22", end: "23/12/22", amount: 5,status: 'รออนุมัติ', created_at: "21/12/22",
    },
    {
      id: 6, type: "ลาป่วย", detail: "ปวดหัวตัวร้อน ไปทำงานไม่ไหวจริงๆ", start: "21/12/22", end: "23/12/22", amount: 1,status: 'รออนุมัติ', created_at: "21/12/22",
    },
    {
      id: 7, type: "ลาป่วย", detail: "ปวดหัวตัวร้อน ไปทำงานไม่ไหวจริงๆ", start: "24/12/22", end: "23/12/22", amount: 2,status: 'อนุมัติ', created_at: "21/12/22",
    },
    {
      id: 8, type: "ลากิจ", detail: "ไปทำธุระเรื่องโอนบ้านให้แฟนอีกคน", start: "25/12/22", end: "23/12/22", amount: 2,status: 'อนุมัติ', created_at: "21/12/22",
    },
    {
      id: 9, type: "ลาพักร้อน", detail: "ไปต่างจังหวัดเพื่อพักผ่อนช่วงปีใหม่", start: "30/12/22", end: "23/12/22", amount: 3,status: 'อนุมัติ', created_at: "21/12/22",
    },
    {
      id: 10, type: "ลาพักร้อน", detail: "ไปต่างจังหวัดเพื่อพักผ่อนช่วงปีใหม่", start: "31/12/22", end: "23/12/22", amount: 5,status: 'อนุมัติ', created_at: "21/12/22",
    },
  ]

  return (
    <div className="content-wrapper">
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Leave list</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active">Leave</li>
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
              <div className="card-body login-card-body">
                <Link to={'/leave/create'} className='btn btn-info btn-flat mb-2 float-right'><i className="fas fa-pencil-alt"></i> Leave</Link>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Leave Type</th>
                      <th>Leave Detail</th>
                      <th>Amount</th>   
                      <th>Start Date</th>
                      <th>End Date</th> 
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leave.map((item)=>(
                      <tr>
                      <td>{item.id}</td>
                      <td>{item.type}</td>
                      <td>{item.detail}</td>
                      <td>{item.amount}</td>
                      <td>{item.start}</td>
                      <td>{item.end}</td>                   
                      <td>
                        {item.status}
                      </td>
                      <td>
                        <button className='btn btn-primary btn-flat'><i className="fas fa-edit"></i></button>{' '}
                        <Link to={'/leave/view'} className='btn btn-success btn-flat'><i className="fas fa-eye"></i></Link>{' '}
                        <button className='btn btn-danger btn-flat'><i className="fas fa-trash"></i></button>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
