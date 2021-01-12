import { useEffect } from 'react'

const useSlider = (slides, currentSlide, setCurrentSlide) => {


    useEffect(() => {

      const interval = setInterval(goToNextSlide,4000)
      return () => clearInterval(interval)
    })

    const goToPreviousSlide = () => {
        if (currentSlide === 0) {
          setCurrentSlide(slides.length)
        } else {
            setCurrentSlide(currentSlide - 1)
        }

    }

    const goToNextSlide = () => {

      if (currentSlide === slides.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1)
      }

    }

    return { goToPreviousSlide, goToNextSlide }
}

export default useSlider
