import { OrbitControls, Outlines } from '@react-three/drei'
import { useControls } from 'leva'

const StandartCube = () => {
  const { cubeColor, outlineColor, outlineThickness } = useControls({
    cubeColor: {
      label: 'Cube Color',
      value: '#323e62'
    },
    outlineColor: {
      label: 'Outline Color',
      value: '#637ac1'
    },
    outlineThickness: {
      label: 'Outline Thickness',
      value: 5
    }
  })

  return (
    <>
      <OrbitControls />
      <mesh>
        <Outlines thickness={outlineThickness} color={outlineColor} />
        <boxGeometry />
        <meshBasicMaterial color={cubeColor} />
      </mesh>
    </>
  )
}

export default StandartCube
