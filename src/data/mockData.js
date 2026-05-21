/* ─── LEADS ─────────────────────────────────────────────────────── */
export const LEADS = [
  { id:  1, nombre: 'Ana Torres Quispe',       telefono: '956 234 781', servicio: 'Pensión de Alimentos', anuncio: 'Anuncio 1', estado: 'Cliente',           fechaReunion: '2026-05-05T10:00', montoReunion: 70, resumen: 'Padre no pasa manutención desde enero 2026. Dos hijos menores de 5 y 8 años. Tiene pruebas de convivencia y mensajes de WhatsApp.', avatar: 'AT', createdAt: '2026-05-01' },
  { id:  2, nombre: 'Carmen Huanca López',      telefono: '987 654 321', servicio: 'Divorcio',             anuncio: 'Anuncio 2', estado: 'Reunión Realizada', fechaReunion: '2026-05-07T11:00', montoReunion: 70, resumen: 'Separada de hecho hace 2 años. Busca divorcio por causal. Hay un departamento en común en Miraflores.', avatar: 'CH', createdAt: '2026-05-01' },
  { id:  3, nombre: 'Rosa Mamani Flores',       telefono: '945 876 234', servicio: 'Pensión de Alimentos', anuncio: 'Anuncio 1', estado: 'Reunión Agendada', fechaReunion: '2026-05-22T09:00', montoReunion: 70, resumen: 'Ex pareja niega paternidad. Hijo de 3 años. Necesita proceso de reconocimiento de paternidad y alimentos de forma urgente.', avatar: 'RM', createdAt: '2026-05-03' },
  { id:  4, nombre: 'Lucia Vargas Soto',        telefono: '912 345 678', servicio: 'Divorcio',             anuncio: 'Anuncio 2', estado: 'Reunión Agendada', fechaReunion: '2026-05-22T16:00', montoReunion: 70, resumen: 'Matrimonio de 8 años. Infidelidad comprobada. Quiere divorcio y custodia compartida de dos hijos de 6 y 9 años.', avatar: 'LV', createdAt: '2026-05-04' },
  { id:  5, nombre: 'Patricia Condori Ramos',   telefono: '978 123 456', servicio: 'Pensión de Alimentos', anuncio: 'Anuncio 1', estado: 'Interesado',        fechaReunion: null,               montoReunion: 0,  resumen: 'Padre trabaja en empresa formal pero alega no tener ingresos. Tiene 1 hijo de 7 años. Busca retención judicial de haberes.', avatar: 'PC', createdAt: '2026-05-05' },
  { id:  6, nombre: 'Milagros Espinoza Cruz',   telefono: '934 567 890', servicio: 'Divorcio',             anuncio: 'Anuncio 2', estado: 'Nuevo',             fechaReunion: null,               montoReunion: 0,  resumen: '', avatar: 'ME', createdAt: '2026-05-06' },
  { id:  7, nombre: 'Elena Quispe Palomino',    telefono: '967 890 123', servicio: 'Pensión de Alimentos', anuncio: 'Anuncio 1', estado: 'Cliente',           fechaReunion: '2026-05-08T10:00', montoReunion: 70, resumen: 'Solicita aumento de alimentos. Actualmente recibe S/. 200 mensuales, pide S/. 500. El padre tiene bodega propia.', avatar: 'EQ', createdAt: '2026-05-02' },
  { id:  8, nombre: 'Sandra Medina Torres',     telefono: '956 789 012', servicio: 'Divorcio',             anuncio: 'Anuncio 2', estado: 'Reunión Realizada', fechaReunion: '2026-05-12T15:00', montoReunion: 70, resumen: 'Divorcio de mutuo acuerdo. Sin hijos en común. Necesita dividir bien inmueble valorizado en S/. 280,000.', avatar: 'SM', createdAt: '2026-05-04' },
  { id:  9, nombre: 'Verónica Chávez Lima',     telefono: '923 456 789', servicio: 'Pensión de Alimentos', anuncio: 'Anuncio 1', estado: 'Interesado',        fechaReunion: null,               montoReunion: 0,  resumen: 'Madre soltera. Padre vive en Arequipa. No reconoce al menor de 2 años. Quiere iniciar demanda.', avatar: 'VC', createdAt: '2026-05-07' },
  { id: 10, nombre: 'Karina Flores Mendoza',    telefono: '945 123 456', servicio: 'Divorcio',             anuncio: 'Anuncio 2', estado: 'Nuevo',             fechaReunion: null,               montoReunion: 0,  resumen: '', avatar: 'KF', createdAt: '2026-05-08' },
  { id: 11, nombre: 'Julia Rojas Castro',       telefono: '989 234 567', servicio: 'Pensión de Alimentos', anuncio: 'Anuncio 1', estado: 'Cliente',           fechaReunion: '2026-05-14T09:00', montoReunion: 70, resumen: 'Caso ganado en primera instancia. Requiere asesoría para ejecución de sentencia. Padre no cumple pago ordenado.', avatar: 'JR', createdAt: '2026-05-03' },
  { id: 12, nombre: 'Natalia Pizarro Inca',     telefono: '912 678 901', servicio: 'Divorcio',             anuncio: 'Anuncio 2', estado: 'Reunión Agendada', fechaReunion: '2026-05-23T11:00', montoReunion: 70, resumen: 'Separación conflictiva. Tiene orden de alejamiento vigente. Busca divorcio urgente por causal de violencia.', avatar: 'NP', createdAt: '2026-05-06' },
  { id: 13, nombre: 'Diana Ccallo Huanca',      telefono: '956 901 234', servicio: 'Pensión de Alimentos', anuncio: 'Anuncio 1', estado: 'Interesado',        fechaReunion: null,               montoReunion: 0,  resumen: 'Tres hijos menores. Padre desapareció sin dar pensión. Necesita localización domiciliaria y demanda de alimentos.', avatar: 'DC', createdAt: '2026-05-09' },
  { id: 14, nombre: 'Isabel Arce Vidal',        telefono: '978 345 678', servicio: 'Divorcio',             anuncio: 'Anuncio 2', estado: 'Reunión Realizada', fechaReunion: '2026-05-15T14:00', montoReunion: 70, resumen: 'Marido reside en España desde 2023. Matrimonio civil. Busca divorcio por separación de hecho. Proceso especial.', avatar: 'IA', createdAt: '2026-05-05' },
  { id: 15, nombre: 'Fátima Lazo Huamán',       telefono: '934 890 123', servicio: 'Pensión de Alimentos', anuncio: 'Anuncio 1', estado: 'Nuevo',             fechaReunion: null,               montoReunion: 0,  resumen: '', avatar: 'FL', createdAt: '2026-05-10' },
  { id: 16, nombre: 'Rocío Bermúdez Tello',     telefono: '967 456 789', servicio: 'Divorcio',             anuncio: 'Anuncio 2', estado: 'Cliente',           fechaReunion: '2026-05-19T10:00', montoReunion: 70, resumen: 'Divorcio por bigamia comprobada. El marido tiene otra familia. Proceso de nulidad matrimonial. Urgente.', avatar: 'RB', createdAt: '2026-05-07' },
  { id: 17, nombre: 'Claudia Neyra Salas',      telefono: '923 789 012', servicio: 'Pensión de Alimentos', anuncio: 'Anuncio 1', estado: 'Reunión Agendada', fechaReunion: '2026-05-28T09:00', montoReunion: 70, resumen: 'El padre presentó demanda de reducción de alimentos. Necesita defensa urgente para mantener el monto actual.', avatar: 'CN', createdAt: '2026-05-10' },
  { id: 18, nombre: 'Paola Alva Gutiérrez',     telefono: '945 012 345', servicio: 'Divorcio',             anuncio: 'Anuncio 2', estado: 'Interesado',        fechaReunion: null,               montoReunion: 0,  resumen: 'Casada hace 15 años. Separación de hecho desde 2024. Quiere iniciar divorcio por separación de hecho de forma legal.', avatar: 'PA', createdAt: '2026-05-11' },
  { id: 19, nombre: 'Mónica Asto Paredes',      telefono: '989 567 890', servicio: 'Pensión de Alimentos', anuncio: 'Anuncio 1', estado: 'Nuevo',             fechaReunion: null,               montoReunion: 0,  resumen: '', avatar: 'MA', createdAt: '2026-05-13' },
  { id: 20, nombre: 'Xiomara Ríos Campos',      telefono: '912 901 234', servicio: 'Divorcio',             anuncio: 'Anuncio 2', estado: 'Nuevo',             fechaReunion: null,               montoReunion: 0,  resumen: '', avatar: 'XR', createdAt: '2026-05-14' },
]

