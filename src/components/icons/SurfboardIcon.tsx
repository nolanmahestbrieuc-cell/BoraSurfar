interface Props {
  className?: string
  size?: number
  strokeWidth?: number
}

/** Minimalist single-stroke surfboard glyph, styled to match Lucide icons. */
export default function SurfboardIcon({ className, size = 24, strokeWidth = 2 }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2c-2.5 0-4.5 4-4.5 10s2 10 4.5 10 4.5-4 4.5-10-2-10-4.5-10Z" />
      <path d="M12 5v14" />
    </svg>
  )
}
