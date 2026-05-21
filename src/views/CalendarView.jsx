import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin  from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin     from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import { CALENDAR_EVENTS, LEADS } from '../data/mockData'
import { Badge, formatDateTime } from '../helpers'
import { IcoX, IcoPhone, IcoClock } from '../components/Icons'

function EventModal({ lead, eventTitle, onClose }) {
  if (!lead) return null
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-navy px-5 py-4 flex items-start justify-between">
          <div>
            <p className="text-white/60 text-xs mb-0.5">Reunión de Evaluación</p>
            <h3 className="text-white font-semibold text-base">{lead.nombre}</h3>
          </div>
          <button onClick={onClose} className="text-white/60 hover:text-white mt-0.5">
            <IcoX s={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <Badge estado={lead.estado} />
            <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full font-medium">
              {lead.servicio}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <IcoPhone s={13} />
              <span>{lead.telefono}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <IcoClock s={13} />
              <span>{formatDateTime(lead.fechaReunion)}</span>
            </div>
          </div>

          {lead.resumen && (
            <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                Resumen del caso
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">{lead.resumen}</p>
            </div>
          )}

          <div className="flex items-center justify-between pt-1">
            <span className="text-xs text-slate-500">{lead.anuncio}</span>
            {lead.montoReunion > 0 && (
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                S/. {lead.montoReunion} pagado
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CalendarView() {
  const [selectedLead, setSelectedLead] = useState(null)
  const [eventTitle, setEventTitle]     = useState('')

  function handleEventClick({ event }) {
    const leadId = event.extendedProps.leadId
    const lead   = LEADS.find(l => l.id === leadId)
    setSelectedLead(lead ?? null)
    setEventTitle(event.title)
  }

  return (
    <div className="p-4 lg:p-6 space-y-4">

      {/* Legend */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-navy" />
          <span className="text-xs text-slate-600">Pensión de Alimentos</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-gold" />
          <span className="text-xs text-slate-600">Divorcio</span>
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 lg:p-5">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          initialDate="2026-05-01"
          locale="es"
          headerToolbar={{
            left:   'prev,next today',
            center: 'title',
            right:  'dayGridMonth,timeGridWeek,listWeek',
          }}
          buttonText={{
            today:        'Hoy',
            month:        'Mes',
            week:         'Semana',
            list:         'Lista',
          }}
          events={CALENDAR_EVENTS}
          eventClick={handleEventClick}
          height="auto"
          fixedWeekCount={false}
          dayMaxEvents={3}
        />
      </div>

      {selectedLead && (
        <EventModal
          lead={selectedLead}
          eventTitle={eventTitle}
          onClose={() => setSelectedLead(null)}
        />
      )}
    </div>
  )
}
