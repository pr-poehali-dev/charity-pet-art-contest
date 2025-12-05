import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AnimalsSection from "@/components/AnimalsSection";
import MainContent from "@/components/MainContent";

const animals = [
  {
    id: 1,
    name: "Рыжик",
    type: "Кот",
    age: "2 года",
    description: "Ласковый рыжий котик, который обожает играть и мурлыкать. Ищет любящую семью!",
    image: "https://cdn.poehali.dev/projects/d166914e-4ca0-4401-a3c7-d4bd2ca1a8f7/files/f948c651-4a1b-493f-8722-68b46b354699.jpg"
  },
  {
    id: 2,
    name: "Бадди",
    type: "Собака",
    age: "1 год",
    description: "Веселый и игривый щенок золотистого ретривера. Любит детей и готов дарить радость каждый день!",
    image: "https://cdn.poehali.dev/projects/d166914e-4ca0-4401-a3c7-d4bd2ca1a8f7/files/ec5ffc71-cfbb-41cd-8828-a365711460a8.jpg"
  },
  {
    id: 3,
    name: "Снежок",
    type: "Кролик",
    age: "6 месяцев",
    description: "Милый серый кролик с мягкой шерсткой. Очень спокойный и дружелюбный.",
    image: "https://cdn.poehali.dev/projects/d166914e-4ca0-4401-a3c7-d4bd2ca1a8f7/files/513a3a0d-3406-4f60-9e78-8278ea8a3aac.jpg"
  }
];

const Index = () => {
  const [selectedAnimal, setSelectedAnimal] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.innerHTML = '❄';
      snowflake.style.left = Math.random() * 100 + 'vw';
      snowflake.style.animationDuration = Math.random() * 3 + 5 + 's';
      snowflake.style.opacity = (Math.random() * 0.5 + 0.3).toString();
      snowflake.style.fontSize = Math.random() * 1 + 1 + 'rem';
      
      snowflake.addEventListener('mouseenter', () => {
        snowflake.style.transition = 'all 0.3s ease';
        snowflake.style.transform = 'scale(2) rotate(180deg)';
        snowflake.style.color = 'rgba(59, 130, 246, 0.9)';
        
        setTimeout(() => {
          snowflake.style.transform = 'scale(0)';
          setTimeout(() => snowflake.remove(), 300);
        }, 300);
      });
      
      snowflake.addEventListener('click', () => {
        const emojis = ['⭐', '✨', '🎄', '🎁', '⛄'];
        snowflake.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        snowflake.style.transition = 'all 0.5s ease';
        snowflake.style.transform = 'scale(3) rotate(360deg)';
        snowflake.style.opacity = '0';
        setTimeout(() => snowflake.remove(), 500);
      });

      document.body.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, 8000);
    };

    const interval = setInterval(createSnowflake, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <AnimalsSection 
        animals={animals} 
        selectedAnimal={selectedAnimal} 
        setSelectedAnimal={setSelectedAnimal} 
      />
      <MainContent />
    </div>
  );
};

export default Index;