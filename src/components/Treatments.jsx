import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Odontología general',
    badge: 'Prevención y salud',
    description:
      'Revisiones, limpiezas dentales, empastes y tratamientos preventivos para mantener una excelente salud bucodental y detectar cualquier problema a tiempo.',
    image: '/tratamiento-odontologia-general.jpeg',
  },
  {
    title: 'Ortodoncia',
    badge: 'Sonrisa alineada',
    description:
      'Tratamientos de ortodoncia para corregir la posición de los dientes, mejorar la mordida y conseguir una sonrisa más estética, funcional y armoniosa.',
    image: '/tratamiento-ortodoncia.jpeg',
  },
  {
    title: 'Estética dental',
    badge: 'Diseño de sonrisa',
    description:
      'Blanqueamiento dental, carillas y tratamientos estéticos personalizados para mejorar la apariencia de tu sonrisa de forma natural y segura.',
    image: '/tratamiento-estetica-dental.jpg',
  },
  {
    title: 'Implantes y prótesis',
    badge: 'Recupera tu sonrisa',
    description:
      'Implantes dentales y prótesis adaptadas a cada paciente para recuperar piezas perdidas, mejorar la masticación y devolver la confianza al sonreír.',
    image: '/tratamiento-implantes-protesis.jpg',
  },
]

const Treatments = () => {
  const phone = '675993093'
  const whatsappUrl = `https://wa.me/34${phone}?text=${encodeURIComponent(
    'Hola, me gustaría recibir más información sobre los tratamientos en Clínica Dali Dent Parla.'
  )}`

  return (
    <section
      id="tratamientos"
      className="relative scroll-mt-32 overflow-hidden bg-gradient-to-b from-white via-[#f4f8ff] to-white py-24"
    >
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl"></div>
      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-cyan-100/70 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Tratamientos dentales
          </span>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Cuidamos tu sonrisa con tratamientos personalizados
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 sm:text-xl">
            En Clínica Dali Dent Parla combinamos atención cercana,
            diagnóstico profesional y soluciones adaptadas a cada paciente.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-[2rem] border border-blue-100/70 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(37,99,235,0.16)]"
            >
              <div className="grid h-full sm:grid-cols-[42%_58%]">
                <div className="relative min-h-[240px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent"></div>

                  <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-extrabold text-blue-700 shadow-lg">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <div className="flex flex-col justify-between p-7">
                  <div>
                    <span className="inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-700">
                      {service.badge}
                    </span>

                    <h3 className="mt-4 text-2xl font-extrabold text-slate-900">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-base leading-8 text-slate-600">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-7 flex items-center justify-between gap-4">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-extrabold text-white shadow-lg transition hover:bg-blue-800"
                    >
                      Consultar tratamiento
                    </a>

                    <span className="text-2xl text-blue-700 transition group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/tratamientos"
            className="inline-flex rounded-2xl border-2 border-blue-700 px-8 py-4 text-base font-extrabold text-blue-700 shadow-lg transition hover:bg-blue-700 hover:text-white"
          >
            Ver todos los tratamientos
          </Link>
        </div>

        <div className="mt-14 rounded-[2rem] bg-slate-900 px-6 py-8 text-center shadow-2xl sm:px-10">
          <h3 className="text-2xl font-extrabold text-white">
            ¿No sabes qué tratamiento necesitas?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-white/75">
            Escríbenos y te orientamos para encontrar la solución más adecuada
            para tu caso.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 rounded-xl bg-green-500 px-7 py-4 text-base font-extrabold text-white shadow-xl transition hover:bg-green-600"
          >
            <img src="/whatsapp.png" alt="WhatsApp" className="h-6 w-6" />
            Pedir orientación por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Treatments