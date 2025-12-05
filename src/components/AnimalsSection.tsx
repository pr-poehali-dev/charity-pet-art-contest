import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Animal {
  id: number;
  name: string;
  type: string;
  age: string;
  description: string;
  image: string;
}

interface AnimalsSectionProps {
  animals: Animal[];
  selectedAnimal: number | null;
  setSelectedAnimal: (id: number) => void;
}

const AnimalsSection = ({ animals, selectedAnimal, setSelectedAnimal }: AnimalsSectionProps) => {
  return (
    <section id="animals" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Познакомься с нашими питомцами
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выбери животное, которое тронет твоё сердце, и нарисуй для него рисунок
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {animals.map((animal, index) => (
            <Card 
              key={animal.id} 
              className={`overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer animate-scale-in ${
                selectedAnimal === animal.id ? 'ring-2 ring-primary shadow-xl scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedAnimal(animal.id)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={animal.image} 
                  alt={animal.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {selectedAnimal === animal.id && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full p-2 animate-scale-in">
                    <Icon name="Heart" size={24} fill="currentColor" />
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-2xl flex items-center justify-between">
                  {animal.name}
                  <span className="text-sm font-normal text-muted-foreground">{animal.type}</span>
                </CardTitle>
                <CardDescription className="text-base">
                  Возраст: {animal.age}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{animal.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimalsSection;
