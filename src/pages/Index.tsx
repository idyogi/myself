
import EventHero from '@/components/EventHero';
import AboutEvent from '@/components/AboutEvent';
import BonusSection from '@/components/BonusSection';
import CallToAction from '@/components/CallToAction';

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

export default Index;
