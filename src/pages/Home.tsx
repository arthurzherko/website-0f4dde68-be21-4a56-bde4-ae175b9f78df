import { HeroSection } from '@/components/hero-section';
import { PricingSection } from '@/components/pricing-section';
import { Navigation } from '@/components/navigation';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <PricingSection />
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>© 2024 GameZone. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Home;
