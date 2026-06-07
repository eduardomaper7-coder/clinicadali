import { useEffect } from 'react'

const treatments = [
  {
    name: 'Implantología',
    image:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80',
    note: 'Implantes dentales, coronas y rehabilitaciones para recuperar piezas perdidas con seguridad y estética.',
  },
  {
    name: 'Ortodoncia invisible',
    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
    note: 'Alineadores transparentes para corregir la sonrisa de forma cómoda, discreta y personalizada.',
  },
  {
    name: 'Ortodoncia convencional',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    note: 'Brackets para mejorar la mordida, alinear los dientes y conseguir una sonrisa más armónica.',
  },
  {
    name: 'Periodoncia',
    image: '/tratamiento-odontologia-general.jpeg',
    note: 'Tratamiento de encías, sangrado, inflamación y enfermedad periodontal para cuidar la salud bucal.',
  },
  {
    name: 'Odontología general',
    image: '/tratamiento-odontologia-general.jpeg',
    note: 'Revisiones, limpiezas dentales, empastes, caries y prevención para mantener una boca sana.',
  },
  {
    name: 'Endodoncia',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    note: 'Tratamientos para conservar dientes dañados, aliviar molestias y evitar extracciones innecesarias.',
  },
  {
    name: 'Blanqueamiento dental',
    image: '/tratamiento-estetica-dental.jpg',
    note: 'Tratamiento estético para conseguir una sonrisa más luminosa, cuidada y natural.',
  },
  {
    name: 'Prótesis implantológica',
    image: '/tratamiento-implantes-protesis.jpg',
    note: 'Prótesis sobre implantes para recuperar funcionalidad, comodidad y estética en la sonrisa.',
  },
  {
    name: 'Prótesis fija',
    image: '/tratamiento-implantes-protesis.jpg',
    note: 'Coronas, puentes y restauraciones fijas para devolver forma, resistencia y estética dental.',
  },
  {
    name: 'Diseño de sonrisa',
    image: '/tratamiento-estetica-dental.jpg',
    note: 'Tratamientos estéticos para mejorar color, forma, proporción y armonía de la sonrisa.',
  },
  {
    name: 'Bruxismo y A.T.M.',
    image: '/tratamiento-ortodoncia.jpeg',
    note: 'Férulas de descarga y soluciones para molestias mandibulares, desgaste dental y tensión muscular.',
  },
  {
    name: 'Cirugía oral',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    note: 'Extracciones, cordales y otros procedimientos quirúrgicos dentales con atención profesional.',
  },
]

const stats = [
  {
    value: '5★',
    label: 'Valoración en Google',
  },
  {
    value: '100%',
    label: 'Atención personalizada',
  },
  {
    value: 'Parla',
    label: 'Clínica cercana',
  },
]

const AllTreatments = () => {
  const phone = '675993093'

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  const whatsappUrl = `https://wa.me/34${phone}?text=${encodeURIComponent(
    'Hola, me gustaría recibir más información sobre los tratamientos en Clínica Dali Dent Parla.'
  )}`

  return (
    <main className="bg-gradient-to-b from-white via-[#f4f8ff] to-white pb-20 pt-40">
      <section className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-extrabold uppercase tracking-[0.18em] text-blue-700">
            Tratamientos dentales
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Tratamientos dentales en Parla para cuidar tu sonrisa
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            En Clínica Dali Dent Parla ofrecemos tratamientos personalizados
            para cuidar tu salud bucodental, recuperar la funcionalidad y
            mejorar la estética de tu sonrisa con una atención cercana y
            profesional.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-2xl bg-green-500 px-8 py-4 text-lg font-extrabold text-white shadow-xl transition hover:bg-green-600"
          >
            Pedir información por WhatsApp
          </a>
        </div>

        <div className="mb-16 grid gap-5 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-blue-100 bg-white px-6 py-8 text-center shadow-[0_18px_50px_rgba(15,23,42,0.07)]"
            >
              <p className="text-4xl font-extrabold text-blue-700">
                {stat.value}
              </p>
              <p className="mt-2 text-base font-semibold text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mb-12 max-w-5xl rounded-[2rem] border border-blue-100 bg-white px-6 py-8 text-center shadow-[0_18px_50px_rgba(15,23,42,0.07)]">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Odontología personalizada para cada paciente
          </h2>

          <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-slate-600">
            Cada sonrisa es diferente. Por eso valoramos tu caso de forma
            individual y te orientamos con claridad para encontrar el tratamiento
            más adecuado según tus necesidades, tu salud bucodental y tus
            objetivos estéticos.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(37,99,235,0.16)]"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={`${treatment.name} en Clínica Dali Dent Parla`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/5 to-transparent"></div>

                <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold text-blue-700 shadow-md">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-extrabold text-slate-900">
                  {treatment.name}
                </h2>

                <p className="mt-3 text-base leading-7 text-slate-600">
                  {treatment.note}
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex font-extrabold text-blue-700 transition hover:text-blue-900"
                >
                  Más información →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-5xl rounded-[2rem] bg-slate-900 px-8 py-10 text-center shadow-2xl">
          <h2 className="text-3xl font-extrabold text-white">
            ¿Necesitas un tratamiento personalizado?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/75">
            Escríbenos y te orientaremos de forma cercana para ayudarte a elegir
            la mejor solución para tu caso.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-green-500 px-8 py-4 text-lg font-extrabold text-white shadow-xl transition hover:bg-green-600"
            >
              WhatsApp
            </a>

            <a
              href={`tel:${phone}`}
              className="rounded-2xl border-2 border-white px-8 py-4 text-lg font-extrabold text-white transition hover:bg-white hover:text-blue-700"
            >
              Llamar ahora
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AllTreatments