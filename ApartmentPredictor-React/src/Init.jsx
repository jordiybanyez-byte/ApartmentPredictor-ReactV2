import ApartmentPage from "./pages/ApartmentPage";
import apartmentNewYork from "./assets/apartmentNewYork.jpg";
import "./App.css";

const baseURL = "https://albertprofedocs.s3.eu-central-1.amazonaws.com/apartment_predictor_images/";

export default function Init() {
    // http://localhost:5173/
    // https://albertprofedocs.s3.eu-central-1.amazonaws.com/apartment_predictor_images/apartmentNewYork.jpg
    
    const handleImageError = (e) => {
        e.target.src = apartmentNewYork;
    };

  return (
    <div className="App">
      <div className="header-image" style={{ position: 'relative' }}>
        <img 
            src={`${baseURL}apartmentNewYork.jpg`}
            alt="New York Apartment"
            onError={handleImageError}
            style={{ maxWidth: '900px', height: 'auto' }}
        />
        <h1 style={{
            position: 'absolute', 
            top: '300px',
            left: '50%', 
            transform: 'translateX(-50%)',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
            fontSize: '4.5rem',
            fontWeight: 'bold'
        }}>
            Apartment Predictor
        </h1>
      </div>
      <p>Use the navigation to explore available apartments.</p>
      <ApartmentPage />
    </div>
  );
}
