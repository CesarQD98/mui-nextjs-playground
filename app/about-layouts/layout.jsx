import React from 'react'

export const metadata = {
  title: 'about-layouts',
  description: 'Learning about layouts!'
}

function LearningLayouts ({ children }) {
  return (
    <main>
      <nav style={{ backgroundColor: '#ececec', display: 'flex', justifyContent: 'center' }}>
        <ul style={{ display: 'flex', justifyContent: 'space-around', listStyleType: 'none', padding: 0, width: '100%' }}>
          <li>This</li>
          <li>is</li>
          <li>some</li>
          <li>stuff</li>
          <li>to</li>
          <li>populate</li>
          <li>the</li>
          <li>UI</li>
        </ul>
      </nav>
      {children}
    </main>
  )
}

export default LearningLayouts
