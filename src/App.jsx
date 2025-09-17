import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing_page from './Pages/Landing_page';
import Patient_dashboard from './Pages/Patient_dashboard';
import DoctorDashboard from './Pages/Doctor_dashboard.jsx';
import Admin_dashboard from './Pages/Admin_dashboard';
import Worker_dashboard from './Pages/Worker_dashboard';

// Admin components
import Analytics from './Components/Admin_compo/Analytics.jsx';
import User_Management from './Components/Admin_compo/User_Management.jsx';

// Patient components
import Patient_profile from './Components/Patient_compo/Patient_profile';
import Health_record from './Components/Patient_compo/Health_record.jsx';
import AI_insight from './Components/Patient_compo/AI_insight.jsx';
import Exports_reports from './Components/Patient_compo/Exports_report.jsx';

// Doctor components
import Patient_search from './Components/Doctor_compo/Patient_search';
import Patient_History from './Components/Doctor_compo/Patient_history.jsx';
import Exports_Reports from './Components/Doctor_compo/Exports_reports.jsx';
// Worker components
import Register_patient from './Components/Worker_compo/Register_patient';
import Add_update_patient from './Components/Worker_compo/Add_update_patient.jsx';
import Patient_list from './Components/Worker_compo/Patient_list.jsx';
import Sync_patient from './Components/Worker_compo/Sync_patient.jsx';  

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route redirects to landing page */}
        <Route path="/" element={<Landing_page />} />
        
        {/* Patient Dashboard Routes */}
        <Route path="/patient" element={<Patient_dashboard />}>
          <Route index element={<Navigate to="profile" />} />
          <Route path="profile" element={<Patient_profile />} />
          <Route path="health-records" element={<Health_record />} />
          <Route path="ai-insight" element={<AI_insight />} />
          <Route path="exports-reports" element={<Exports_reports />} />
        </Route>
        
        {/* Doctor Dashboard Routes */}
        <Route path="/doctor" element={<DoctorDashboard />}>
          <Route index element={<Navigate to="patient-search" />} />
          <Route path="patient-search" element={<Patient_search />} />
          <Route path="patient-history" element={<Patient_History />} />
          <Route path="exports-reports" element={<Exports_Reports />} />
        </Route>
        
        {/* Admin Dashboard Routes */}
        <Route path="/admin" element={<Admin_dashboard />}>
          <Route index element={<Navigate to="analytics" />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="user-management" element={<User_Management />} />
        </Route>
        
        {/* Worker Dashboard Routes */}
        <Route path="/worker" element={<Worker_dashboard />}>
          <Route index element={<Navigate to="register" />} />
          <Route path="register" element={<Register_patient />} />
          <Route path="update-patient" element={<Add_update_patient />} />
          <Route path="patient-list" element={<Patient_list />} />
          <Route path="sync" element={<Sync_patient />} />
        </Route>
        
        {/* Catch all route - redirect to landing page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;