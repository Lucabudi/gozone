import React from 'react';
import { HeroSection } from '../../../Components/HeroSection';
import ClimateStories from '../../../Components/StoriesClimate';

const Projects: React.FC = () => {


    const stories = [
    {
      date: "Progetto 1",
      title: "",
      image: "https://i.guim.co.uk/img/media/43c52a2b60749e2c3cf28d6988c37a672d80a957/0_0_2500_1500/master/2500.jpg?width=1900&dpr=2&s=none&crop=none",
      linkText: "Read the update",
    },
    {
      date: "Progetto 2",
      title: "",
      image: "https://i.guim.co.uk/img/media/43c52a2b60749e2c3cf28d6988c37a672d80a957/0_0_2500_1500/master/2500.jpg?width=1900&dpr=2&s=none&crop=none",
      linkText: "Read the update",
    },
    {
      date: "Progetto 3",
      title: "",
      image: "https://i.guim.co.uk/img/media/43c52a2b60749e2c3cf28d6988c37a672d80a957/0_0_2500_1500/master/2500.jpg?width=1900&dpr=2&s=none&crop=none",
      linkText: "Read the press release",
    },
    {
      date: "Progetto 4",
      title:
        "",
      image: "https://i.guim.co.uk/img/media/43c52a2b60749e2c3cf28d6988c37a672d80a957/0_0_2500_1500/master/2500.jpg?width=1900&dpr=2&s=none&crop=none",
      linkText: "Read the press release",
    },
    ];
    return (
        <div className="home-page full-width"> 
            <HeroSection text="I nostri progetti" height="60vh" animation={false} />
            <ClimateStories title="I nostri progetti" array={stories} />
        </div>
    );
};

export default Projects;