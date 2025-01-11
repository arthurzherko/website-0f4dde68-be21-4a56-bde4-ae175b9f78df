import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/95">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
          Добро пожаловать в GameZone
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
          Погрузитесь в мир современных игр на самом мощном оборудовании
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
          >
            <Link to="/booking">Забронировать место</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/prices">Узнать цены</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
