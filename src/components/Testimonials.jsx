import { useState } from 'react'

const reviews = [
  {
    text: 'Sin duda mi clínica de elección. Buena atención empezando por las auxiliares amables y simpáticas. Y los doctores muy atentos a todo detalle y muy buena explicación de los tratamientos. Mi experiencia fue que estaba buscando presupuestos en varias clínicas. Resulta que fui a una clínica tras ir a esta, porque en un principio no me convencieron del primer diagnóstico. Me dijeron que era una muela para extraer y yo la quería conservar. Fui a otra clínica y me dijeron que se podría salvar, me la salvaron y pasó lo que no me esperaba, justo lo que me aconsejaron los doctores de esta clínica: que no tenía mucha garantía. A los tres meses o cuatro se me rompió la muela y tuve que sacármela y hacerme implante. Muchas gracias por todo. Y mil disculpas por desconfiar de primeras. Sin duda recomiendo 100%.',
    name: 'Ammar Garcia',
    time: 'Hace 2 años',
  },
  {
    text: 'Llevo muchos años acudiendo a esta clínica al igual que mi familia. El equipo es muy atento, los doctores te explican cada paso que van a dar y las chicas son encantadoras. La relación calidad precio es excelente.',
    name: 'Maribel García-Castro',
    time: 'Hace 2 años',
  },
  {
    text: 'Un encanto todo, el doctor muy atento, muy paciente, amable y tiene un trato genial con los niños pequeños. La verdad todo genial. Las chicas también súper alegres, educadas y amables; el ambiente lo hacen muy bueno sin duda. Y por supuesto precios asequibles. Muchas gracias por todo el tratamiento de mi niña ☺️',
    name: 'Paciente de Clínica Dali Dent',
    time: 'Reseña de Google',
  },
]

const Testimonials = () => {
  const [expanded, setExpanded] = useState({})

  const toggleReview = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <section className="bg-[#eef0f1] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            Lo que dicen nuestros pacientes
          </h2>

          <div className="mt-5 text-2xl tracking-[0.2em] text-[#E4B525]">
            ★★★★★
          </div>

          <p className="mt-4 text-lg text-neutral-600">
            Valoración 5.0 en Google Reviews
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => {
            const isLong = review.text.length > 260
            const isExpanded = expanded[index]
            const visibleText =
              isLong && !isExpanded
                ? `${review.text.slice(0, 260)}...`
                : review.text

            return (
              <article
                key={index}
                className="flex min-h-[360px] flex-col rounded-xl bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] sm:p-7"
              >
                <div className="mb-5 text-lg tracking-[0.18em] text-[#E4B525] sm:text-xl">
                  ★★★★★
                </div>

                <p className="flex-1 text-sm leading-7 text-neutral-700 sm:text-[15px] sm:leading-8">
                  {visibleText}
                </p>

                {isLong && (
                  <button
                    type="button"
                    onClick={() => toggleReview(index)}
                    className="mt-4 self-start text-sm font-bold text-blue-700 transition hover:text-blue-900"
                  >
                    {isExpanded ? 'Leer menos' : 'Leer más'}
                  </button>
                )}

                <div className="mt-6 sm:mt-8">
                  <p className="text-lg font-bold text-black sm:text-xl">
                    {review.name}
                  </p>
                  <p className="mt-1 text-sm text-neutral-500">
                    {review.time}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Testimonials