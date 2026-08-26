interface Props {
  index: string
  title: string
  className?: string
}

/** Intitulé de rubrique façon magazine : « I — La maison ». */
export default function SectionLabel({ index, title, className = '' }: Props) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.42em] text-aurele-gold ${className}`}
    >
      <span>{index}</span>
      <span aria-hidden="true" className="h-px w-8 bg-aurele-gold/50" />
      <span className="text-aurele-mist">{title}</span>
    </p>
  )
}
