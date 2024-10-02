import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress < 100) {
          return oldProgress + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 10);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="fixed  inset-0 flex items-center justify-center bg-black text-yellow-100">
      <div className="border-[1px] bg-black w-[95%]  border-green-500 rounded-sm p-4 text-center md:w-[450px]"> 
        <div className="text-[20px] tut font-medium mb-[4.5px]">Accessing the file</div>
        <div className="border-t-[.1px] border-[#ff0443] -mx-4 mb-3"></div> 
        <div className="text-2xl  mb-3 tut text-yellow-400 font-medium">{progress}%</div>
        <div className="w-full h-6 relative mb-4">
          <div
            className="bg-[#00FF19] h-full absolute top-0 left-0 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
