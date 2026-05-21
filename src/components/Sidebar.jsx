import { NavLink } from 'react-router-dom'
import { IcoScales, IcoDashboard, IcoCalendar, IcoChat, IcoUsers, IcoPipeline, IcoMetrics, IcoMenu } from './Icons'

const NAV = [
  { to: '/dashboard',     label: 'Dashboard',      Icon: IcoDashboard },
  { to: '/calendar',      label: 'Calendario',     Icon: IcoCalendar  },
  { to: '/conversations', label: 'Conversaciones', Icon: IcoChat      },
  { to: '/leads',         label: 'Leads',          Icon: IcoUsers     },
  { to: '/pipeline',      label: 'Pipeline',       Icon: IcoPipeline  },
  { to: '/metrics',       label: 'Métricas',       Icon: IcoMetrics   },
]

export default function Sidebar({ collapsed, onToggle, mobileOpen, onMobileClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={onMobileClose}
        />
      )}

      <aside
        className={[
          'fixed top-0 left-0 h-full z-40 flex flex-col transition-all duration-300',
          'bg-navy shadow-xl',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
          'lg:translate-x-0 lg:static lg:z-auto',
          collapsed ? 'lg:w-16' : 'lg:w-60',
          'w-60',
        ].join(' ')}
      >
        {/* Logo */}
        <div className={`flex items-center gap-3 px-4 py-5 border-b border-white/10 ${collapsed ? 'lg:justify-center' : ''}`}>
          <span className="text-gold flex-shrink-0">
            <IcoScales s={26} />
          </span>
          <div className={`${collapsed ? 'lg:hidden' : ''}`}>
            <p className="text-white font-semibold text-sm leading-tight">Studio Jurídico</p>
            <p className="text-white/40 text-xs">CRM Profesional</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-2 space-y-0.5 overflow-y-auto">
          {NAV.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onMobileClose}
              className={({ isActive }) =>
                [
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150',
                  collapsed ? 'lg:justify-center' : '',
                  isActive
                    ? 'bg-gold text-navy'
                    : 'text-white/70 hover:bg-white/10 hover:text-white',
                ].join(' ')
              }
              title={collapsed ? label : undefined}
            >
              {({ isActive }) => (
                <>
                  <Icon s={18} />
                  <span className={collapsed ? 'lg:hidden' : ''}>{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Collapse toggle (desktop only) */}
        <div className="hidden lg:block p-2 border-t border-white/10">
          <button
            onClick={onToggle}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-white/40 hover:bg-white/10 hover:text-white/70 transition-colors text-xs"
          >
            <IcoMenu s={15} />
            {!collapsed && <span>Colapsar</span>}
          </button>
        </div>
      </aside>
    </>
  )
}
