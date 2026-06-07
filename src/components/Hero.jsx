const Hero = () => {
  const phone = '675993093'
  const whatsappUrl = `https://wa.me/34${phone}?text=${encodeURIComponent(
    'Hola, me gustaría pedir cita en Clínica Dali Dent Parla.'
  )}`

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-clinica-dali-dent-parla.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay suave para legibilidad, sin filtro azul */}
      <div className="absolute inset-0 bg-black/35"></div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 pb-14 pt-28 text-center">
        
        {/* LOGOS */}
        <div className="mb-8 flex items-center justify-center gap-4">
  <img
    src="/logo-dali-dent-icono.png"
    alt="Icono Clínica Dali Dent"
    className="h-16 w-auto sm:h-20"
  />

  <img
    src="/logo-dali-dent-texto.png"
    alt="Clínica Dali Dent Parla"
    className="h-12 w-auto sm:h-16"
  />
</div>

        <h1 className="max-w-5xl text-4xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-7xl">
          Tu clínica dental de confianza en Parla
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-white drop-shadow-md sm:text-xl">
          Tratamientos dentales personalizados, atención cercana y tecnología
          avanzada para cuidar tu sonrisa con la máxima confianza.
        </p>

        {/* CTA EN UNA SOLA LÍNEA */}
        <div className="mt-10 flex w-full max-w-4xl flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`tel:${phone}`}
            className="inline-flex min-w-[220px] items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-extrabold text-blue-700 shadow-xl transition hover:-translate-y-1 hover:bg-blue-700 hover:text-white"
          >
            Llamar: 675 993 093
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-2xl bg-green-500 px-6 py-4 text-base font-extrabold text-white shadow-xl transition hover:-translate-y-1 hover:bg-green-600"
          >
            <img src="/whatsapp.png" alt="WhatsApp" className="h-6 w-6" />
            Pedir cita
          </a>

          <a
            href="#tratamientos"
            className="inline-flex min-w-[220px] items-center justify-center rounded-2xl border-2 border-white bg-white/10 px-6 py-4 text-base font-extrabold !text-white shadow-xl backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-blue-700"
          >
            Ver tratamientos
          </a>
        </div>

        <a
          href="#tratamientos"
          className="mt-12 inline-flex flex-col items-center text-base font-semibold !text-white drop-shadow-md"
        >
          Descubre nuestros tratamientos
          <span className="mt-2 text-3xl">⌄</span>
        </a>
      </div>
    </section>
  )
}

export default Hero