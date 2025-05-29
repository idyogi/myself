
import EventHero from '@/components/EventHero';
import AboutEvent from '@/components/AboutEvent';
import BonusSection from '@/components/BonusSection';
import CallToAction from '@/components/CallToAction';
import ReactPixel from 'react-facebook-pixel';

const Index = () => {
  return (
    <div className="min-h-screen">
      <EventHero />
      <AboutEvent />
      <BonusSection />
      <CallToAction />
    </div>
  );

};

ReactPixel.init('1078177560795531');
ReactPixel.pageView();
export default Index;
