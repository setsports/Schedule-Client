import { Link, useLocation } from "react-router-dom";
import { GoPlus } from "react-icons/go";

const TabContainer = ({ title, showBtn, children }) => {
  const location = useLocation();

  return (
    <div className="dashboard__tab">
      <div className="dashboard__tab---flex flex justify-between items-center pb-8">
        <h2 className="dashboard__tab---title text-4xl font-normal">{title}</h2>
        {showBtn && (
          <Link
            className="dashboard__tab---btn bg-[#5B4DFB] text-white rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.08)] p-2 pl-3 pr-3 flex items-center gap-1"
            to={`${location.pathname}/create`}
          >
            <GoPlus className="text-[21px]" />
            Add
          </Link>
        )}
      </div>
      {children}
    </div>
  );
};

export default TabContainer;
