const services = [
  {
    title: 'Odontología general',
    description:
      'Revisiones, limpiezas, empastes y tratamientos preventivos para cuidar tu salud bucodental y mantener una sonrisa sana.',
    image:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Ortodoncia',
    description:
      'Tratamientos para alinear los dientes, mejorar la mordida y conseguir una sonrisa más estética, cómoda y funcional.',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Estética dental',
    description:
      'Blanqueamiento, carillas y tratamientos personalizados para mejorar la apariencia de tu sonrisa de forma natural.',
    image:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Implantes y prótesis',
    description:
      'Soluciones para recuperar piezas dentales perdidas, mejorar la masticación y devolver seguridad a tu sonrisa.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
  },
]

const Treatments = () => {
  const phone = '675993093'
  const whatsappUrl = `https://wa.me/34${phone}?text=${encodeURIComponent(
    'Hola, me gustaría recibir más información sobre los tratamientos en Clínica Dali Dent Parla.'
  )}`

  return (
    <section id="servicios" className="scroll-mt-28 bg-[#f4f8ff] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-blue-700 sm:text-4xl">
            Nuestros servicios dentales
          </h2>

          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            En Clínica Dali Dent Parla ofrecemos tratamientos personalizados
            para cuidar tu salud bucodental con la máxima profesionalidad.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(37,99,235,0.10)] transition hover:shadow-[0_15px_40px_rgba(37,99,235,0.18)]"
            >
              <div className="w-[40%]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex w-[60%] flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl font-extrabold text-blue-700 sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-base leading-8 text-neutral-600 sm:text-lg">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base font-semibold text-blue-700 transition hover:text-blue-900"
                  >
                    Más información →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Treatments