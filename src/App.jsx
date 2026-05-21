import { useState } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './views/Dashboard'
import CalendarView from './views/CalendarView'
import Conversations from './views/Conversations'
import Leads from './views/Leads'
import Pipeline from './views/Pipeline'
import Metrics from './views/Metrics'

export default function App() {
  const [collapsed, setCollapsed]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <HashRouter>
      <div className="flex h-screen overflow-hidden bg-slate-50">
        <Sidebar
          collapsed={collapsed}
          onToggle={() => setCollapsed(c => !c)}
          mobileOpen={mobileOpen}
          onMobileClose={() => setMobileOpen(false)}
        />
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <Topbar onMenuToggle={() => setMobileOpen(true)} />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/"             element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard"     element={<Dashboard />} />
              <Route path="/calendar"      element={<CalendarView />} />
              <Route path="/conversations" element={<Conversations />} />
              <Route path="/leads"         element={<Leads />} />
              <Route path="/pipeline"      element={<Pipeline />} />
              <Route path="/metrics"       element={<Metrics />} />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  )
}
