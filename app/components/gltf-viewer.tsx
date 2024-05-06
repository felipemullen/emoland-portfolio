'use client';

import * as THREE from 'three'
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Canvas, Euler } from '@react-three/fiber'
import { OrbitControls, useGLTF, useAnimations, Stage, Center, Grid, Text3D, Select } from '@react-three/drei';
import { CenteredSpinner } from './spinner';

import chibiVertexShader from '../shaders/chibi-toon.vert';
import chibiFragmentShader from '../shaders/chibi-toon.frag';


const modelUrl = '/chibi-self.glb';

function SelfMesh(props) {
    const ref = useRef<THREE.Group>(null);

    const { animations, scene } = useGLTF(modelUrl);
    const { actions, mixer } = useAnimations(animations, ref);

    useLayoutEffect(() => {
        scene.traverse(function (child) {
            if (child instanceof THREE.SkinnedMesh) {
                const mesh = child as THREE.SkinnedMesh;
                mesh.castShadow = true;
                mesh.receiveShadow = true;

                const oldMaterial = mesh.material;
                const glossValue = mesh.name.includes('hair') ? 25 : 0;

                mesh.material = new THREE.ShaderMaterial({
                    lights: true,
                    uniforms: {
                        ...THREE.UniformsLib.lights,
                        uGlossiness: { value: glossValue },
                        map: { value: oldMaterial['map'] },
                        uColor: { value: new THREE.Color('#ffffff') }
                    },
                    vertexShader: chibiVertexShader,
                    fragmentShader: chibiFragmentShader
                });
            }
        });
    }, [scene]);

    useEffect(() => {
        for (const animationName in actions) {
            actions[animationName]?.play();
        }
    }, [mixer, actions]);

    return (
        <primitive ref={ref} object={scene} {...props} />
    );
}

export function GltfViewer() {

    const [rotateSpeed, setRotateSpeed] = useState<number>(0);

    setTimeout(() => {
        setRotateSpeed(0.2);
    }, 1250);

    const ambientColor = "#deb6b6";
    const ambientIntensity = 1.9000000000000001;
    const directionalColor = "#f5f4f4";
    const directionalPosition = new THREE.Vector3(5, 11, 1);
    const directionalIntensity = 1.2;

    const messageText = [
        '(not drawn to scale)'
    ].join('\n');

    const textPosition = new THREE.Vector3(-0.48, -0.74, 7.35);
    const textRotation: Euler = [-0.33, 0, 0];
    const textColor = '#464c52';
    const fontUrl = '/fonts/inter_bold.json';
    const textSize = 0.25;
    const parentRotation: Euler = [0, 0.84, 0];

    return (
        <Suspense fallback={<CenteredSpinner />}>
            <Canvas shadows camera={{ position: [18, 3, 15], fov: 35 }}>
                <ambientLight intensity={ambientIntensity} color={ambientColor} />
                <directionalLight intensity={directionalIntensity} position={directionalPosition} color={directionalColor} />

                <Grid renderOrder={-1} position={[-0.1, -1.06, -0.7]} infiniteGrid cellSize={0.25} cellThickness={0.6} sectionSize={2} sectionThickness={1.5} fadeDistance={40} />

                <Stage intensity={0.1} environment="warehouse" shadows={{ type: 'contact', opacity: 1, color: '#000000', resolution: 1024, blur: 0.5 }} adjustCamera={false}>
                    <Center position={[-10, 0, -20]}>
                        <SelfMesh scale={0.25} />
                    </Center>
                </Stage>

                <Select rotation={parentRotation} castShadow={false}>
                    <Text3D castShadow={false} position={textPosition} rotation={textRotation} letterSpacing={0} size={textSize} font={fontUrl} height={0.15} bevelEnabled={false}>
                        <meshStandardMaterial color={textColor} shadowSide={THREE.BackSide} />
                        {messageText}
                    </Text3D>
                </Select>

                <OrbitControls autoRotate autoRotateSpeed={rotateSpeed} target={[1.8, 3, 0]} enableZoom={false} enablePan={true} makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
            </Canvas>
        </Suspense>
    );
}

useGLTF.preload(modelUrl);