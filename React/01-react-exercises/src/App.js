// 01-react-exercise (01,02,03,04,05,06)
import { Greeting } from "./components/Greetings"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Card } from "./components/Card"
import { Navigation } from "./components/Navigation"
import { Layout } from "./components/Layout"
import './App.css';


export default function App() {
  return <div>
    <Greeting />
    <Header />
    <Footer />
    <Card />
    <Navigation />
    <Layout />
  </div>
}