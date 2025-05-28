import arrow from "../../assets/arrow.svg"

const Appointments = ({ calenderDates, appointments }) => {
    return (
        <section className="mt-4 m-2">
            <div className="flex justify-between px-3">
                <p className=" font-bold tracking-wide --text-color">October 2021</p>
                <p className="flex gap-2">
                    <img src={arrow} alt="" className="w-7 h-7 rotate-180 transition-transform duration-300 bg-blue-100 hover:bg-blue-200 p-[7px] rounded-full cursor-pointer" />
                    <img src={arrow} alt="" className="w-7 h-7 transition-transform duration-300 bg-blue-100 hover:bg-blue-200 p-[7px] rounded-full cursor-pointer" />
                </p>
            </div>
            <div className="flex --text-color items-start justify-between overflow-x-auto mb-5  ">
                {
                    calenderDates.map((date, index) => {
                        return (
                            <section key={index} className={`flex flex-col items-center gap-2 p-2 px-2 py-4 mb-3 rounded-2xl ${date.selected === true ? "bg-blue-200 " : "hover:bg-blue-100"} cursor-pointer`}>
                                <div className="flex flex-col items-center">
                                    <p className="text-xs font-semibold">{date.day}</p>
                                    <p className="font-bold text-lg">{date.date}</p>
                                </div>
                                <div className="flex flex-col gap-3 text-xs">
                                    <p className={`
                                        ${date.selected === true && date.selectedTiming === date.time[0] && "bg-[#142ed8] text-white"} 
                                        ${date.selected === false && date.selectedTiming === date.time[0] && "bg-[#142ed884] text-white"} p-1 rounded-lg text-center`}>{date.time[0]}</p>

                                    <p className={`
                                        ${date.selected === true && date.selectedTiming === date.time[1] && "bg-[#142ed8] text-white"} 
                                        ${date.selected === false && date.selectedTiming === date.time[1] && "bg-[#142ed884] text-white"} p-1 rounded-lg text-center`}>{date.time[1]}</p>

                                    <p className={`
                                        ${date.selected === true && date.selectedTiming === date.time[2] && "bg-[#142ed8] text-white"} 
                                        ${date.selected === false && date.selectedTiming === date.time[2] && "bg-[#142ed884] text-white"} p-1 rounded-lg text-center`}>{date.time[2]}</p>
                                </div>
                            </section>
                        )
                    })
                }
            </div>
            <div className="flex justify-start flex-wrap gap-3 pl-3">
                {
                    appointments.map((appointment, index) => (
                        <section key={index} className={`rounded-2xl ${index % 2 == 0 ? "bg-[#142ed8] text-white" : "bg-[#b8b6e785] text-[#153352 hover:bg-[#b8b6e7d2]"} cursor-pointer p-3 text-xs flex flex-col `}>
                            <div className="flex justify-between mb-2 gap-5">
                                <p className="font-semibold text">{appointment.profession}</p>
                                <img src={appointment.img} alt="" className="w-4 h-4" />
                            </div>
                            <div className="">{appointment.time}</div>
                            <div className="">{appointment.name}</div>
                        </section>
                    ))
                }
            </div>
        </section>
    )
}

export default Appointments