
import { Route } from 'react-router'
import CreateStudent from '../../pages/admin/CreateStudent';
import AdminDashboard from '../../pages/admin/AdminDashboard';

const AdminRoutes = () => {
  return (
    <>
      <Route path="create-student" element={<CreateStudent />} />
      <Route path="admin-dashboard" element={<AdminDashboard />} />
    </>
  );
}

export default AdminRoutes
