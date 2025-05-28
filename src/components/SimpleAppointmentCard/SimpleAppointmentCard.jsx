import Appointments from './Appointments';
import UpcomingSchedule from './UpcomingSchedule';
import syringe from '../../assets/syringe.svg';
import doctor from '../../assets/doctor.svg';
import heart from '../../assets/heart-solid.svg';
import eye from '../../assets/eye-solid.svg';

const SimpleAppointmentCard = ({ calenderDates, appointments }) => {

  const upcomingSchedule = [
    {
      day: "Thursday", schedules: [
        { reason: "Health Checkup Complete", img: syringe, time: "11:00 AM" },
        { reason: "Ophthamologist", img: eye, time: "14:00 PM" }
      ]
    },
    {
      day: "Saturday", schedules: [
        { reason: "Cardiologist", img: heart, time: "12:00 AM" },
        { reason: "Neurologist", img: doctor, time: "16:00 PM" }
      ]
    }
  ]

  return (
    <div className="pt-[85px] col-span-12 sm:col-span-4 lg:col-span-5 bg-blue-50 rounded-r-2xl sm:overflow-auto ">
      <div className="w-full h-full sm:overflow-auto ">
        <Appointments calenderDates={calenderDates} appointments={appointments} />
        <UpcomingSchedule upcomingSchedule={upcomingSchedule} /> 
      </div>
             
    </div>
  )
}

export default SimpleAppointmentCard