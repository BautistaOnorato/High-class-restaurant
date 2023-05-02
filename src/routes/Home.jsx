import { AboutUs, Chef, FindUs, Footer, Gallery, Intro, Laurels, SpecialMenu, Welcome } from '../container'

const Home = () => {
  return (
    <div>
      <Welcome />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  )
}

export default Home