// import { useSelector } from 'react-redux';
import './App.css';
import ImageModel from './components/ImageModel';
import Footer from './components/footer/Footer';
import Layout from './components/layout/Layout';
import Nav from './components/navbar/Nav';
import { useSelector } from 'react-redux';

function App() {
  const isActive = useSelector((state) => state.cart.isModalActive);

  return (
    <>
      {isActive ? <ImageModel /> : ''}
      <div className="App">
        <Nav />
        <Layout />
        <Footer />
      </div>
    </>
  );
}

export default App;
