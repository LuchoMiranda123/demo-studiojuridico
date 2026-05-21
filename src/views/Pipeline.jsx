import { LEADS, PIPELINE_STAGES } from '../data/mockData'
import { Badge } from '../helpers'
import { IcoPhone } from '../components/Icons'

function LeadCard({ lead }) {
  const isAlim = lead.servicio === 'Pensión de Alimentos'
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-3.5 hover:shadow-md transition-shadow cursor-default">
      <div className="flex items-start gap-2.5 mb-2.5">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white flex-shrink-0"
          style={{ backgroundColor: isAlim ? '#1a2e4a' : '#c9a84c' }}>
          {lead.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-slate-800 leading-tight">{lead.nombre}</p>
          <div className="flex items-center gap-1 mt-0.5">
            <span className={`w-1.5 h-1.5 rounded-full ${isAlim ? 'bg-navy' : 'bg-gold'}`} />
            <span className="text-xs text-slate-400 truncate">{lead.servicio}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1 text-xs text-slate-400">
          <IcoPhone s={11} />
          {lead.telefono}
        </span>
        <span className="text-xs text-slate-400">{lead.anuncio}</span>
      </div>
      {lead.montoReunion > 0 && (
        <div className="mt-2 pt-2 border-t border-slate-50 flex justify-end">
          <span className="text-xs font-semibold text-emerald-600">S/. {lead.montoReunion} pagado</span>
        </div>
      )}
    </div>
  )
}

export default function Pipeline() {
  return (
    <div className="p-4 lg:p-6">

      {/* Summary row */}
      <div className="grid grid-cols-5 gap-3 mb-5">
        {PIPELINE_STAGES.map(({ id: stage, color }) => {
          const count    = LEADS.filter(l => l.estado === stage).length
          const ingresos = LEADS.filter(l => l.estado === stage && l.montoReunion > 0).length * 70
          return (
            <div key={stage} className="bg-white rounded-xl border border-slate-100 shadow-sm p-3 text-center">
              <p className="text-xl font-bold text-slate-800">{count}</p>
              <p className="text-xs text-slate-500 mt-0.5 leading-tight">{stage}</p>
              {ingresos > 0 && (
                <p className="text-xs font-medium text-emerald-600 mt-1">S/. {ingresos}</p>
              )}
            </div>
          )
        })}
      </div>

      {/* Kanban board */}
      <div className="flex gap-4 overflow-x-auto pb-4" style={{ minHeight: '60vh' }}>
        {PIPELINE_STAGES.map(({ id: stage, label, color }) => {
          const stageLeads = LEADS.filter(l => l.estado === stage)
          return (
            <div key={stage} className="flex-shrink-0 w-64">
              {/* Column header */}
              <div
                className="flex items-center gap-2 px-3 py-2.5 rounded-t-xl mb-2"
                style={{ backgroundColor: color + '18', borderBottom: `2px solid ${color}` }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                <span className="text-xs font-semibold text-slate-700">{label}</span>
                <span
                  className="ml-auto text-xs font-bold px-1.5 py-0.5 rounded-full text-white"
                  style={{ backgroundColor: color }}
                >
                  {stageLeads.length}
                </span>
              </div>

              {/* Cards */}
              <div className="space-y-2">
                {stageLeads.map(lead => (
                  <LeadCard key={lead.id} lead={lead} />
                ))}
                {stageLeads.length === 0 && (
                  <div className="border-2 border-dashed border-slate-200 rounded-xl h-20 flex items-center justify-center">
                    <span className="text-xs text-slate-300">Sin leads</span>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}
