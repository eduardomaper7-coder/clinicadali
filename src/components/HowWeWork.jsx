import { FaStethoscope, FaMagic, FaAward, FaUsers } from 'react-icons/fa'

const features = [
  {
    icon: <FaStethoscope />,
    title: 'Valoración y diagnóstico personalizado',
    text: 'Estudiamos tu caso en detalle para ofrecerte el tratamiento más adecuado según tus necesidades.',
  },
  {
    icon: <FaMagic />,
    title: 'Tecnología avanzada',
    text: 'Utilizamos equipos modernos para lograr tratamientos más precisos, cómodos y eficaces.',
  },
  {
    icon: <FaAward />,
    title: 'Equipo profesional',
    text: 'Contamos con especialistas cualificados en odontología para cuidar tu salud y estética dental.',
  },
  {
    icon: <FaUsers />,
    title: 'Trato cercano y confianza',
    text: 'Te acompañamos en todo el proceso para que te sientas cómodo y seguro en cada visita.',
  },
]

const HowWeWork = () => {
  return (
    <section className="bg-[#f4f8ff] py-24">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Título */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-blue-700 sm:text-4xl">
            ¿Cómo trabajamos en Dali Dent Parla?
          </h2>

          <p className="mt-4 text-neutral-600">
            Nuestro proceso está diseñado para cuidar tu salud bucodental desde el primer momento
          </p>
        </div>

        {/* Caja principal */}
        <div className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(37,99,235,0.08)] md:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            
            {features.map((item, index) => (
              <div key={index} className="flex gap-5">
                
                {/* Icono */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xl text-white">
                  {item.icon}
                </div>

                {/* Texto */}
                <div>
                  <h3 className="text-lg font-extrabold text-blue-700">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-700">
                    {item.text}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default HowWeWork