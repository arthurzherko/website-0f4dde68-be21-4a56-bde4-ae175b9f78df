import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PRICING_PLANS } from '@/lib/constants';

export function PricingSection() {
  return (
    <section className="py-16 bg-black/5">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Наши тарифы</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => (
            <Card
              key={plan.id}
              className="relative overflow-hidden transition-transform hover:scale-105"
            >
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold">{plan.price}₽</span> / {plan.perTime}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500">
                  Выбрать
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
