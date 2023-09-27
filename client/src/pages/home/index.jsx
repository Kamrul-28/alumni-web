import Header from "./header";
import Events from "./events";
import Committee from "./committee";
import Donation from "./donation";
import Scholarship from "./scholarship";
import JobCircular from "./job-circular";

const Home = () => {
  return (
    <div>
      <Header />
      <Events />
      <Scholarship />
      <JobCircular />
      <Donation />
      <Committee />
    </div>
  );
};

export default Home;
