import Sidebar from "./components/Sidebar";
import Profile from "./sections/Profile";

export default function AdminProfile() {
  return (
    <div className="flex flex-col sm:flex-row">
      <Sidebar />
      <div>
        <Profile />
      </div>
    </div>
  );
}
