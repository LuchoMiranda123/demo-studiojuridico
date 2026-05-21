import { useEffect, useRef } from 'react'
import {
  Chart as ChartJS,
  CategoryScale, LinearScale,
  PointElement, LineElement,
  BarElement, ArcElement,
  Title, Tooltip, Legend, Filler,
} from 'chart.js'
import { Line, Bar, Doughnut } from 'react-chartjs-2'
import { LEADS, METRICS_DATA } from '../data/mockData'

ChartJS.register(
  CategoryScale, LinearScale,
  PointElement, LineElement,
  BarElement, ArcElement,
  Title, Tooltip, Legend, Filler
)

const NAVY = '#1a2e4a'
const GOLD = '#c9a84c'

const baseOpts = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
}

function ChartCard({ title, children, height = 200 }) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
      <p className="text-sm font-semibold text-slate-700 mb-4">{title}</p>
      <div style={{ height }}>{children}</div>
    </div>
  )
}

function KPI({ label, value, sub, valueClass = 'text-navy' }) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
      <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">{label}</p>
      <p className={`text-2xl font-bold ${valueClass}`}>{value}</p>
      {sub && <p className="text-xs text-slate-400 mt-0.5">{sub}</p>}
    </div>
  )
}

export default function Metrics() {
  const total       = LEADS.length
  const reuniones   = LEADS.filter(l => ['Reunión Agendada','Reunión Realizada','Cliente'].includes(l.estado)).length
  const ingresos    = LEADS.filter(l => l.montoReunion > 0).length * 70
  const conversion  = Math.round((reuniones / total) * 100)

  /* ── Reuniones por día ── */
  const lineData = {
    labels:   METRICS_DATA.reunionesPorDia.labels,
    datasets: [{
      data:            METRICS_DATA.reunionesPorDia.data,
      borderColor:     NAVY,
      backgroundColor: NAVY + '18',
      fill:            true,
      tension:         0.4,
      pointBackgroundColor: NAVY,
      pointRadius:     3,
    }],
  }
  const lineOpts = {
    ...baseOpts,
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 1, font: { size: 11 } }, grid: { color: '#f1f5f9' } },
      x: { ticks: { font: { size: 10 }, maxRotation: 45 }, grid: { display: false } },
    },
  }

  /* ── Ingresos por semana ── */
  const barData = {
    labels:   METRICS_DATA.ingresosPorSemana.labels,
    datasets: [{
      data:            METRICS_DATA.ingresosPorSemana.data,
      backgroundColor: [NAVY, NAVY + 'bb', GOLD, GOLD + 'bb'],
      borderRadius:    6,
    }],
  }
  const barOpts = {
    ...baseOpts,
    scales: {
      y: { beginAtZero: true, ticks: { callback: v => `S/. ${v}`, font: { size: 11 } }, grid: { color: '#f1f5f9' } },
      x: { ticks: { font: { size: 11 } }, grid: { display: false } },
    },
  }

  /* ── Por servicio (donut) ── */
  const donutData = {
    labels:   METRICS_DATA.porServicio.labels,
    datasets: [{
      data:            METRICS_DATA.porServicio.data,
      backgroundColor: [NAVY, GOLD],
      borderWidth:     0,
      hoverOffset:     4,
    }],
  }
  const donutOpts = {
    ...baseOpts,
    plugins: {
      legend: {
        display:  true,
        position: 'bottom',
        labels:   { font: { size: 11 }, padding: 12, boxWidth: 12 },
      },
    },
    cutout: '65%',
  }

  /* ── Leads por anuncio ── */
  const anuncioData = {
    labels:   METRICS_DATA.porAnuncio.labels,
    datasets: [{
      data:            METRICS_DATA.porAnuncio.data,
      backgroundColor: [NAVY, GOLD],
      borderRadius:    6,
      barThickness:    40,
    }],
  }
  const anuncioOpts = {
    ...baseOpts,
    indexAxis: 'y',
    scales: {
      x: { beginAtZero: true, ticks: { stepSize: 2, font: { size: 11 } }, grid: { color: '#f1f5f9' } },
      y: { ticks: { font: { size: 11 } }, grid: { display: false } },
    },
  }

  /* ── Leads por día ── */
  const leadsLineData = {
    labels:   METRICS_DATA.leadsPorDia.labels,
    datasets: [{
      data:            METRICS_DATA.leadsPorDia.data,
      borderColor:     GOLD,
      backgroundColor: GOLD + '18',
      fill:            true,
      tension:         0.4,
      pointBackgroundColor: GOLD,
      pointRadius:     3,
    }],
  }

  return (
    <div className="p-4 lg:p-6 space-y-5">

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPI label="Total Leads"          value={total}               sub="Mayo 2026"              valueClass="text-navy"         />
        <KPI label="Tasa de Conversión"   value={`${conversion}%`}    sub="Leads → Reunión"        valueClass="text-amber-600"    />
        <KPI label="Ingresos (Reuniones)" value={`S/. ${ingresos}`}   sub="A S/. 70 por reunión"   valueClass="text-emerald-600"  />
        <KPI label="Reuniones Cerradas"   value={reuniones}            sub="Este mes"               valueClass="text-purple-600"   />
      </div>

      {/* Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <ChartCard title="Reuniones por día (Mayo 2026)" height={220}>
            <Line data={lineData} options={lineOpts} />
          </ChartCard>
        </div>
        <ChartCard title="Distribución por Servicio" height={220}>
          <Doughnut data={donutData} options={donutOpts} />
        </ChartCard>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartCard title="Ingresos por semana (S/.)" height={200}>
          <Bar data={barData} options={barOpts} />
        </ChartCard>
        <ChartCard title="Leads captados por anuncio" height={200}>
          <Bar data={anuncioData} options={anuncioOpts} />
        </ChartCard>
      </div>

      {/* Row 3 */}
      <ChartCard title="Leads captados por día (Mayo 2026)" height={180}>
        <Line data={leadsLineData} options={lineOpts} />
      </ChartCard>

    </div>
  )
}
