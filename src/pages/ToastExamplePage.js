import React from 'react'
import { toast } from 'react-toastify'
import { notify } from '../services/react-toastify'
import { isLoading } from '../services/loader';

export default function ToastExamplePage() {
  // notify('success', 'Hello');
  const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Toasts</h1>
        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
      </div>
      <div>
        <h3>Toast with Hook</h3>
        <button className='btn btn-primary mx-2' onClick={() => toast.promise(resolveAfter3Sec,
          {
            pending: 'Promise is pending',
            success: 'Promise resolved 👌',
            error: 'Promise rejected 🤯'
          })}>Promise</button>
        <button className='btn btn-primary mx-2' onClick={() => toast.info('Hello!')}>Info</button>
        <button className='btn btn-success mx-2' onClick={() => toast.success('Hello!')}>Success</button>
        <button className='btn btn-warning mx-2' onClick={() => toast.warning('Hello!')}>Warning</button>
        <button className='btn btn-danger mx-2' onClick={() => toast.error('Hello!')}>Error</button>
        <button className='btn btn mx-2' onClick={() => toast('Hello!', {
          position: "top-center"
        })}>Default</button>

        <hr></hr>
        <h3>Toast with custom Hook</h3>
        <button className='btn btn-primary mx-2' onClick={() => notify('info', 'Hello!')}>Info</button>
        <button className='btn btn-success mx-2' onClick={() => notify('success', 'Hello!')}>Success</button>
        <button className='btn btn-warning mx-2' onClick={() => notify('warning', 'Hello!')}>Warning</button>
        <button className='btn btn-danger mx-2' onClick={() => notify('error', 'Hello!')}>Error</button>
        <button className='btn btn mx-2' onClick={() => notify('Hello!')}>Default</button>

        <h3>Custom Loader</h3>
        <button className='btn btn-info mx-2' onClick={() => { isLoading(true); setTimeout(() => isLoading(false), 5000) }}>Show Loader</button>
      </div>
    </div>
  )
}
