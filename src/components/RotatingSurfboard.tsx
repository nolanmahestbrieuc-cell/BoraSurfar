import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import frameFront from '../assets/surfboard/1-deck-front.png'
import frameSideA from '../assets/surfboard/3-profile-left.png'
import frameBack from '../assets/surfboard/2-deck-back.png'
import frameSideB from '../assets/surfboard/5-profile-right.png'
import frameFrontAgain from '../assets/surfboard/4-bottom.png'

gsap.registerPlugin(ScrollTrigger)

// Real product photos ordered to read as one turn: front -> edge -> back -> edge -> front.
const frames = [frameFront, frameSideA, frameBack, frameSideB, frameFrontAgain]

/**
 * Apple-style "spin on scroll": the section pins in the viewport while
 * scrolling crossfades through the board's real photographed angles, then
 * normal scrolling resumes.
 */
export default function RotatingSurfboard() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const frameRefs = useRef<(HTMLImageElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const step = 1 / (frames.length - 1)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=150%',
          scrub: 1,
          pin: true,
        },
      })

      frames.forEach((_, i) => {
        if (i === 0) return
        const at = (i - 1) * step
        tl.to(frameRefs.current[i - 1], { opacity: 0, duration: step * 0.4 }, at + step * 0.3)
        tl.to(frameRefs.current[i], { opacity: 1, duration: step * 0.4 }, at + step * 0.3)
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="relative flex h-screen items-center justify-center overflow-hidden bg-white">
      {frames.map((src, i) => (
        <img
          key={src}
          ref={(el) => {
            frameRefs.current[i] = el
          }}
          src={src}
          alt="Planche de surf borasurfar en rotation"
          className="absolute h-[52vh] w-auto select-none drop-shadow-2xl sm:h-[62vh]"
          style={{ opacity: i === 0 ? 1 : 0, willChange: 'opacity' }}
        />
      ))}
    </div>
  )
}
