"use client";
import dynamic from "next/dynamic";
import { useRef, useEffect } from "react";

const Globe = dynamic(
  () => import("react-globe.gl").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <div className="h-full w-full bg-gray-900 rounded-lg" />,
  }
);

export default function GitHubGlobe() {
  const globeRef = useRef<any>();

  useEffect(() => {
    if (globeRef.current) {
      // Set initial camera position
      globeRef.current.camera().position.z = 300;

      // Auto-rotate
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
      globeRef.current.controls().enableZoom = false;
    }
  }, []);

  return (
    <div className="h-[40rem] w-full">
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundColor="rgba(0, 0, 0, 0)"
        atmosphereColor="rgba(63, 201, 255, 0.6)"
        animateIn={true}
        rendererConfig={{ antialias: true }}
      />
    </div>
  );
}
