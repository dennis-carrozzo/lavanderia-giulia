import { useState, useEffect, useRef, useCallback } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { Transition } from 'react-transition-group'
import { useInView } from 'react-intersection-observer'

const duration = 500

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
}

export default function Slider ({ slides }) {
  const [scrollRef, inView] = useInView({
    triggerOnce: false
  })
  const [currentSlide, setCurrentSlide] = useState(0)
  const timer = useRef(null)

  const setNextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev = prev === slides.length - 1 ? 0 : prev + 1))
  }, [slides.length])

  useEffect(() => {
    if (inView) {
      if (slides && !timer.current) {
        timer.current = setInterval(() => {
          setNextSlide()
        }, 10000)
      }
    } else {
      clearInterval(timer.current)
    }
  }, [inView, setNextSlide, slides])

  if (!slides) {
    return null
  }

  return (
    <Stack
      justifyContent='center'
      alignItems='center'
      spacing={2}
      ref={scrollRef}
    >
      {slides.map((slide, i) => (
        <Slide key={slide.key} shouldDisplay={i === currentSlide}>
          {slide}
        </Slide>
      ))}
      <Stack
        direction='row'
        justifyContent='center'
        alignitems='center'
        spacing={1}
      >
        {slides.map((slide, i) => (
          <Box
            onClick={() => setCurrentSlide(i)}
            sx={{
              width: 10,
              height: 10,
              backgroundColor:
                i === currentSlide ? 'secondary.main' : 'light.dark'
            }}
            key={slide.key}
          />
        ))}
      </Stack>
    </Stack>
  )
}

function Slide ({ children, shouldDisplay }) {
  const nodeRef = useRef()
  return (
    <Transition
      nodeRef={nodeRef}
      timeout={duration}
      in={shouldDisplay}
      mountOnEnter
      exit={false}
      unmountOnExit
    >
      {state => (
        <div
          ref={nodeRef}
          style={{
            opacity: 0,
            transition: `opacity ${duration}ms ease-in`,
            ...transitionStyles[state]
          }}
        >
          <Box>{children}</Box>
        </div>
      )}
    </Transition>
  )
}
