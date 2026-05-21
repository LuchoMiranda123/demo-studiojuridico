import { useLocation } from 'react-router-dom'
import { IcoMenu } from './Icons'

const TITLES = {
  '/dashboard':     'Dashboard',
  '/calendar':      'Calendario de Reuniones',
  '/conversations': 'Conversaciones',
  '/leads':         'Leads y Prospectos',
  '/pipeline':      'Pipeline de Ventas',
  '/metrics':       'Métricas y Analítica',
}

export default function Topbar({ onMenuToggle }) {
  const { pathname } = useLocation()

  return (
    <header className="bg-white border-b border-slate-200 px-4 lg:px-6 py-3.5 flex items-center justify-between sticky top-0 z-20 shadow-sm">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
        >
          <IcoMenu s={20} />
        </button>
        <h1 className="font-semibold text-navy text-base">{TITLES[pathname] ?? 'Studio Jurídico'}</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1 text-xs text-emerald-700 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Agente activo
        </div>
        <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center text-white text-xs font-bold select-none">
          SJ
        </div>
      </div>
    </header>
  )
}
