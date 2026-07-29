'v'
'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function StudioDeskScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#050505');
    scene.fog = new THREE.FogExp2('#050505', 0.05);

    const camera = new THREE.PerspectiveCamera(
      45,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 3, 10);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    currentMount.appendChild(renderer.domElement);

    // Lighting (Three-point luxury studio lighting)
    const ambientLight = new THREE.AmbientLight('#ffffff', 0.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight('#4B6FFF', 1.5);
    keyLight.position.set(5, 8, 5);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight('#ffffff', 0.8);
    rimLight.position.set(-5, 5, -5);
    scene.add(rimLight);

    // Desk
    const deskGeo = new THREE.BoxGeometry(16, 0.4, 8);
    const deskMat = new THREE.MeshStandardMaterial({
      color: '#0D0D0D',
      roughness: 0.8,
      metalness: 0.2,
    });
    const desk = new THREE.Mesh(deskGeo, deskMat);
    desk.position.set(0, -2, 0);
    desk.receiveShadow = true;
    scene.add(desk);

    // Monitor Stand & Frame (Hero object)
    const monitorGroup = new THREE.Group();
    
    // Screen Frame
    const frameGeo = new THREE.BoxGeometry(7, 4, 0.2);
    const frameMat = new THREE.MeshStandardMaterial({ color: '#171717', roughness: 0.5 });
    const screenFrame = new THREE.Mesh(frameGeo, frameMat);
    screenFrame.position.set(0, 0.5, -1);
    monitorGroup.add(screenFrame);

    // Screen Display (Glowing Canvas)
    const screenGeo = new THREE.PlaneGeometry(6.7, 3.7);
    const screenMat = new THREE.MeshBasicMaterial({ color: '#1a2b4c' });
    const screenDisplay = new THREE.Mesh(screenGeo, screenMat);
    screenDisplay.position.set(0, 0.5, -0.89);
    monitorGroup.add(screenDisplay);

    scene.add(monitorGroup);

    // Keyboard
    const kbGeo = new THREE.BoxGeometry(3.5, 0.1, 1.4);
    const kbMat = new THREE.MeshStandardMaterial({ color: '#111111', roughness: 0.6 });
    const keyboard = new THREE.Mesh(kbGeo, kbMat);
    keyboard.position.set(0, -1.75, 1.5);
    keyboard.castShadow = true;
    scene.add(keyboard);

    // Mouse
    const mouseGeo = new THREE.BoxGeometry(0.5, 0.15, 0.9);
    const mouseMat = new THREE.MeshStandardMaterial({ color: '#111111', roughness: 0.5 });
    const mouse = new THREE.Mesh(mouseGeo, mouseMat);
    mouse.position.set(2.4, -1.75, 1.5);
    mouse.castShadow = true;
    scene.add(mouse);

    // Coffee Mug
    const mugGeo = new THREE.CylinderGeometry(0.3, 0.25, 0.7, 32);
    const mugMat = new THREE.MeshStandardMaterial({ color: '#F7F7F7', roughness: 0.3 });
    const mug = new THREE.Mesh(mugGeo, mugMat);
    mug.position.set(-3.2, -1.6, 1.2);
    mug.castShadow = true;
    scene.add(mug);

    // Mouse Interaction for subtle breathing / camera shift
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop (60 FPS GPU accelerated)
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Subtle breathing / parallax camera movement conforming to Part 7 specs
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY + 3 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Micro object animations
      mug.position.y = -1.6 + Math.sin(elapsedTime * 2) * 0.01;

      renderer.render(scene, camera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={mountRef} className="w-full h-[500px] lg:h-[650px] relative pointer-events-none" />
  );
}
