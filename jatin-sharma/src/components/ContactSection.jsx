import React, { useState, useEffect } from 'react';
import '../assets/styles/contact.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import axios from 'axios';

const ContactSection = () => {

  // Setting up contact form to link with the backend server
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/send-email', formData);
      alert('Email sent successfully');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again later.');
    }
  };

  useEffect(() => {
    const canvas = document.getElementById('backgroundCanvas');
  
    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }
  
    const ctx = canvas.getContext('2d');
    let width, height, lastNow;
    let stars = [];
    const maxStars = 1000;
  
    function init() {
      resize();
      render(lastNow = performance.now());
    }
  
    function render(now) {
      requestAnimationFrame(render);
  
      const elapsed = now - lastNow;
      lastNow = now;
  
      ctx.clearRect(0, 0, width, height);
  
      if (stars.length < maxStars) {
        stars.push(new Star());
      }
  
      stars.forEach(star => star.update(elapsed, now));
    }
  
    class Star {
      constructor() {
        this.spawn();
      }
  
      spawn() {
        this.x = rand(-50, width + 50);
        this.y = rand(height, height + 50);
        this.xVel = rand(0, 0);
        this.yVel = rand(-0.1, -0.4);
        this.size = rand(0.5, 1);
        this.opacity = rand(0.2, 0.5);
        this.color = `rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, ${this.opacity})`;
      }
  
      update(elapsed, now) {
        this.x += this.xVel * elapsed;
        this.y += this.yVel * elapsed;
  
        if (this.y < -50 || this.x < -50 || this.x > width + 50) {
          this.spawn();
        }
  
        this.render();
      }
  
      render() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
      }
    }
  
    // Utils
    const rand = (min, max) => min + Math.random() * (max - min);
  
    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
  
    window.addEventListener('resize', resize);
    init();
  
    // Clean up the animation when the component unmounts
    return () => window.cancelAnimationFrame(render);
  }, []);
  

  const earth = useGLTF('/scene.gltf');

  return (
    <div id='contact' className="contact-section">
      <canvas id='backgroundCanvas'></canvas>
      {/* Left Side */}
      <div className="contact-card">
        <h2 className="card-heading">Get In Touch</h2>
        <p className='subheading'>Contact Me</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>Your Name</span>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Jatin Sharma" required />
          </label>
          <label>
            <span>Your Email</span>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="jatin@example.com" required />
          </label>
          <label>
            <span>Your Message</span>
            <textarea rows="4" name="message" value={formData.message} onChange={handleChange} placeholder="Type your message here" required></textarea>
          </label>
          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      </div>

      {/* Right Side */}
      <div className="illustration">
        <Canvas className='earth-canvas' frameloop="demand" camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}>
          <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enablePan={false} />
          <primitive object={earth.scene} scale={[3, 3, 3]} />
          <ambientLight intensity={0.5} />
        </Canvas>
      </div>
    </div>
  );
};

export default ContactSection;
