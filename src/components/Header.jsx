import search from '../assets/magnifying-glass-solid.svg';
import searchPlus from '../assets/square-plus-solid.svg';
import bell from '../assets/bell-solid.svg';
import profile from '../assets/profile.png';
import bars from '../assets/bars.svg';

const Header = () => {
  return (
    <div className="col-span-12 fixed top-0 sm:top-3 pt-3 left-0 right-0 md:top-7 rounded-xl grid grid-cols-12 items-center sm:px-1 md:px-4 z-50 bg-white sm:bg-transparent p-2 sm:p-0">
        <section className="col-span-1 lg:col-span-2 flex justify-center items-center sm:pl-1 ">
            <img src={bars} alt="" className="sm:hidden w-6 h-6 cursor-pointer" />
            <h3 className="text-2xl m-3 hidden sm:block lg:hidden"><span className="font-bold text-[#142ed8]">H</span><span className="font-bold  text-[#030b3e]">c.</span></h3>
            <h3 className="text-3xl m-3 hidden lg:flex"><span className="font-bold text-[#142ed8]">Health</span><span className="font-bold  text-[#030b3e]">care.</span></h3>
        </section>
        <section className="col-span-9 sm:col-span-6 mx-2 lg:col-span-5 lg:mx-4">
            <div className=" border-[1px] border-[#73737339] hover:border-[#a5a5a5] rounded-xl flex items-center p-2 sm:gap-2">
                <img src={search} alt="" className="w-4 h-4 m-1" />
                <input type="search" placeholder='Search' className="outline-0 min-w-[100px] flex-1 " />
                <img src={bell} alt="" className="w-4 h-4 m-1 cursor-pointer" />
            </div>
        </section>
        <section className=" col-span-2 sm:col-span-4 sm:mr-5 lg:col-span-5 flex justify-center sm:justify-end item-center gap-2">            
            <img src={profile} alt="" className="w-auto h-[38px] rounded-lg cursor-pointer" />
            <img src={searchPlus} alt="" className="w-9 h-9  rounded-lg cursor-pointer" />
        </section>
    </div>
  )
}

export default Header