import { Footer } from "./Footer";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { Card } from "./Card";

const Layout = () => {
    return (
        < div >
            <Header />
            <Navigation />
            <Card />
            <Card />
            <Card />
            <Footer />
        </div >
    )
}
export { Header, Footer, Card, Navigation, Layout };

