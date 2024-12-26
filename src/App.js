import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import DashboardLayout from './components/layout/DashboardLayout';
import ReportsPage from './pages/ReportsPage';
import PaymentsPage from './pages/PaymentsPage';
import OrderPage from './pages/OrderPage';
import UsersPage from './pages/UsersPage';
import EmployessPage from './pages/EmployessPage';
import EventsPage from './pages/EventsPage';
import LoginPage from './pages/LoginPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastExamplePage from './pages/ToastExamplePage';
import CustomLoader from './components/CustomLoader';
import EventsPhotoUploadPage from './pages/EventsPhotoUploadPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/reports' element={<ReportsPage />} />
            <Route path='/payments' element={<PaymentsPage />} />
            <Route path='/orders' element={<OrderPage/>} />
            <Route path='/users' element={<UsersPage />} />
            <Route path='/events' element={<EventsPage />} />
            <Route path='/events-photo-upload/:id' element={<EventsPhotoUploadPage />} />
            <Route path='/employees' element={<EmployessPage />} />
            <Route path='/toast-example' element={<ToastExamplePage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
          <Route path='/login' element={<LoginPage />} />

        </Routes>
      </BrowserRouter>
      <CustomLoader />
      <ToastContainer />
    </div>
  );
}

export default App;