/* ─── PIPELINE STAGES ───────────────────────────────────────────── */
export const PIPELINE_STAGES = [
  { id: 'Nuevo',             label: 'Nuevo',             color: '#64748b' },
  { id: 'Interesado',        label: 'Interesado',        color: '#3b82f6' },
  { id: 'Reunión Agendada',  label: 'Reunión Agendada',  color: '#f59e0b' },
  { id: 'Reunión Realizada', label: 'Reunión Realizada', color: '#8b5cf6' },
  { id: 'Cliente',           label: 'Cliente',           color: '#10b981' },
]

/* ─── CONVERSATIONS ─────────────────────────────────────────────── */
export const CONVERSATIONS = {
  1: [
    { id: 1, rol: 'agente',  texto: 'Hola Ana, soy el asistente de Studio Jurídico. Recibí su consulta sobre pensión de alimentos. ¿Podría contarme brevemente su situación?', hora: '09:32' },
    { id: 2, rol: 'cliente', texto: 'Hola, sí. El padre de mis hijos no paga desde enero. Tengo dos hijos y no sé qué hacer.', hora: '09:35' },
    { id: 3, rol: 'agente',  texto: 'Entiendo su situación, Ana. Es un caso que tiene solución legal. Nuestra abogada especialista puede orientarla en detalle. Para ello contamos con una reunión de evaluación personalizada a S/. 70, donde la Dra. revisará su caso completo y le explicará los pasos a seguir. ¿Le gustaría agendar?', hora: '09:36' },
    { id: 4, rol: 'cliente', texto: 'Sí, me interesa. ¿Cuándo hay disponibilidad?', hora: '09:40' },
    { id: 5, rol: 'agente',  texto: 'Tenemos disponibilidad para el lunes 5 de mayo a las 10:00 am. El pago de S/. 70 se realiza por Yape, Plin o depósito. ¿Le parece bien ese horario?', hora: '09:41' },
    { id: 6, rol: 'cliente', texto: 'Perfecto, lo confirmo. Voy a pagar por Yape.', hora: '09:44' },
    { id: 7, rol: 'agente',  texto: 'Reunión confirmada para el lunes 5 de mayo a las 10:00 am. Le enviaremos el enlace al número registrado. Ante cualquier consulta, estamos a su disposición.', hora: '09:45' },
  ],
  2: [
    { id: 1, rol: 'agente',  texto: 'Buenas tardes, soy el asistente de Studio Jurídico. Vi que tiene una consulta sobre divorcio. ¿Me puede comentar un poco más sobre su caso?', hora: '14:10' },
    { id: 2, rol: 'cliente', texto: 'Hola, llevo 2 años separada de mi esposo y queremos divorciarnos formalmente. Tenemos un departamento en común.', hora: '14:15' },
    { id: 3, rol: 'agente',  texto: 'Un caso con bienes en común requiere una evaluación cuidadosa para proteger sus derechos patrimoniales. Contamos con una reunión de asesoría especializada a S/. 70 donde la Dra. analizará su caso y le presentará las mejores opciones. ¿Le interesaría reservar?', hora: '14:16' },
    { id: 4, rol: 'cliente', texto: '¿Y qué incluye exactamente esa reunión?', hora: '14:20' },
    { id: 5, rol: 'agente',  texto: 'Incluye: análisis completo de su situación, orientación sobre el tipo de divorcio más conveniente, explicación del proceso paso a paso con tiempos estimados, y recomendaciones sobre la división del bien inmueble. Todo con la Dra. personalmente.', hora: '14:21' },
    { id: 6, rol: 'cliente', texto: 'Está bien, quiero agendar.', hora: '14:28' },
    { id: 7, rol: 'agente',  texto: 'Tengo disponibilidad el miércoles 7 de mayo a las 11:00 am. ¿Le funciona ese horario?', hora: '14:29' },
    { id: 8, rol: 'cliente', texto: 'Sí, me va bien.', hora: '14:32' },
    { id: 9, rol: 'agente',  texto: 'Reunión confirmada para el miércoles 7 de mayo a las 11:00 am. El pago de S/. 70 puede realizarse vía Yape o Plin. Le enviaremos los detalles por este medio.', hora: '14:33' },
  ],
  3: [
    { id: 1, rol: 'agente',  texto: 'Hola Rosa, bienvenida a Studio Jurídico. Recibí su consulta sobre pensión de alimentos. ¿Me puede comentar su situación?', hora: '11:05' },
    { id: 2, rol: 'cliente', texto: 'Mi hijo tiene 3 años y el padre no lo reconoce ni da dinero. Necesito ayuda urgente.', hora: '11:08' },
    { id: 3, rol: 'agente',  texto: 'Su caso involucra dos procesos vinculados: reconocimiento de paternidad y demanda de alimentos. Ambos tienen solución legal. Nuestra abogada especialista puede diseñar la estrategia correcta. Le recomiendo una reunión de evaluación a S/. 70 para definir el camino más rápido. ¿Tiene disponibilidad el jueves 22 de mayo a las 9:00 am?', hora: '11:09' },
    { id: 4, rol: 'cliente', texto: 'Sí puedo esa fecha. ¿Cómo pago?', hora: '11:15' },
    { id: 5, rol: 'agente',  texto: 'Puede pagar S/. 70 por Yape, Plin o transferencia. Al confirmar el pago, queda registrada su cita y le enviamos todos los detalles de acceso.', hora: '11:16' },
  ],
  5: [
    { id: 1, rol: 'agente',  texto: 'Buenas tardes Patricia. Gracias por contactar a Studio Jurídico. ¿Cuál es su consulta?', hora: '16:22' },
    { id: 2, rol: 'cliente', texto: 'El padre de mi hijo trabaja en una empresa pero dice que no tiene dinero para la pensión. ¿Qué puedo hacer?', hora: '16:30' },
    { id: 3, rol: 'agente',  texto: 'Si el padre tiene trabajo formal con contrato, existe la posibilidad de solicitar una retención judicial directamente a su empleador, que es muy efectiva. Para analizarlo correctamente, la Dra. puede asesorarla en una reunión de evaluación de S/. 70. ¿Le interesa?', hora: '16:31' },
    { id: 4, rol: 'cliente', texto: 'Me interesa pero quería saber si hay opciones más económicas primero.', hora: '16:45' },
    { id: 5, rol: 'agente',  texto: 'La reunión de S/. 70 es precisamente para revisar su caso completo y darle todas las opciones disponibles, incluyendo las más convenientes para su situación. No implica compromiso alguno. ¿Le agendamos?', hora: '16:46' },
    { id: 6, rol: 'cliente', texto: 'Déjame pensarlo y le aviso.', hora: '16:55' },
    { id: 7, rol: 'agente',  texto: 'Por supuesto, no hay apuro. Cuando esté lista, aquí estaremos. Recuerde que tiene nuestro número para cualquier consulta adicional.', hora: '16:56' },
  ],
  7: [
    { id: 1, rol: 'agente',  texto: 'Hola Elena, buenas tardes. ¿En qué le podemos ayudar hoy?', hora: '10:00' },
    { id: 2, rol: 'cliente', texto: 'Necesito aumentar la pensión de mis hijos. Me pasan 200 soles pero ya no alcanza.', hora: '10:05' },
    { id: 3, rol: 'agente',  texto: 'El proceso de aumento de alimentos es completamente viable. ¿El padre trabaja en empresa o tiene negocio propio?', hora: '10:06' },
    { id: 4, rol: 'cliente', texto: 'Tiene una bodega, negocio propio.', hora: '10:10' },
    { id: 5, rol: 'agente',  texto: 'Con negocio propio se puede demostrar capacidad económica mediante declaraciones y verificación del establecimiento. La Dra. le explicará exactamente cómo en una reunión de asesoría de S/. 70. ¿Tiene disponibilidad el jueves 8 de mayo a las 10:00 am?', hora: '10:11' },
    { id: 6, rol: 'cliente', texto: 'Sí, ese día puedo.', hora: '10:15' },
    { id: 7, rol: 'agente',  texto: 'Reunión confirmada para el jueves 8 de mayo a las 10:00 am. Al abonar S/. 70 por Yape le enviamos la confirmación y el enlace.', hora: '10:16' },
  ],
  9: [
    { id: 1, rol: 'agente',  texto: 'Hola Verónica, bienvenida. ¿En qué le puedo ayudar?', hora: '15:30' },
    { id: 2, rol: 'cliente', texto: 'El padre de mi hijo vive en Arequipa y no lo reconoce. Mi bebé tiene 2 años y nunca ha recibido nada de él.', hora: '15:35' },
    { id: 3, rol: 'agente',  texto: 'Este caso tiene solución incluso a distancia. El proceso de filiación extramatrimonial puede iniciarse aquí en Lima. La Dra. puede asesorarla con una reunión de evaluación de S/. 70. ¿Le interesa conocer el proceso?', hora: '15:36' },
    { id: 4, rol: 'cliente', texto: 'Sí, quiero saber más. ¿Cuándo hay cita?', hora: '15:42' },
    { id: 5, rol: 'agente',  texto: 'Estamos coordinando disponibilidad para la próxima semana. ¿Prefiere horario de mañana o tarde?', hora: '15:43' },
  ],
  12: [
    { id: 1, rol: 'agente',  texto: 'Hola Natalia, soy el asistente de Studio Jurídico. ¿Me puede contar su situación?', hora: '09:15' },
    { id: 2, rol: 'cliente', texto: 'Necesito divorciarme urgente. Mi esposo fue violento y tengo una orden de alejamiento. Quiero que esto termine cuanto antes.', hora: '09:20' },
    { id: 3, rol: 'agente',  texto: 'Entiendo la urgencia y gravedad de su situación. Con una orden de alejamiento vigente, el proceso puede acelerarse. La Dra. conoce bien estos casos y puede trazar la estrategia más rápida posible. Le recomiendo una reunión prioritaria de evaluación a S/. 70. ¿Puede el sábado 23 de mayo a las 11:00 am?', hora: '09:21' },
    { id: 4, rol: 'cliente', texto: 'Sí, ese día puedo. ¿Qué necesito llevar?', hora: '09:28' },
    { id: 5, rol: 'agente',  texto: 'Por ahora solo los datos básicos. Si tiene a mano el DNI, certificado de matrimonio y la orden de alejamiento, puede traerlos el día de la reunión. El pago de S/. 70 confirma la cita.', hora: '09:29' },
    { id: 6, rol: 'cliente', texto: 'Ahora mismo pago por Yape.', hora: '09:32' },
    { id: 7, rol: 'agente',  texto: 'Reunión confirmada para el sábado 23 de mayo a las 11:00 am. La Dra. la atenderá de manera prioritaria. Estaremos en contacto.', hora: '09:33' },
  ],
}

