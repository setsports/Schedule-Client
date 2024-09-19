import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetDropdownOpened } from "../features/menu/menuSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetDropdownOpened());
  }, [dispatch]);

  return <main className="dashboard">Dashboard</main>;
};

export default Dashboard;
