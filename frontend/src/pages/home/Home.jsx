import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hiddenw-full p-6 shadow-md glass-effect">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