/* ─── CALENDAR EVENTS ───────────────────────────────────────────── */
export const CALENDAR_EVENTS = [
  { id: '1',  title: 'Ana Torres — Alimentos',     start: '2026-05-05T10:00:00', end: '2026-05-05T11:00:00', backgroundColor: '#1a2e4a', borderColor: '#1a2e4a', extendedProps: { leadId: 1  } },
  { id: '2',  title: 'Carmen Huanca — Divorcio',   start: '2026-05-07T11:00:00', end: '2026-05-07T12:00:00', backgroundColor: '#c9a84c', borderColor: '#c9a84c', extendedProps: { leadId: 2  } },
  { id: '7',  title: 'Elena Quispe — Alimentos',   start: '2026-05-08T10:00:00', end: '2026-05-08T11:00:00', backgroundColor: '#1a2e4a', borderColor: '#1a2e4a', extendedProps: { leadId: 7  } },
  { id: '8',  title: 'Sandra Medina — Divorcio',   start: '2026-05-12T15:00:00', end: '2026-05-12T16:00:00', backgroundColor: '#c9a84c', borderColor: '#c9a84c', extendedProps: { leadId: 8  } },
  { id: '11', title: 'Julia Rojas — Alimentos',    start: '2026-05-14T09:00:00', end: '2026-05-14T10:00:00', backgroundColor: '#1a2e4a', borderColor: '#1a2e4a', extendedProps: { leadId: 11 } },
  { id: '14', title: 'Isabel Arce — Divorcio',     start: '2026-05-15T14:00:00', end: '2026-05-15T15:00:00', backgroundColor: '#c9a84c', borderColor: '#c9a84c', extendedProps: { leadId: 14 } },
  { id: '16', title: 'Rocío Bermúdez — Divorcio',  start: '2026-05-19T10:00:00', end: '2026-05-19T11:00:00', backgroundColor: '#c9a84c', borderColor: '#c9a84c', extendedProps: { leadId: 16 } },
  { id: '3',  title: 'Rosa Mamani — Alimentos',    start: '2026-05-22T09:00:00', end: '2026-05-22T10:00:00', backgroundColor: '#1a2e4a', borderColor: '#1a2e4a', extendedProps: { leadId: 3  } },
  { id: '4',  title: 'Lucia Vargas — Divorcio',    start: '2026-05-22T16:00:00', end: '2026-05-22T17:00:00', backgroundColor: '#c9a84c', borderColor: '#c9a84c', extendedProps: { leadId: 4  } },
  { id: '12', title: 'Natalia Pizarro — Divorcio', start: '2026-05-23T11:00:00', end: '2026-05-23T12:00:00', backgroundColor: '#c9a84c', borderColor: '#c9a84c', extendedProps: { leadId: 12 } },
  { id: '17', title: 'Claudia Neyra — Alimentos',  start: '2026-05-28T09:00:00', end: '2026-05-28T10:00:00', backgroundColor: '#1a2e4a', borderColor: '#1a2e4a', extendedProps: { leadId: 17 } },
]

/* ─── METRICS DATA ──────────────────────────────────────────────── */
export const METRICS_DATA = {
  reunionesPorDia: {
    labels: ['01/05','02/05','03/05','04/05','05/05','06/05','07/05','08/05','09/05','10/05','11/05','12/05','13/05','14/05','15/05','16/05','17/05','18/05','19/05','20/05','21/05'],
    data:   [0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
  },
  ingresosPorSemana: {
    labels: ['Sem 1 (1–7)', 'Sem 2 (8–14)', 'Sem 3 (15–21)', 'Sem 4 (22–28)'],
    data:   [140, 280, 210, 280],
  },
  porServicio: {
    labels: ['Pensión de Alimentos', 'Divorcio'],
    data:   [12, 8],
  },
  porAnuncio: {
    labels: ['Anuncio 1', 'Anuncio 2'],
    data:   [12, 8],
  },
  leadsPorDia: {
    labels: ['01/05','02/05','03/05','04/05','05/05','06/05','07/05','08/05','09/05','10/05','11/05','12/05','13/05','14/05','15/05','16/05','17/05','18/05','19/05','20/05','21/05'],
    data:   [2, 1, 2, 1, 1, 2, 2, 1, 1, 2, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
  },
}
