import { useState } from 'react'
import { LEADS } from '../data/mockData'
import { Badge, formatDateTime, ESTADO_COLORS } from '../helpers'
import { IcoSearch, IcoFilter, IcoPhone } from '../components/Icons'

const SERVICIOS = ['Todos', 'Pensión de Alimentos', 'Divorcio']
const ESTADOS   = ['Todos', 'Nuevo', 'Interesado', 'Reunión Agendada', 'Reunión Realizada', 'Cliente']

export default function Leads() {
  const [search,   setSearch]   = useState('')
  const [servicio, setServicio] = useState('Todos')
  const [estado,   setEstado]   = useState('Todos')

  const filtered = LEADS.filter(l => {
    const matchSearch   = l.nombre.toLowerCase().includes(search.toLowerCase()) ||
                          l.telefono.includes(search)
    const matchServicio = servicio === 'Todos' || l.servicio === servicio
    const matchEstado   = estado   === 'Todos' || l.estado   === estado
    return matchSearch && matchServicio && matchEstado
  })

  return (
    <div className="p-4 lg:p-6 space-y-4">

      {/* Filters */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><IcoSearch s={15} /></span>
          <input
            type="text"
            placeholder="Buscar por nombre o teléfono..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-navy/40 focus:bg-white transition-colors"
          />
        </div>
        <select
          value={servicio}
          onChange={e => setServicio(e.target.value)}
          className="py-2 px-3 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-navy/40 text-slate-700"
        >
          {SERVICIOS.map(s => <option key={s}>{s}</option>)}
        </select>
        <select
          value={estado}
          onChange={e => setEstado(e.target.value)}
          className="py-2 px-3 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-navy/40 text-slate-700"
        >
          {ESTADOS.map(s => <option key={s}>{s}</option>)}
        </select>
      </div>

      {/* Stats row */}
      <div className="flex items-center gap-4 text-xs text-slate-500">
        <span>{filtered.length} resultado{filtered.length !== 1 ? 's' : ''}</span>
        <span className="text-slate-300">|</span>
        <span>{LEADS.length} leads en total</span>
      </div>

      {/* Table (desktop) */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden hidden sm:block">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/80">
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Lead</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Teléfono</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Servicio</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Anuncio</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Estado</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Reunion</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Monto</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map(lead => (
                <tr key={lead.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center text-xs font-semibold text-navy flex-shrink-0">
                        {lead.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">{lead.nombre}</p>
                        <p className="text-xs text-slate-400">{lead.createdAt}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <IcoPhone s={12} />
                      {lead.telefono}
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${lead.servicio === 'Pensión de Alimentos' ? 'bg-navy' : 'bg-gold'}`} />
                      <span className="text-slate-600">{lead.servicio}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-slate-500">{lead.anuncio}</td>
                  <td className="px-4 py-3.5"><Badge estado={lead.estado} /></td>
                  <td className="px-4 py-3.5 text-slate-500 text-xs">{formatDateTime(lead.fechaReunion)}</td>
                  <td className="px-5 py-3.5 text-right">
                    {lead.montoReunion > 0
                      ? <span className="font-semibold text-emerald-600">S/. {lead.montoReunion}</span>
                      : <span className="text-slate-300">—</span>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cards (mobile) */}
      <div className="sm:hidden space-y-3">
        {filtered.map(lead => (
          <div key={lead.id} className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-navy/10 flex items-center justify-center text-xs font-semibold text-navy">
                {lead.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-800 truncate">{lead.nombre}</p>
                <p className="text-xs text-slate-400">{lead.telefono}</p>
              </div>
              <Badge estado={lead.estado} />
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>{lead.servicio}</span>
              <span>{lead.anuncio}</span>
              {lead.montoReunion > 0 && (
                <span className="font-semibold text-emerald-600">S/. {lead.montoReunion}</span>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
