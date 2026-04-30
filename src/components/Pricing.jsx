const plans = [
  {
    title: 'Tratamientos dentales',
    price: 'A consultar',
    subtitle: 'Presupuesto personalizado según tu caso',
  },
  {
    title: 'Odontología estética',
    price: 'A consultar',
    subtitle: 'Valoración individual y plan adaptado',
  },
  {
    title: 'Revisiones y salud bucodental',
    price: 'A consultar',
    subtitle: 'Te informamos antes de empezar cualquier tratamiento',
  },
]

const conditions = [
  'Cada tratamiento requiere una valoración previa personalizada.',
  'El presupuesto puede variar según las necesidades de cada paciente.',
  'Antes de comenzar, te explicaremos el tratamiento y las opciones disponibles.',
  'La anulación de una cita deberá ser notificada con antelación.',
  'Para más información, contacta con la clínica.',
]

const Pricing = () => {
  const phone = '675993093'
  const whatsappUrl = `https://wa.me/34${phone}?text=${encodeURIComponent(
    'Hola, me gustaría recibir información sobre precios en Clínica Dali Dent Parla.'
  )}`

  return (
    <section id="tarifas" className="scroll-mt-28 bg-[#f4f8ff] py-24 pb-12">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Título */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-blue-700 sm:text-4xl">
            Nuestras tarifas
          </h2>

          <p className="mt-4 text-lg text-neutral-600">
            Presupuestos claros, personalizados y sin compromiso
          </p>
        </div>

        {/* Planes */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <article
              key={index}
              className="rounded-xl bg-white px-8 py-10 text-center shadow-[0_10px_30px_rgba(37,99,235,0.08)] transition hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(37,99,235,0.14)]"
            >
              <h3 className="text-2xl font-extrabold text-blue-700">
                {plan.title}
              </h3>

              <p className="mt-5 text-4xl font-extrabold tracking-tight text-blue-700">
                {plan.price}
              </p>

              <p className="mt-4 text-lg text-neutral-600">
                {plan.subtitle}
              </p>

              {/* BOTÓN WHATSAPP */}
              <div className="mt-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
                >
                  Pedir información
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Condiciones */}
        <div className="mx-auto mt-12 max-w-4xl rounded-xl bg-white px-8 py-10 shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
          <h3 className="text-center text-2xl font-extrabold text-blue-700">
            Condiciones Generales
          </h3>

          <div className="mt-8 space-y-5">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="mt-1 text-xl font-bold text-blue-700">✓</span>
                <p className="text-lg leading-8 text-neutral-700">
                  {condition}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="mt-12 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-blue-700 px-8 py-4 text-lg font-bold text-blue-700 transition hover:bg-blue-700 hover:text-white"
          >
            Solicitar presupuesto por WhatsApp
          </a>
        </div>

      </div>
    </section>
  )
}

export default Pricing