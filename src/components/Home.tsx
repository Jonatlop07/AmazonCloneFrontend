import Product from "./Product";

const Home = () => {
    return (
        <section className="home">
            <img 
                className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt=""/>
                <div className="home__row">
                    <Product
                        id="1234"
                        title="Product example"
                        price={11.96}
                        rating={5}
                        image=""/>
                    <Product
                        id="1234"
                        title="Product example"
                        price={11.96}
                        rating={5}
                        image=""/>
                </div>
        </section>
    )
}

export default Home;