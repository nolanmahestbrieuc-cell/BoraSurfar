import { ShieldCheck, Truck, BadgeCheck } from 'lucide-react'
import SurfboardIcon from './icons/SurfboardIcon'
import RotatingSurfboard from './RotatingSurfboard'

interface Props {
  onViewBoards: () => void
}

const reassurance = [
  { icon: ShieldCheck, label: 'Paiement sécurisé' },
  { icon: Truck, label: 'Livraison rapide' },
  { icon: BadgeCheck, label: 'Satisfait ou remboursé' },
]

export default function HeroBanner({ onViewBoards }: Props) {
  return (
    <>
      <section className="relative overflow-hidden rounded-3xl border border-gray-100">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #CFEFF5 0%, #9FDCE6 32%, #4FBACB 55%, #E9DCB9 58%, #F3E6C0 100%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-transparent sm:via-white/60" />

        <div className="relative grid gap-8 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-2 lg:items-end lg:py-16">
          <div>
            <h1 className="max-w-md text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl lg:text-[2.75rem]">
              Trouvez la planche qui vous correspond.
            </h1>
            <p className="mt-4 max-w-sm text-base text-navy-600">
              Des planches neuves et d&rsquo;occasion sélectionnées par des passionnés.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onViewBoards}
                className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600"
              >
                Voir les planches
              </button>
              <button
                type="button"
                className="rounded-full border border-navy-200 bg-white px-6 py-3 text-sm font-semibold text-navy-800 transition-colors hover:border-navy-400"
              >
                En savoir plus
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {reassurance.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm font-medium text-navy-700">
                  <Icon size={18} strokeWidth={1.75} className="text-brand-600" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden items-end justify-center gap-8 lg:flex" aria-hidden="true">
            {[
              { color: '#F3E6C0', stroke: '#B99B4B', rotate: '-rotate-6', h: 280 },
              { color: '#2DBDB5', stroke: '#124C49', rotate: 'rotate-0', h: 320 },
              { color: '#CFEFF5', stroke: '#4FBACB', rotate: 'rotate-6', h: 280 },
            ].map((board, i) => (
              <SurfboardIcon
                key={i}
                strokeWidth={1.5}
                fill={board.color}
                className={`${board.rotate} drop-shadow-lg`}
                style={{ color: board.stroke, width: board.h * 0.42, height: board.h }}
              />
            ))}
          </div>
        </div>
      </section>

      <RotatingSurfboard />
    </>
  )
}
