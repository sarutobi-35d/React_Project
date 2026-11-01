import { useState, useMemo, useEffect } from 'react';
import axios from 'axios';

import SearchBar from './components/searchBar';

import './App.css'

function App() {

  const [userData, setUserData] = useState([]); //Recup données de l'API
  const [currentOption, setCurrentOption] = useState('All'); // Pour le filtre
  const [count, setCount] = useState(0); //Compteur

  useEffect(() => {

    const fetchUserData = async () =>{

      try {
        
        const response = await axios.get('https://randomuser.me/api/?results=10');
        setUserData(response.data.results);

      } catch (error) {
        console.error("Erreur lors de la récupération", error);
      }
    };

    fetchUserData(); 

  }, [])


  function handleClick(e){

    const option = e.target.name;
    setCurrentOption(option);

    switch (option) {

      case "all":
        setUserData([...userData]);
        break;
      
      case "name":
        setUserData([...userData.sort((a,b) => a.name.last.localCompare(b.name.last))]);
        break;

      case "country":
        setUserData([...userData.sort((a,b) => a.location.country.localCompare(b.location.country))]);
        break;
        
      case "city":
        setUserData([...userData.sort((a,b) => a.location.city.localCompare(b.location.city))]);
        break;  
    
      default:
        console.log("Aucun membre trouvé !");
        break;
    }
  }

  function handleCount(){
    setCount(count + 1);
  }

  return (
    
    <>

    <SearchBar items={userData} />

    <div className="btns">
      <button onClick={handleClick} name='all' >All</button>
      <button onClick={handleClick} name='name' >Nom</button>
      <button onClick={handleClick} name='country' >Pays</button>
      <button onClick={handleClick} name='city' >Villes</button>
      <button onClick={handleCount} name='all' >+1</button>
    </div>

      <table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Noms</th>
            <th>Prénoms</th>
            <th>eMail</th>
            <th>Phobe</th>
            <th>Pays</th>
            <th>Ville</th>
          </tr>
        </thead>

        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td> <img src={user.picture.thumbnail} width="50px" alt="" /> </td>
              <td>{user.name.last}</td>
              <td>{user.name.first}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.location.country}</td>
              <td>{user.location.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </>

  )
}

export default App
