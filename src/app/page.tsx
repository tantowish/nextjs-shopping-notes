import Footer from "./components/Footer"
import Form from "./components/Form"
import Grocery from "./components/Grocery"
import Header from "./components/Header"

const Home = () => {
  return (
    <div className="max-w-xl mx-auto px-4">
      <Header />
      <Form/>
      <Grocery/>
      <Footer />
    </div>
  )
}

export default Home