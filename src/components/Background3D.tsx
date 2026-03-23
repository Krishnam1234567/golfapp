'use client';

import Ballpit from './ui/Ballpit';

export default function Background3D() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -5, opacity: 0.6, pointerEvents: 'none' }}>
      <Ballpit
        count={50}
        gravity={0.01}
        friction={0.9975}
        wallBounce={0.95}
        followCursor={false}
      />
    </div>
  );
}
