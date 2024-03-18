import Header from './Header.jsx';
import Module from './Module.jsx';
import Footer from './Footer.jsx';

function App() {

  return (
    <>
      <div className='w-100'>
        <Header />

        <div className="d-flex justify-content-around flex-wrap">
          <Module />
          <Module />
          <Module />
          <Module />

          <Module />
          <Module />
          <Module />
          <Module />

          <Module />
          <Module />
          <Module />
          <Module />
        </div>

        <Footer />
      </div>
    </>
  )
}

export default App;
