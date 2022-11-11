import React, {Suspense, useRef} from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import Loader from './Final2'
import {Model} from './Macbook_pro_copy'

export default function Macbook () {

    return (
        <div className='h-full'>
            <Canvas className='w-full' camera={{fov: 75}}>
                <rectAreaLight
                    width={3}
                    height={3}
                    intensity={200}
                    color={"#94f7c6"}
                    position={[-10, 10, 20]}
                    castShadow
                />
                <ambientLight intensity={.4}/>
                <Suspense>
                    <Model position={[0, -1,0]} scale={.5} />
                </Suspense>
            </Canvas>
        </div>
    )
}