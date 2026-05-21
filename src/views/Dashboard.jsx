import { LEADS, PIPELINE_STAGES } from '../data/mockData'
import { Badge, formatDateTime } from '../helpers'
import { IcoClock } from '../components/Icons'

function StatCard({ label, value, sub, valueClass = 'text-navy' }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
      <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">{label}</p>
      <p className={`text-2xl font-bold ${valueClass} mb-0.5`}>{value}</p>
      {sub && <p className="text-xs text-slate-400">{sub}</p>}
    </div>
  )
}

export default function Dashboard() {
  const total       = LEADS.length
  const reuniones   = LEADS.filter(l => ['Reunión Agendada','Reunión Realizada','Cliente'].includes(l.estado)).length
  const clientes    = LEADS.filter(l => l.estado === 'Cliente').length
  const ingresos    = LEADS.filter(l => l.montoReunion > 0).length * 70
  const tasa        = Math.round((reuniones / total) * 100)
  const proximas    = LEADS.filter(l => l.estado === 'Reunión Agendada')

  return (
    <div className="p-4 lg:p-6 space-y-6">

      {/* KPI cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Leads"         value={total}          sub="Este mes"                          valueClass="text-navy"    />
        <StatCard label="Reuniones"           value={reuniones}      sub={`${tasa}% del total`}              valueClass="text-amber-600" />
        <StatCard label="Ingresos Reuniones"  value={`S/. ${ingresos}`} sub={`${reuniones} citas a S/. 70`}  valueClass="text-emerald-600" />
        <StatCard label="Clientes Activos"    value={clientes}       sub="Proceso en curso"                  valueClass="text-purple-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Recent activity */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-semibold text-slate-800 text-sm">Actividad Reciente</h3>
            <span className="text-xs text-slate-400">Mayo 2026</span>
          </div>
          <div className="divide-y divide-slate-50">
            {LEADS.slice(0, 8).map(lead => (
              <div key={lead.id} className="flex items-center gap-3 px-5 py-3 hover:bg-slate-50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center text-xs font-semibold text-navy flex-shrink-0">
                  {lead.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-700 truncate">{lead.nombre}</p>
                  <p className="text-xs text-slate-400">{lead.servicio} · {lead.anuncio}</p>
                </div>
                <div className="flex-shrink-0">
                  <Badge estado={lead.estado} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-4">

          {/* Pipeline summary */}
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100">
              <h3 className="font-semibold text-slate-800 text-sm">Estado del Pipeline</h3>
            </div>
            <div className="p-4 space-y-3">
              {PIPELINE_STAGES.map(({ id: stage, color }) => {
                const count = LEADS.filter(l => l.estado === stage).length
                const pct   = Math.round((count / total) * 100)
                return (
                  <div key={stage}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600">{stage}</span>
                      <span className="font-semibold text-slate-700">{count}</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${pct}%`, backgroundColor: color }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Upcoming meetings */}
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100">
              <h3 className="font-semibold text-slate-800 text-sm">Proximas Reuniones</h3>
            </div>
            <div className="p-3 space-y-2">
              {proximas.length === 0 && (
                <p className="text-xs text-slate-400 px-2 py-1">Sin reuniones agendadas</p>
              )}
              {proximas.map(l => (
                <div key={l.id} className="flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
                  <IcoClock s={13} />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-amber-800 truncate">{l.nombre.split(' ').slice(0, 2).join(' ')}</p>
                    <p className="text-xs text-amber-600">{formatDateTime(l.fechaReunion)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Services breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {['Pensión de Alimentos', 'Divorcio'].map(srv => {
          const srvLeads = LEADS.filter(l => l.servicio === srv)
          const srvConv  = srvLeads.filter(l => ['Reunión Agendada','Reunión Realizada','Cliente'].includes(l.estado)).length
          const isAlim   = srv === 'Pensión de Alimentos'
          return (
            <div key={srv} className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${isAlim ? 'bg-navy' : 'bg-gold'}`} />
                <span className="font-semibold text-slate-700 text-sm">{srv}</span>
                <span className="ml-auto text-xs text-slate-400">{srvLeads.length} leads</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-xl font-bold text-slate-800">{srvLeads.length}</p>
                  <p className="text-xs text-slate-400">Leads</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-amber-600">{srvConv}</p>
                  <p className="text-xs text-slate-400">Reuniones</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-emerald-600">S/. {srvConv * 70}</p>
                  <p className="text-xs text-slate-400">Ingresos</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}
