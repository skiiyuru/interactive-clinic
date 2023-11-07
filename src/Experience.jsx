import { OrbitControls, useGLTF } from "@react-three/drei"
import { Perf } from "r3f-perf"

export default function Experience() {
  const clinic = useGLTF("./models/clinic-modified.glb")

  return (
    <>
      <Perf position="top-left" />
      <color attach={"background"} args={["#000909"]} />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <primitive object={clinic.scene} scale={0.1} position-y={-1} />
    </>
  )
}
