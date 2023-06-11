import HeroSlider from "../../components/Home/HeroSlider"
import Instructors from "../../components/Home/Instructors"
import PopularClasses from "../../components/Home/PopularClasses"

const Home = () => {
  return (
    <div>
        <HeroSlider />
        <PopularClasses />
        <Instructors />
    </div>
  )
}

export default Home