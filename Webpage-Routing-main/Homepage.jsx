// function Homepage() {
//     return (
//       <div>
//         <h2>WELCOME TO THE WEBSITE😊</h2>
//       </div>
//     );
//   }
  
//   export default Homepage;
  
import homeImage from './home.jpg';

function Home() {
    return (
        <div>
            <img className="home" src={homeImage} alt="Home" />
        </div>
    );
}

export default Home;
