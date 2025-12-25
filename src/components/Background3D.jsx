import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

const Box = ({ theme }) => {
    const meshRef = useRef();

    useFrame((state) => {
        meshRef.current.rotation.x += 0.002;
        meshRef.current.rotation.y += 0.002;
        const { x, y } = state.mouse;
        meshRef.current.rotation.x += y * 0.05;
        meshRef.current.rotation.y += x * 0.05;
    });

    // Color changes based on theme
    const boxColor = theme === 'dark' ? '#00d4ff' : '#0070f3';
    const emissiveColor = theme === 'dark' ? '#00d4ff' : '#005bb5';

    return (
        <mesh ref={meshRef} scale={2}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial
                color={boxColor}
                wireframe={true}
                transparent={true}
                opacity={0.3}
                emissive={emissiveColor}
                emissiveIntensity={0.5}
            />
        </mesh>
    );
};

const Background3D = () => {
    const { theme } = useTheme();

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, opacity: 0.6, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color={theme === 'dark' ? "#7000ff" : "#6200ee"} />
                <Box theme={theme} />
            </Canvas>
        </div>
    );
};

export default Background3D;
