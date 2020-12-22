import TrueOrFalseItem from './TrueOrFalseItem'

const TrueOrFalseForm = () => {
  const itemsList = [
    'Matteo non è contento della sua vacanza perché ha sempre piovuto.',
    'Matteo è andato in vacanza con la moglie e degli amici.',
    'Matteo è partito dall’aeroporto con molto ritardo.',
    'Parlando di Napoli, Matteo dice che la città è bella, ma ci sono molte alto.',
    'Secondo Matteo i napoletani non sono molto gentili.',
    'Matteo era già stato a Pompei.',
    'Matteo non ha potuto visitare gli scavi perché era giorno di chiusura.',
    'Durante la vacanza Matteo ha perso il cellulare.',
    'Matteo è rimasto a Ischia quattro giorni.',
    'A Ischia Matteo ha visitato un castello.',
    'Matteo non è andato alle terme con la moglie.',
    'Alla fine della vacanza Matteo ed Emma si sono sentiti male a causa del vino.',
  ]

  return (
    <form action=''>
      <h3>1. Ascolta il dialogo e rispondi. Vero o falso?</h3>
      {itemsList.map((item, idx) => (
        <TrueOrFalseItem
          text={item}
          name={`item${(idx + 1).toString().padStart(2, '0')}`}
          key={idx}
        />
      ))}
      <button>Controlla</button>
    </form>
  )
}

export default TrueOrFalseForm
