import Buttons from "./components/buttons";
import Content1 from "./components/content1";
import Content2 from "./components/content2";
import ExtraFeatures from "./components/extrafeatures";
import Features from "./components/features";
import HowItWorks from "./components/howitwoks";
import Main from "./components/main";
import Whychoose from "./components/whychoose";

export default function Home() {
  return (
  
    <div>
      <Main/>
      <Buttons/>
      <Content1/>
      <Content2/>
      <Features/>
      <HowItWorks/>
      <ExtraFeatures/>
      <Whychoose/>
    </div>
  
  );
}
