import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'new-segment',
  description: 'This is a new segment!'
}

function layout ({ children }) {
  return (
    <div>
      <nav style={{ backgroundColor: '#8673A1', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <h1 style={{ color: '#fff', fontFamily: 'Arial' }}>This is a nested layout!</h1>
        <ul style={{ listStyleType: 'none', display: 'flex', alignItems: 'center', padding: 0, gap: '3rem' }}>
          <li><Link href='#section-1' style={{ color: '#fff' }}>Section 1</Link></li>
          <li><Link href='#section-2' style={{ color: '#fff' }}>Section 2</Link></li>
          <li><Link href='#section-3' style={{ color: '#fff' }}>Section 3</Link></li>
        </ul>
      </nav>
      {children}
    </div>
  )
}

export default layout
