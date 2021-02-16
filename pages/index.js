import Navigation from 'common/navigation'
import Hero from 'home/hero'
import Services from 'home/services'
import About from 'home/about'

function Index() {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <About />
    </>
  )
}

export default Index