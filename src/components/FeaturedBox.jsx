const FeaturedBox = () => {
  const phone = '675993093'
  const whatsappUrl = `https://wa.me/34${phone}?text=${encodeURIComponent(
    'Hola, me gustaría pedir cita en Clínica Dali Dent Parla.'
  )}`

  return (
    <section className="bg-[#f4f8ff] py-16 pb-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[28px] bg-blue-50 min-h-[auto] lg:min-h-[520px]">
          
          {/* Imagen */}
          <div className="h-[260px] w-full lg:h-[520px] lg:w-[62%]">
            <img
              src="/clinica-dental.jpeg"
              alt="Clínica Dali Dent Parla"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Caja texto */}
          <div className="relative lg:absolute lg:right-12 lg:top-1/2 lg:w-[42%] lg:-translate-y-1/2">
            <div className="m-4 rounded-[24px] bg-white p-6 shadow-[0_20px_60px_rgba(37,99,235,0.14)] sm:p-8 md:p-10">
              
              <h2 className="text-2xl font-extrabold leading-tight text-blue-700 sm:text-4xl">
                Cuida tu sonrisa con una atención{' '}
                <span className="text-blue-700">personalizada</span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-lg">
                En Clínica Dali Dent Parla estudiamos tu caso de forma individual
                para ofrecerte tratamientos adaptados a tus necesidades,
                cuidando tu salud bucodental y la estética de tu sonrisa.
              </p>

              {/* TELÉFONO */}
              <div className="mt-6">
                <a
                  href={`tel:${phone}`}
                  className="inline-flex rounded-xl bg-blue-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-800 sm:px-7 sm:py-4 sm:text-base"
                >
                  Llamar al 675 993 093
                </a>
              </div>

              {/* WHATSAPP */}
              <div className="mt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl border border-blue-700 px-6 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-700 hover:text-white sm:px-7 sm:py-4 sm:text-base"
                >
                  <img src="/whatsapp.png" alt="WhatsApp" className="h-5 w-5" />
                  Pedir cita por WhatsApp
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBox