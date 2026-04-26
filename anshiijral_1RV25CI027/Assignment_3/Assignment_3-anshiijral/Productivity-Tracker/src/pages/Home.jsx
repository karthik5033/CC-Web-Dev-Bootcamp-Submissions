import { useState } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

<div className="mb-8 text-center">
  <h1>PRODUCTIVITY TRACKER</h1>
  <p className="mt-3 text-lg text-slate-500">
    Organize tasks smarter, not harder.
  </p>

  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      marginTop: '20px',
      marginBottom: '20px',
    }}
  >
    <Link to="/">Home</Link>
    <Link to="/stats">Stats</Link>
  </div>
</div>

export default App