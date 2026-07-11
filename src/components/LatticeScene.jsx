import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function LatticeScene({ className = '' }) {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const animRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const w = container.clientWidth;
    const h = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 1000);
    camera.position.set(0, 0, 40);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create lattice grid
    const gridSize = 8;
    const spacing = 4;
    const sphereGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const sphereMat = new THREE.MeshBasicMaterial({ color: 0x32D74B, transparent: true, opacity: 0.6 });
    const lineMat = new THREE.LineBasicMaterial({ color: 0x1A1C1E, transparent: true, opacity: 0.3 });

    const nodes = [];
    const group = new THREE.Group();

    for (let x = -gridSize / 2; x <= gridSize / 2; x++) {
      for (let y = -gridSize / 2; y <= gridSize / 2; y++) {
        const sphere = new THREE.Mesh(sphereGeo, sphereMat.clone());
        sphere.position.set(x * spacing, y * spacing, 0);
        sphere.userData = { baseX: x * spacing, baseY: y * spacing, baseZ: 0 };
        group.add(sphere);
        nodes.push(sphere);
      }
    }

    // Connect adjacent nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const d = nodes[i].position.distanceTo(nodes[j].position);
        if (d <= spacing * 1.1) {
          const lineGeo = new THREE.BufferGeometry().setFromPoints([
            nodes[i].position.clone(),
            nodes[j].position.clone()
          ]);
          const line = new THREE.Line(lineGeo, lineMat.clone());
          line.userData = { from: i, to: j };
          group.add(line);
        }
      }
    }

    scene.add(group);

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    container.addEventListener('mousemove', onMouseMove);

    const clock = new THREE.Clock();
    const animate = () => {
      animRef.current = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      nodes.forEach((node) => {
        const { baseX, baseY } = node.userData;
        const wave = Math.sin(baseX * 0.3 + t * 0.5) * Math.cos(baseY * 0.3 + t * 0.3) * 2;
        const mouseInfluence = Math.exp(-((baseX / 16 - mx) ** 2 + (baseY / 16 - my) ** 2) * 2) * 3;
        node.position.z = wave + mouseInfluence;
        node.material.opacity = 0.3 + mouseInfluence * 0.15;
      });

      // Update lines
      group.children.forEach(child => {
        if (child.isLine && child.userData.from !== undefined) {
          const posArr = child.geometry.attributes.position.array;
          const fromNode = nodes[child.userData.from];
          const toNode = nodes[child.userData.to];
          posArr[0] = fromNode.position.x;
          posArr[1] = fromNode.position.y;
          posArr[2] = fromNode.position.z;
          posArr[3] = toNode.position.x;
          posArr[4] = toNode.position.y;
          posArr[5] = toNode.position.z;
          child.geometry.attributes.position.needsUpdate = true;
        }
      });

      group.rotation.x = my * 0.1;
      group.rotation.y = mx * 0.1 + t * 0.05;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', onResize);

    return () => {
      container.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animRef.current);
      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      lineMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className={`absolute inset-0 ${className}`} />;
}
