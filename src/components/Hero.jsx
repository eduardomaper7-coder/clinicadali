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
        backgroundImage: "url('/hero-dentista-usera.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay azul */}
      <div className="absolute inset-0 bg-blue-950/55"></div>

      {/* Degradado azul */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-700/25 via-blue-900/45 to-blue-950/80"></div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pb-16 pt-28 text-center">
        
        <div className="mb-6 flex flex-col items-center">
          <span className="text-2xl font-light tracking-widest text-white/80">
            CLÍNICA DENTAL
          </span>

          <span className="text-3xl font-extrabold tracking-wide text-white md:text-4xl">
            Clínica Dali Dent Parla
          </span>
        </div>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-white sm:text-6xl md:text-7xl">
          Clínica dental en Parla
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-9 text-white/90 sm:text-xl">
          Cuidamos tu salud bucodental con tratamientos personalizados,
          atención cercana y un equipo profesional para ayudarte a mantener
          una sonrisa sana y bonita.
        </p>

        {/* BLOQUE TELÉFONO */}
        <div className="mt-10 rounded-2xl bg-white/95 px-8 py-6 shadow-xl backdrop-blur">
          <p className="text-base font-medium text-blue-700">
            Llámanos al
          </p>

          <a
            href={`tel:${phone}`}
            className="mt-2 block text-2xl font-extrabold text-blue-700 hover:underline"
          >
            675 993 093
          </a>
        </div>

        {/* BOTÓN WHATSAPP SEPARADO */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 text-base font-bold text-blue-700 shadow-lg transition hover:bg-blue-700 hover:text-white"
        >
          <img src="/whatsapp.png" alt="WhatsApp" className="h-6 w-6" />
          Pedir cita por WhatsApp
        </a>

        <a
          href="#servicios"
          className="mt-6 inline-flex items-center rounded-xl border border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-blue-700"
        >
          Nuestros servicios
        </a>

        <a
          href="#servicios"
          className="mt-20 inline-flex flex-col items-center text-base font-medium text-white"
        >
          Descubre más
          <span className="mt-2 text-2xl">⌄</span>
        </a>
      </div>
    </section>
  )
}

export default Hero