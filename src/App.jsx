import Header from "./components/Header";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <div className="flex">
      <SideBar/>
      <Header />
    </div>
  );
}
