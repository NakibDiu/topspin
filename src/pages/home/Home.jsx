import HeroSlider from "../../components/Home/HeroSlider"
import Instructors from "../../components/Home/Instructors"
import PopularClasses from "../../components/Home/PopularClasses"
import Testimonials from "../../components/Home/Testimonials"

const Home = () => {
  return (
    <div>
        <HeroSlider />
        <PopularClasses />
        <Instructors />
        <Testimonials />
    </div>
  )
}

export default Home