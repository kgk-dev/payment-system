type Props = {
  events: string[]
}

export default function Events({ events }: Props) {
  return (
    <ul>
      {
        events.map((event, index) =>
          <li key={index}>{event}</li>
        )
      }
    </ul>
  )
}