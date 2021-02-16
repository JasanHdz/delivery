import { useState, useEffect } from 'react'

function usePhoneDimension() {
  const [isMobile, setIsMobile] = useState(false);
  const query = '(min-width: 768px)'
  const mediaQuery = () => {
    if (window?.matchMedia(query).matches) {
      setIsMobile(false)
    } else {
      setIsMobile(true);
    }
  }
  useEffect(() => {
    window.matchMedia(query).addListener(mediaQuery) 
  })
  return isMobile
}

export default usePhoneDimension