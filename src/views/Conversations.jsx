import { useState } from 'react'
import { LEADS, CONVERSATIONS } from '../data/mockData'
import { Badge, Avatar } from '../helpers'
import { IcoSearch, IcoPhone, IcoClock } from '../components/Icons'

function LeadInfo({ lead }) {
  return (
    <div className="w-72 flex-shrink-0 border-l border-slate-100 bg-slate-50/50 p-4 space-y-4 overflow-y-auto hidden xl:block">
      {/* Header */}
      <div className="bg-navy rounded-xl p-4 text-white">
        <div className="flex items-center gap-3 mb-3">
          <Avatar initials={lead.avatar} size="lg" bg="#c9a84c" />
          <div>
            <p className="font-semibold text-sm leading-tight">{lead.nombre}</p>
            <p className="text-white/60 text-xs mt-0.5">{lead.servicio}</p>
          </div>
        </div>
        <Badge estado={lead.estado} />
      </div>

      {/* Details */}
      <div className="space-y-3">
        <div className="bg-white rounded-xl border border-slate-100 p-3 space-y-2">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Datos de Contacto</p>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <IcoPhone s={13} />
            <span>{lead.telefono}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <span className="text-xs bg-slate-100 px-2 py-0.5 rounded font-medium">{lead.anuncio}</span>
          </div>
          {lead.fechaReunion && (
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <IcoClock s={13} />
              <span className="text-xs">
                {new Date(lead.fechaReunion).toLocaleDateString('es-PE', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          )}
        </div>

        {lead.resumen && (
          <div className="bg-white rounded-xl border border-slate-100 p-3">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Resumen del Caso</p>
            <p className="text-xs text-slate-600 leading-relaxed">{lead.resumen}</p>
          </div>
        )}

        {lead.montoReunion > 0 && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center justify-between">
            <span className="text-xs text-emerald-700 font-medium">Reunion pagada</span>
            <span className="text-sm font-bold text-emerald-700">S/. {lead.montoReunion}</span>
          </div>
        )}
      </div>
    </div>
  )
}

// Leads that have conversations
const CONV_IDS = Object.keys(CONVERSATIONS).map(Number)
const CONV_LEADS = LEADS.filter(l => CONV_IDS.includes(l.id))

export default function Conversations() {
  const [activeLead, setActiveLead] = useState(CONV_LEADS[0])
  const [search, setSearch]         = useState('')
  const [showChat, setShowChat]     = useState(false)   // mobile toggle

  const filtered = CONV_LEADS.filter(l =>
    l.nombre.toLowerCase().includes(search.toLowerCase())
  )

  const messages = activeLead ? (CONVERSATIONS[activeLead.id] ?? []) : []

  function selectLead(lead) {
    setActiveLead(lead)
    setShowChat(true)
  }

  return (
    <div className="flex h-full overflow-hidden" style={{ height: 'calc(100vh - 57px)' }}>

      {/* Conversation list */}
      <div className={`w-full sm:w-72 lg:w-80 flex-shrink-0 border-r border-slate-100 bg-white flex flex-col ${showChat ? 'hidden sm:flex' : 'flex'}`}>
        <div className="p-3 border-b border-slate-100">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <IcoSearch s={15} />
            </span>
            <input
              type="text"
              placeholder="Buscar conversación..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-navy/40 focus:bg-white transition-colors"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto divide-y divide-slate-50">
          {filtered.map(lead => {
            const msgs    = CONVERSATIONS[lead.id] ?? []
            const last    = msgs[msgs.length - 1]
            const isActive = activeLead?.id === lead.id
            return (
              <button
                key={lead.id}
                onClick={() => selectLead(lead)}
                className={`w-full flex items-start gap-3 px-4 py-3 text-left hover:bg-slate-50 transition-colors ${isActive ? 'bg-navy/5 border-l-2 border-navy' : ''}`}
              >
                <Avatar initials={lead.avatar} size="md" bg={isActive ? '#1a2e4a' : '#94a3b8'} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className={`text-sm font-medium truncate ${isActive ? 'text-navy' : 'text-slate-700'}`}>
                      {lead.nombre}
                    </p>
                    {last && <span className="text-xs text-slate-400 flex-shrink-0 ml-1">{last.hora}</span>}
                  </div>
                  <p className="text-xs text-slate-400 truncate">
                    {last ? last.texto : 'Sin mensajes'}
                  </p>
                  <div className="mt-1">
                    <Badge estado={lead.estado} />
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Chat window */}
      <div className={`flex-1 flex flex-col min-w-0 bg-white ${showChat || 'hidden sm:flex'}`}>
        {activeLead ? (
          <>
            {/* Chat header */}
            <div className="px-4 lg:px-5 py-3 border-b border-slate-100 flex items-center gap-3">
              <button
                className="sm:hidden p-1 text-slate-500 hover:text-navy"
                onClick={() => setShowChat(false)}
              >
                ←
              </button>
              <Avatar initials={activeLead.avatar} size="md" bg="#1a2e4a" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-800 text-sm">{activeLead.nombre}</p>
                <p className="text-xs text-slate-400">{activeLead.servicio} · {activeLead.telefono}</p>
              </div>
              <Badge estado={activeLead.estado} />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 lg:p-5 space-y-3">
              {messages.map(msg => {
                const isAgent = msg.rol === 'agente'
                return (
                  <div key={msg.id} className={`flex gap-2 ${isAgent ? 'justify-start' : 'justify-end'}`}>
                    {isAgent && (
                      <div className="w-7 h-7 rounded-full bg-navy/10 flex items-center justify-center text-xs font-bold text-navy flex-shrink-0 mt-0.5">
                        SJ
                      </div>
                    )}
                    <div className="max-w-sm lg:max-w-md">
                      <div className={`px-3.5 py-2.5 text-sm leading-relaxed ${isAgent ? 'bubble-agent' : 'bubble-client'}`}>
                        {msg.texto}
                      </div>
                      <p className={`text-xs text-slate-400 mt-1 ${isAgent ? 'text-left' : 'text-right'}`}>
                        {msg.hora} · {isAgent ? 'Agente' : 'Cliente'}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-slate-400 text-sm">
            Selecciona una conversación
          </div>
        )}
      </div>

      {/* Lead info panel */}
      {activeLead && <LeadInfo lead={activeLead} />}
    </div>
  )
}
