import { OrbitControls, Sky, Stage, useGLTF } from "@react-three/drei"
import { Perf } from "r3f-perf"

export default function Experience() {
  const clinic = useGLTF("./models/clinic-modified.glb")

  return (
    <>
      <Perf position="top-left" />
      {/* <color attach={"background"} args={["#000909"]} /> */}

      <OrbitControls makeDefault />

      {/* <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} /> */}

      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />

      <Stage
        shadows={{
          type: "contact",
          opacity: 0.7,
          blur: 3,
        }}
        preset={"soft"}
        environment={"city"}
        intensity={0.07}
      >
        <primitive object={clinic.scene} scale={0.1} position-y={-1} />
      </Stage>
    </>
  )
}
