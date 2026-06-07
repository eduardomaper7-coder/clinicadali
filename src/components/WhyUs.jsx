import { useEffect, useState } from 'react'

const slides = [
  {
    image: '/clinica-dali-dent-equipo.jpeg',
    alt: 'Equipo de Clínica Dali Dent Parla',
    badge: 'Atención cercana desde el primer momento',
  },
  {
    image: '/clinica-dali-dent-gabinete.jpeg',
    alt: 'Gabinete dental de Clínica Dali Dent Parla',
    badge: 'Instalaciones preparadas para cuidar tu sonrisa',
  },
  {
    image: '/clinica-dali-dent-paciente.jpeg',
    alt: 'Paciente en Clínica Dali Dent Parla',
    badge: 'Tratamientos personalizados para cada paciente',
  },
  {
    image: '/clinica-dali-dent-paciente-2.jpeg',
    alt: 'Paciente sonriendo tras su tratamiento',
    badge: 'Resultados que mejoran tu confianza y bienestar',
  },
]

const values = [
  {
    icon: '✨',
    title: 'Atención personalizada',
    text: 'Estudiamos tu caso con detalle para recomendarte el tratamiento más adecuado.',
  },
  {
    icon: '🤝',
    title: 'Trato cercano',
    text: 'Queremos que te sientas cómodo, escuchado y seguro en cada visita.',
  },
  {
    icon: '🦷',
    title: 'Salud y estética dental',
    text: 'Cuidamos la salud de tu boca y mejoramos la estética de tu sonrisa.',
  },
  {
    icon: '👩‍⚕️',
    title: 'Experiencia profesional',
    text: 'Te acompañamos con explicaciones claras, honestas y soluciones eficaces.',
  },
]

const WhyUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
  id="porque-dali-dent"
  className="relative scroll-mt-32 overflow-hidden bg-gradient-to-b from-white via-[#f4f8ff] to-white py-24"
>
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl"></div>
      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-cyan-100/70 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-extrabold uppercase tracking-[0.18em] text-blue-700">
            Nuestra clínica
          </span>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Una clínica dental en Parla pensada para cuidar de ti
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            En Clínica Dali Dent Parla combinamos atención cercana,
            tratamientos personalizados y un entorno profesional para que cada
            visita sea cómoda, clara y de confianza.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {values.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(37,99,235,0.14)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                  {item.icon}
                </div>

                <h3 className="text-xl font-extrabold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-6 -top-6 h-32 w-32 rounded-[2rem] bg-blue-700/10"></div>
          <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-[2rem] bg-blue-700"></div>

          <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-[0_28px_90px_rgba(15,23,42,0.18)]">
            <div className="relative h-[520px] w-full">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt={slide.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                    currentSlide === index
                      ? 'scale-100 opacity-100'
                      : 'scale-105 opacity-0'
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-3xl bg-white/95 p-5 shadow-xl backdrop-blur">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Dali Dent Parla
                  </p>

                  <p className="mt-2 text-xl font-extrabold text-slate-900">
                    {slides[currentSlide].badge}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 flex items-center justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  currentSlide === index
                    ? 'w-10 bg-blue-700'
                    : 'w-3 bg-slate-300 hover:bg-blue-300'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs