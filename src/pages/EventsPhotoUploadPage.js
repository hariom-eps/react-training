import axios from 'axios';
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { isLoading } from '../services/loader';
import { notify } from '../services/react-toastify';

export default function EventsPhotoUploadPage() {
  const [MultImageSrc, setMultImageSrc] = useState([]);
  const eventId = useParams().id;

  const mutiImageFileHandler = (e) => {
    let files = e.target.files;
    let blob_urls = [];

    let data = new FormData();

    for (let index = 0; index < files.length; index++) {
      let file = files[index];
      data.append(`files[${index}]`, file);
      blob_urls.push(URL.createObjectURL(file));
    }

    setMultImageSrc(blob_urls);
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    }
    isLoading(true);

    axios.post(`http://ls.bizbybot.com/api/events/${eventId}/photos`, data, { headers: headers }).then((response) => {
      isLoading(false);
      console.log(response.data);
      notify("success", response.data.message);
    }).catch((error) => {
      console.log(error);
      isLoading(false);
      if (error.response) {
        notify("error", error.response.data.message);
      }
    })
  }
  return (
    <div className="container-fluid" >
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Events</h1>
        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>

        <Link className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          className="fas fa-download fa-sm text-white-50"></i> Add New Event</Link>
      </div>

      <div className="card shadow mb-4">
        <div className='container'>
          <div className='row'>
            <div className="mb-3">
              <label htmlFor="formFileSm" className="form-label">Upload Multiple Image</label>
              <input className="form-control form-control-sm" id="formFileSm" type="file" onChange={mutiImageFileHandler} accept="image/*" multiple />
            </div>
          </div>
          {MultImageSrc.length > 0 && <div>
            <h1>Multiple Images</h1>
            <div className='row'>
              {MultImageSrc.map((item, index) => <div key={index} className='col'><img src={item} width={200} /></div>)}
            </div>
          </div>}
        </div>
      </div>
    </div>
  )
}
