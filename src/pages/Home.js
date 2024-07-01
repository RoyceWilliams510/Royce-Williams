import React, { useState } from 'react';

const Home = ()=>{
    console.log("HOME")
    return (
        <div className="portfolio-landing">
          <PhotoSection />
          <TextSection />
          <Gallery />
        </div>
      );
}
// Photo Section
const PhotoSection = () => {
    return (
      <div className="photo-section">
        <img src="path/to/your/photo.jpg" alt="Your Name" />
      </div>
    );
  };
  
  // Text Section
const TextSection = () => {
    return (
      <div className="text-section">
        <h1>Your Name</h1>
        <p>Short bio or introduction about yourself.</p>
      </div>
    );
};
  
  // Gallery Component
const Gallery = () => {
    // Assuming you have an array of projects
    const projects = [
      { id: 1, imageUrl: 'https://placehold.co/600x400', title: 'Project 1',description:'"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,' },
      { id: 2, imageUrl: 'https://placehold.co/600x400', title: 'Project 2', description:'"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,' },
      // Add more projects as needed
    ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projects.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };
  
    return (
      <div className="gallery">
        <h1>
            Past Projects
        </h1>
        <div className="carousel">
        <button onClick={goToPrevious}>&lt;</button>
        <div className="project">
          <img src={projects[currentIndex].imageUrl} alt={projects[currentIndex].title} />
          <h3>{projects[currentIndex].title}</h3>
          <p>{projects[currentIndex].description}</p>
        </div>
        <button onClick={goToNext}>&gt;</button>
        
      </div>
    </div>
    );
};
export default Home