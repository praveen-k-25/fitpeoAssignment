import React from 'react'

const Activity = () => {
  return (
    <div className="bg-blue-100 rounded-2xl p-1 mx-4 px-3 py-2 flex flex-col items-center ">
          <div className="w-full flex justify-between px-2">
            <h3 className="font-semibold text-sm --text-color">Activity</h3>
            <p className="text-xs opacity-50">3 Appointments on this week</p>
          </div>
          <div className="flex gap-3 items-center md:m-2">
            <section className="flex flex-col items-center">
              <div className="h-[8vh] flex gap-2 sm:gap-1 md:gap-2 relative">
                <div className="h-full w-[3px] bg-[#d3d3d3a0] rounded-full"></div>
                <div className="h-[50%] mt-2 w-[3px] bg-[#56c8c8] rounded-full"></div>
                <div className="h-[50%] mt-4 w-[3px] bg-[#d3d3d3a0] rounded-full"></div>
                <div className="h-[50%] mt-6 w-[3px] bg-[#d3d3d3a0] rounded-full"></div>
              </div>
              <p className="text-xs font-bold opacity-50">Mon</p>
            </section>            
            <section className="flex flex-col items-center">
              <div className="h-[8vh] flex gap-2 sm:gap-1 md:gap-2 relative">
                <div className="h-full w-[3px] flex flex-col gap-1 rounded-full">
                  <div className="h-[45%] w-full bg-[#56c8c8] rounded-full"></div>
                  <div className="h-[45%] w-full bg-[#413176f2] rounded-full"></div>
                </div>
                <div className="h-[50%] mt-2 w-[3px] bg-[#413176f2] rounded-full"></div>
                <div className="h-[50%] mt-4 w-[3px] bg-[#d3d3d3a0] rounded-full"></div>
                <div className="h-[50%] mt-6 w-[3px] bg-[#56c8c8] rounded-full"></div>
              </div>
              <p className="text-xs font-bold opacity-50">Tues</p>
            </section>            
            <section className="flex flex-col items-center">
              <div className="h-[8vh] flex gap-2 sm:gap-1 md:gap-2 relative">
                <div className="h-full w-[3px] flex flex-col gap-1 rounded-full">
                  <div className="h-[45%] w-full bg-[#d3d3d3a0] rounded-full"></div>
                  <div className="h-[45%] w-full bg-[#d3d3d3a0] rounded-full"></div>
                </div>
                <div className="h-[50%] mt-2 w-[3px] bg-[#413176f2] rounded-full"></div>
                <div className="h-[50%] mt-4 w-[3px] bg-[#d3d3d3a0] rounded-full"></div>
                <div className="h-[50%] mt-6 w-[3px] bg-[#d3d3d3a0] rounded-full"></div>
              </div>
              <p className="text-xs font-bold opacity-50">Wed</p>
            </section>            
            <section className="flex flex-col items-center">
              <div className="h-[8vh] flex gap-2 sm:gap-1 md:gap-2 relative">
                <div className="h-full w-[3px] bg-[#56c8c8] rounded-full"></div>
                <div className="h-[50%] mt-2 w-[3px] bg-[#d3d3d3a0] rounded-full"></div>
                <div className="h-[50%] mt-4 w-[3px] bg-[#413176f2] rounded-full"></div>
                <div className="h-[50%] mt-6 w-[3px] bg-[#d3d3d3a0] rounded-full"></div>
              </div>
              <p className="text-xs font-bold opacity-50">Thur</p>
            </section>            
            <section className="flex flex-col items-center">
              <div className="h-[8vh] flex gap-2 sm:gap-1 md:gap-2 relative">
                <div className="h-full w-[3px] flex flex-col gap-1 rounded-full">
                  <div className="h-[45%] w-full bg-[#56c8c8] rounded-full"></div>
                  <div className="h-[45%] w-full bg-[#413176f2] rounded-full"></div>
                </div>
                <div className="h-[50%] mt-2 w-[3px] bg-[#56c8c8] rounded-full"></div>
                <div className="h-[50%] mt-4 w-[3px] bg-[#d3d3d3a0] rounded-full"></div>
                <div className="h-[50%] mt-6 w-[3px] bg-[#413176f2] rounded-full"></div>
              </div>
              <p className="text-xs font-bold opacity-50">Fri</p>
            </section>            
            <section className="flex flex-col items-center">
              <div className="h-[8vh] flex gap-2 sm:gap-1 md:gap-2 relative">
                <div className="h-full w-[3px] bg-[#d3d3d3a0] rounded-full"></div>
                <div className="h-[50%] mt-2 w-[3px] bg-[#d3d3d3a0] rounded-full"></div>
                <div className="h-[50%] mt-4 w-[3px] bg-[#56c8c8] rounded-full"></div>
                <div className="h-[50%] mt-6 w-[3px] bg-[#413176f2] rounded-full"></div>
              </div>
              <p className="text-xs font-bold opacity-50">Sat</p>
            </section>            
            <section className="flex flex-col items-center">
              <div className="h-[8vh] flex gap-2 sm:gap-1 md:gap-2 relative">
                <div className="h-full w-[3px] flex flex-col gap-1 rounded-full">
                  <div className="h-[45%] w-full bg-[#56c8c8] rounded-full"></div>
                  <div className="h-[45%] w-full bg-[#413176f2] rounded-full"></div>
                </div>
                <div className="h-[50%] mt-2 w-[3px] bg-[#d3d3d3a0] rounded-full"></div>
                <div className="h-[50%] mt-4 w-[3px] bg-[#56c8c8] rounded-full"></div>
                <div className="h-[50%] mt-6 w-[3px] bg-[#413176f2] rounded-full"></div>
              </div>
              <p className="text-xs opacity-50 font-bold">Sun</p>
            </section>            
          </div>
        </div>
  )
}

export default Activity