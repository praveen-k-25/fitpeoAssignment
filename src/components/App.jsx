import DashboardMainContent from "./DashboardMainContent/DashboardMainContent"
import Header from "./Header"
import Sidebar from "./Sidebar"
import SimpleAppointmentCard from "./SimpleAppointmentCard/SimpleAppointmentCard";
import tooth from "../assets/tooth.svg";
import handShake from "../assets/handshake.svg";

function App() {

  const calenderDates = [
    { day: "Mon", date: "25", time: ["10:00", "11:00", "12:00"], selected: false },
    { day: "Tues", date: "26", time: ["08:00", "09:00", "10:00"], selected: true, selectedTiming: "09:00" },
    { day: "Wed", date: "27", time: ["12:00", "-", "13:00"], selected: false },
    { day: "Thur", date: "28", time: ["10:00", "11:00", "-"], selected: false, selectedTiming: "11:00" },
    { day: "Fri", date: "29", time: ["-", "14:00", "16:00"], selected: false },
    { day: "Sat", date: "30", time: ["13:00", "14:00", "15:00"], selected: false, selectedTiming: "14:00" },
    { day: "Sun", date: "31", time: ["09:00", "10:00", "11:00"], selected: false, selectedTiming: "11:00" },
  ];

  const appointments = [
    { profession: "Dentist", img: tooth, time: "09:00 - 11:00", name: "Dr. Cameron Williamson" },
    { profession: "Physiotherapy Appointment", img: handShake, time: "11:00 - 12:00", name: "Dr. Kevin Djones" },
  ]

  /* md:rounded-4xl overflow-hidden bg-white absolute md:inset-3 p-1 flex  lg:grid lg:grid-cols-12 */
  return (
    <div className="bg-blue-100 p-2 relative w-[100vw] h-screen overflow-x-hidden md:overflow-hidden">
      <div className="grid grid-cols-12 bg-white absolute inset-0 sm:inset-1 md:inset-3 sm:rounded-3xl p-1 shadow-[0_0_30px_#c9c9c9] ">
        <Header />
        <Sidebar />
        <DashboardMainContent />
        <SimpleAppointmentCard
          calenderDates={calenderDates}
          appointments={appointments}
        />
      </div>
    </div>
  )
}

export default App
