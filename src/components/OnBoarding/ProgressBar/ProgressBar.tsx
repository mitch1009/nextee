export const ProgressBar = ({ progress, target }:any) => {
    const percentage = (progress / target) * 100;
  
    return (
      <div className="bg-gray-200 h-2 w-full rounded-full overflow-hidden">
        <div className="bg-[#917248] h-full" style={{ width: `${percentage}%` }}></div>
      </div>
    );
  };