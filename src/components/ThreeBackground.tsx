import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const isMobile =
      window.innerWidth < 768 ||
      /Android|iPhone|iPad/i.test(navigator.userAgent);

    // Scene
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 5;

    // Renderer (IMPORTANT)
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile, // ❗ disable AA on mobile
      powerPreference: "low-power",
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5));
    containerRef.current.appendChild(renderer.domElement);

    // Particles (reduce count on mobile)
    const particlesCount = isMobile ? 600 : 1200;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < positions.length; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.015 : 0.02,
      color: "#ff9500",
      transparent: true,
      opacity: 0.7,
      blending: THREE.NormalBlending, // ❗ cheaper than additive
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Geometries (lighter)
    const geometries = [
      new THREE.TorusGeometry(0.7, 0.18, 12, isMobile ? 24 : 48),
      new THREE.OctahedronGeometry(0.5, 0),
      new THREE.IcosahedronGeometry(0.5, 0),
    ];

    const material = new THREE.MeshBasicMaterial({
      color: "#ff9500",
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });

    const meshes: THREE.Mesh[] = [];

    geometries.forEach((geo, i) => {
      const mesh = new THREE.Mesh(geo, material);
      mesh.position.set((i - 1) * 2.5, 0, -5);
      scene.add(mesh);
      meshes.push(mesh);
    });

    // Light (simplified)
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    // Mouse only on desktop
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    if (!isMobile) {
      window.addEventListener("mousemove", onMouseMove);
    }

    // Animation (30 FPS on mobile)
    const clock = new THREE.Clock();
    let lastTime = 0;

    const animate = (time: number) => {
      requestAnimationFrame(animate);

      if (isMobile && time - lastTime < 1000 / 30) return;
      lastTime = time;

      const t = clock.getElapsedTime();

      particles.rotation.y = t * 0.03;

      meshes.forEach((m, i) => {
        m.rotation.x = t * 0.2 * (i + 1);
        m.rotation.y = t * 0.15 * (i + 1);
      });

      if (!isMobile) {
        camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
        camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
      }

      renderer.render(scene, camera);
    };

    animate(0);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);

      containerRef.current?.removeChild(renderer.domElement);

      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      geometries.forEach((g) => g.dispose());
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.35 }}
    />
  );
}
