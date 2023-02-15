import { Outlet } from "react-router-dom";
import DashboardLayout from "../layout/dashboarLayout";

export default function Root() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}