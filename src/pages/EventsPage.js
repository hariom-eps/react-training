import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { notify } from '../services/react-toastify';
import { isLoading } from '../services/loader';
import { apiUrl } from '../services/helper';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

export default function EventsPage() {
  const [events, setEvents] = useState(null);
  const navigate = useNavigate();

  const getEventList = () => {
    isLoading(true);
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    }
    axios.get(`${apiUrl}/api/events`, { headers: headers }).then((response) => {
      isLoading(false);
      console.log(response.data.data);
      setEvents(response.data.data);
    }).catch((error) => {
      console.log(error);
      isLoading(false);
      if (error.response) {
        notify("error", error.response.data.message);
        if (error.response.data.message == "Unauthorized") {
          navigate('/login');
        }
      }
    })
  }

  useEffect(() => {
    getEventList();
  }, []);


  const downloadPdf = () => {
    html2canvas(document.getElementById('dataTable')).then(canvas => {
      const doc = new jsPDF();
      const img = canvas.toDataURL("image/png");
      doc.addImage(img, "PNG", 10, 100, 12, 15);
      doc.save("events.pdf");
    });
}

  return (
    <div className="container-fluid" >
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Events</h1>
        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" onClick={() => downloadPdf()}><i
          className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>

        <Link className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          className="fas fa-download fa-sm text-white-50"></i> Add New Event</Link>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            {events ? <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>City</th>
                  <th>Start Datetime</th>
                  <th>Organiser</th>
                  <th>Has Ended</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>City</th>
                  <th>Start Datetime</th>
                  <th>Organiser</th>
                  <th>Has Ended</th>
                  <th>Action</th>

                </tr>
              </tfoot>
              <tbody>
                {events.map((event, index) =>
                  <tr key={index}>
                    <td>{event.id}</td>
                    <td>{event.title}</td>
                    <td>{event.price}</td>
                    <td>{event.city}</td>
                    <td>{event.start_datetime}</td>
                    <td>{event.organiser.name}</td>
                    <td>{event.has_ended ? 'Yes' : 'No'}</td>
                    <td>
                      <Link to={`/events-photo-upload/${event.id}`}>Upload Photos</Link>
                    </td>
                  </tr>
                )}
              </tbody>
            </table> : null}
          </div>
        </div>
      </div>

    </div>
  )
}
