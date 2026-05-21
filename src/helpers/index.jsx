export const ESTADO_COLORS = {
  'Nuevo':             'bg-slate-100 text-slate-600',
  'Interesado':        'bg-blue-100 text-blue-700',
  'Reunión Agendada':  'bg-amber-100 text-amber-700',
  'Reunión Realizada': 'bg-purple-100 text-purple-700',
  'Cliente':           'bg-emerald-100 text-emerald-700',
}

export function formatDate(dateStr) {
  if (!dateStr) return '—'
  return new Date(dateStr).toLocaleDateString('es-PE', { day: '2-digit', month: 'short', year: 'numeric' })
}

export function formatDateTime(dateStr) {
  if (!dateStr) return '—'
  return new Date(dateStr).toLocaleDateString('es-PE', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })
}

export function getLeadById(id, leads) {
  return leads.find(l => l.id === id)
}

export function Badge({ estado }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${ESTADO_COLORS[estado] ?? 'bg-gray-100 text-gray-600'}`}>
      {estado}
    </span>
  )
}

export function Avatar({ initials, size = 'md', bg = '#1a2e4a' }) {
  const s = { sm: 'w-7 h-7 text-xs', md: 'w-9 h-9 text-sm', lg: 'w-11 h-11 text-base' }
  return (
    <div className={`${s[size]} rounded-full flex items-center justify-center font-semibold text-white flex-shrink-0`} style={{ backgroundColor: bg }}>
      {initials}
    </div>
  )
}
