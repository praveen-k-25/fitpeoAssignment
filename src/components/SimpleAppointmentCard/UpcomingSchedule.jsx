
const UpcomingSchedule = ({upcomingSchedule}) => {
    return (
        <section className="mt-4 m-2 space-y-5 pl-3">
            <h1 className="font-bold text-lg tracking-wider --text-color">The Upcoming Schedule</h1>
            {
                upcomingSchedule.map((appointment, index) => (
                    <article key={index} className="flex flex-col gap-2">
                        <p className="text-md font-semibold">on {appointment.day}</p>
                        <section className="flex item-start gap-2 flex-wrap" >
                            {
                                appointment.schedules.map((schedule, index) => (
                                    <div key={index} className="flex flex-col gap-1 justify-between text-xs --text-color p-3 bg-[#8cadcd58] rounded-2xl hover:bg-[#8cadcdb6] cursor-pointer">
                                        <p className="flex gap-7">
                                            <span className="">{schedule.reason}</span>
                                            <img src={schedule.img} alt="" className="w-3 h-3" />
                                        </p>
                                        <p className="">{schedule.time}</p>
                                    </div>
                                ))
                            }
                        </section>
                    </article>
                ))
            }
        </section>
    )
}

export default UpcomingSchedule