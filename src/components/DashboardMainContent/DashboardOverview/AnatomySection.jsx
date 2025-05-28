import React from 'react'

const AnatomySection = ({body,scan,heart,leg}) => {
    return (
        <section className="relative">
            <img src={body} alt="" className="h-[330px] px-8 py-5 bg-blue-50 rounded-4xl" />
            <img src={scan} alt="" className="w-12 h-13 absolute top-[71px] right-[63px]" />
            <img src={scan} alt="" className="w-12 h-13 absolute top-[195px] right-[89px]" />
            <div className="bg-[#2e3061] flex items-center gap-2 rounded-lg p-1 absolute top-[68px] -right-[23px]">
                <img src={heart} alt="" className="w-3 h-3" />
                <span className="text-white text-[9px]">Healthy Heart</span>
            </div>
            <div className="bg-[#48e1ffac] flex items-center gap-2 rounded-lg p-1 absolute top-[180px] left-[0]">
                <img src={leg} alt="" className="w-3 h-3" />
                <span className="text-[9px]">Healthy Leg</span>
            </div>
        </section>
    )
}

export default AnatomySection