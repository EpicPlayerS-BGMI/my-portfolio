import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: new THREE.Color("#ff9500"),
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Create geometric shapes
    const geometries = [
      new THREE.TorusGeometry(0.7, 0.2, 16, 100),
      new THREE.OctahedronGeometry(0.5, 0),
      new THREE.IcosahedronGeometry(0.5, 0),
    ];

    const materials = [
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#ff9500"),
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      }),
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#fbbf24"),
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      }),
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#f59e0b"),
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      }),
    ];

    const meshes: THREE.Mesh[] = [];
    geometries.forEach((geometry, index) => {
      const mesh = new THREE.Mesh(geometry, materials[index]);
      mesh.position.set((index - 1) * 2.5, Math.sin(index) * 2, -5);
      scene.add(mesh);
      meshes.push(mesh);
    });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff9500, 2);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xfbbf24, 1.5);
    pointLight2.position.set(-2, -3, -4);
    scene.add(pointLight2);

    camera.position.z = 5;

    // Mouse movement
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotate particles
      particlesMesh.rotation.y = elapsedTime * 0.05;
      particlesMesh.rotation.x = Math.sin(elapsedTime * 0.1) * 0.2;

      // Animate meshes
      meshes.forEach((mesh, index) => {
        mesh.rotation.x = elapsedTime * 0.3 * (index + 1);
        mesh.rotation.y = elapsedTime * 0.2 * (index + 1);
        mesh.position.y = Math.sin(elapsedTime + index) * 0.5;
      });

      // Camera follows mouse
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }

      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      geometries.forEach((geo) => geo.dispose());
      materials.forEach((mat) => mat.dispose());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
}
