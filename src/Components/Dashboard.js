import React from 'react';
import {Link} from 'react-router-dom';

const Dashboard = () => {
   
  return (
      <div className=" App flex flex-col h-screen text-center bg-gradient-to-l from-teal-50 from-5% via-indigo-200 via-45% to-teal-50 to-70% ">
      <img className="h-10 w-40 m-10 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFdr7RUDD3acOkmlfFWGnkz7xOEbJbleJlMA&s"  />
      <p className="text-6xl text-teal-600 font-extrabold mt-14">Keep Your Brain <span className="text-blue-900">Test-Ready !</span> </p>
      <p className="text-4xl mt-12 text-blue-900 font-bold">"A Small Habit For Big Results"</p>
      <div className="flex justify-center ">
        <button className=" inline-block bg-gradient-to-r 
              from-teal-600 to-blue-900 text-white text-2xl font-bold px-10 py-5 ml-5 rounded-md mt-20" ><Link to="/quiz">Get Started</Link>
        </button>
      </div>
      <div className="flex justify-center sticky top-[80vh]">
        <p className="bg-teal-600 bg-opacity-35 px-12 py-7 text-blue-900 rounded-md text-4xl w-auto font-bold">Trusted by 2 Lakh users !</p>
      </div>
      </div>
  )
}

export default Dashboard
