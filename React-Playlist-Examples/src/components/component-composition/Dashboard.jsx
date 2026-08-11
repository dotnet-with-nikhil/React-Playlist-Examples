import Header from "./Header";
import Sidebar from "./Sidebar";
import UserProfile from "./UserProfile";
import TaskList from "./TaskList";
import Footer from "./Footer";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="app">
      <Header className="header" />

      <div className="main">
        <aside className="sidebar">
          <Sidebar />
        </aside>

        <main className="content">
          <section className="profile">
            <UserProfile />
          </section>

          <section className="tasks">
            <TaskList />
          </section>
        </main>
      </div>

      <Footer className="footer" />
    </div>
  );
}

export default Dashboard;