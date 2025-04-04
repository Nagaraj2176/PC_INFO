import { useState } from "react";
import AboutCard from "../components/AboutPageCard";
import { AnimatedTestimonialsDemo } from '../components/AnimatedTestimonialDemo';
import "../static/AboutPage.css";

export default function AboutPage()  {
    const cards = [
        {
            id: 1, title: "Find the Perfect Laptop for You",
            content: "Welcome to PC Info, your honest and simple laptop recommendation platform. We help you choose the best laptop based on your needs, budget, and preferences. Whether you're a student, gamer, programmer, or office worker, we guide you with detailed, easy-to-understand explanations.",
            imgsrc: "/img1.webp"
        },
        {
            id: 2, title: "How We Recommend Laptops",
            content: "We don’t just list laptops – we explain everything in a way anyone can understand. Our system suggests laptops based on categories like gaming, business, studies, and content creation. Plus, we provide honest pros and cons so you can make the right choice without any confusion.",
            imgsrc: "/img2.webp"
        },
        {
            id: 3, title: "Compare Laptops Easily",
            content: "Not sure which laptop to buy? Use our side-by-side comparison tool to see differences in performance, price, battery life, and features. We break down complicated specs into simple explanations, so even a beginner can understand what really matters.",
            imgsrc: "/img4.jpeg"
        },
        {
            id: 4, title: "Honest and Transparent Pricing",
            content: "We believe in complete honesty. Our pricing details show the latest rates from different online stores, helping you get the best deal. No hidden costs, no biased recommendations – just straightforward advice so you can buy with confidence.",
            imgsrc: "/img5.jpeg"
        }
    ];

    const [activeIndex,setActiveIndex]= useState(1);

    const nextCard = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
      };

      const prevCard = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
      };
    
      return(
        <>
        <div className="about-us-container">About Us</div>

<div className="about-us-grid">
  <div className="about-us-button-container">
    <div className="about-us-button">
      <button onClick={prevCard} className="nav-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="m15 18-6-6 6-6"></path>
        </svg>
      </button>
    </div>
  </div>

  <div className="about-card">
    <AboutCard
      title={cards[activeIndex].title}
      imgsrc={cards[activeIndex].imgsrc}
      content={cards[activeIndex].content}
    />
  </div>

  <div className="about-us-button-container">
    <div className="about-us-button">
      <button onClick={nextCard} className="nav-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
    </div>
  </div>
</div>

<div className="video-container">
  <iframe
    src="https://www.youtube.com/embed/Pw-0pbY9JeU"
    frameBorder="0"
    allowFullScreen
    className="video-frame"
  ></iframe>
</div>

<div className="meet-our-team">Meet Our Team</div>

<div>
  <AnimatedTestimonialsDemo />
</div>
    </>
      );
}