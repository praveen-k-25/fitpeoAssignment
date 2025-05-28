import React from 'react'
import body from '../../assets/human_body.png';
import scan from '../../assets/scan.png';
import heart from '../../assets/heart-solid.svg';
import lungs from '../../assets/lungs.png';
import arrow from '../../assets/arrow.svg';
import bone from '../../assets/bone.png';
import tooth from '../../assets/tooth.png';
import leg from '../../assets/leg.png';
import AnatomySection from './DashboardOverview/AnatomySection';
import HealthStatusCards from './DashboardOverview/HealthStatusCards';
import Activity from './Activity';

//

const DashboardMainContent = () => {
  return (
    <div className="pt-[85px] col-span-12 sm:col-span-7 lg:col-span-5 p-4 bg-white flex flex-col justify-between">
      <section className="">
        <div className="flex justify-between items-center px-2">
          <h2 className="text-xl font-semibold ">Dashboard</h2>
          <div className="flex gap-2 items-center text-xs opacity-50 cursor-pointer">
            <span className="">This Week </span>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-2 h-2' viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
          </div>
        </div>
        <article id='anotomy' className="my-3 flex justify-around ">
          <AnatomySection
            body={body}
            scan={scan}
            heart={heart}
            leg={leg}
          />
          <HealthStatusCards
            lungs={lungs}
            arrow={arrow}
            bone={bone}
            tooth={tooth}
          />
        </article>
      </section>
      <section className="">
        <Activity />
      </section>
    </div>
  )
}

export default DashboardMainContent;