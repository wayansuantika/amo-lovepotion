'use client';

import { useEffect } from 'react';

export function GoldParticles() {
  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let lastScrollY = 0;
    let throttleTimer: NodeJS.Timeout | null = null;
    let magneticElements: Element[] = [];

    // Find all magnetic elements (buttons and links)
    const updateMagneticElements = () => {
      magneticElements = Array.from(document.querySelectorAll('a, button, .amo-cta'));
    };

    updateMagneticElements();

    // Check if mouse is near any magnetic element
    const getMagneticTarget = (x: number, y: number) => {
      for (const el of magneticElements) {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
        
        if (distance < 100) {
          return { x: centerX, y: centerY, distance };
        }
      }
      return null;
    };

    // Mouse trail effect
    const handleMouseMove = (e: MouseEvent) => {
      if (throttleTimer) return;

      throttleTimer = setTimeout(() => {
        throttleTimer = null;
      }, 30);

      const dx = Math.abs(e.clientX - lastX);
      const dy = Math.abs(e.clientY - lastY);

      if (dx > 3 || dy > 3) {
        const magnetic = getMagneticTarget(e.clientX, e.clientY);
        
        // Create multiple particles around the cursor
        for (let i = 0; i < 5; i++) {
          const offsetX = (Math.random() - 0.5) * 20;
          const offsetY = (Math.random() - 0.5) * 20;
          
          if (magnetic) {
            // Attract particles toward the magnetic element
            createMagneticParticle(e.clientX + offsetX, e.clientY + offsetY, magnetic.x, magnetic.y);
          } else {
            createTrailParticle(e.clientX + offsetX, e.clientY + offsetY);
          }
        }
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    // Scroll particles effect
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY);
      
      if (delta > 5) {
        const x = window.innerWidth * Math.random();
        const y = window.scrollY + window.innerHeight * Math.random();
        
        for (let i = 0; i < 3; i++) {
          createScrollParticle(x + (Math.random() - 0.5) * 50, y);
        }
        
        lastScrollY = currentScrollY;
      }
    };

    // Click explosion effect
    const handleClick = (e: MouseEvent) => {
      createExplosion(e.clientX, e.clientY);
    };

    // Create a trail particle
    const createTrailParticle = (x: number, y: number) => {
      const particle = document.createElement('div');
      particle.className = 'gold-particle';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 1000);
    };

    // Create a magnetic particle
    const createMagneticParticle = (x: number, y: number, targetX: number, targetY: number) => {
      const particle = document.createElement('div');
      particle.className = 'gold-particle magnetic';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.setProperty('--target-x', `${targetX - x}px`);
      particle.style.setProperty('--target-y', `${targetY - y}px`);
      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 1200);
    };

    // Create scroll particle
    const createScrollParticle = (x: number, y: number) => {
      const particle = document.createElement('div');
      particle.className = 'scroll-particle';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 1500);
    };

    // Create explosion particles
    const createExplosion = (x: number, y: number) => {
      const particleCount = 30;
      const smokeCount = 8;
      
      // Create main explosion particles
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'explosion-particle';
        
        const angle = (i / particleCount) * Math.PI * 2;
        const distance = 40 + Math.random() * 50;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        
        document.body.appendChild(particle);

        setTimeout(() => {
          particle.remove();
        }, 800);
      }

      // Create smoke particles
      for (let i = 0; i < smokeCount; i++) {
        const smoke = document.createElement('div');
        smoke.className = 'smoke-particle';
        
        const angle = (i / smokeCount) * Math.PI * 2;
        const distance = 60 + Math.random() * 40;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        smoke.style.left = `${x}px`;
        smoke.style.top = `${y}px`;
        smoke.style.setProperty('--tx', `${tx}px`);
        smoke.style.setProperty('--ty', `${ty}px`);
        
        document.body.appendChild(smoke);

        setTimeout(() => {
          smoke.remove();
        }, 1500);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);
    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('scroll', handleScroll);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, []);

  return null;
}
