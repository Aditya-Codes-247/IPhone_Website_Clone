import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-1 h-1 flex justify-center items-center">
        <div className="w-[1vw] h-[1vw] rounded-full">
        <div class="stack">
  <div class="blobs">
    <span class="blob"></span>
    <span class="blob"></span>
    <span class="blob"></span>
    <span class="blob"></span>
  </div>
</div>
        </div>
      </div>
    </Html>
  )
}

export default Loader
