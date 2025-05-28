import React from 'react'

const HealthStatusCards = ({ lungs, arrow, bone, tooth }) => {
    return (
        <div className="flex flex-col justify-between items-end">
            <section className="space-y-2">
                <div className="bg-blue-50 rounded-2xl p-3  flex flex-col justify-start gap-2 md:w-[150px]">
                    <div className="flex item-center justify-start gap-3">
                        <img src={lungs} alt="" className="w-7 h-7" />
                        <h3 className="text-md font-semibold ">Lungs</h3>
                    </div>
                    <p className="text-xs opacity-50 font-semibold">26 Sep 2024</p>
                    <div className="relative w-full h-[4px] rounded-full border-none bg-[#9d9d9d40]">
                        <div className="bg-amber-300 rounded-full h-full w-[80%]"></div>
                    </div>
                </div>
                <div className="bg-blue-50 rounded-2xl p-3  flex flex-col justify-start gap-2 md:w-[150px]">
                    <div className="flex item-center justify-start gap-3">
                        <img src={tooth} alt="" className="w-7 h-7" />
                        <h3 className="text-md font-semibold ">Teeth</h3>
                    </div>
                    <p className="text-xs opacity-50 font-semibold">26 Sep 2024</p>
                    <div className="relative w-full h-[4px] rounded-full border-none bg-[#9d9d9d40]">
                        <div className="bg-red-300 rounded-full h-full w-[80%]"></div>
                    </div>
                </div>
                <div className="bg-blue-50 rounded-2xl p-3  flex flex-col justify-start gap-2 md:w-[150px]">
                    <div className="flex item-center justify-start gap-3">
                        <img src={bone} alt="" className="w-7 h-7" />
                        <h3 className="text-md font-semibold ">Bone</h3>
                    </div>
                    <p className="text-xs opacity-50 font-semibold">26 Sep 2024</p>
                    <div className="relative w-full h-[4px] rounded-full border-none bg-[#9d9d9d40]">
                        <div className="bg-violet-300 rounded-full h-full w-[80%]"></div>
                    </div>
                </div>
            </section>
            <span className="text-xs opacity-50 text-left flex items-center gap-1">
                Details 
                <img src={arrow} alt="" className="w-2 h-2" />
            </span>
        </div>
    )
}

export default HealthStatusCards