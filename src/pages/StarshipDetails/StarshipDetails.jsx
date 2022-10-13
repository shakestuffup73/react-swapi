import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getStarshipDetails } from "../../services/sw-api";
import { Link } from "react-router-dom"

const StarshipDetails = () => {

  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  // console.log('this is location.state.starship.url:', location.state.starship.url)

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getStarshipDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchStarshipDetails()
  }, [location.state.starship.url])

  console.log('this is starshipDetails:', starshipDetails)

  return ( 
    <>
      <h1>Starship Details Component</h1>
      <h4>Name: {starshipDetails.name}</h4>
      <h4>Model: {starshipDetails.model}</h4>
    </>

  );
}

export default StarshipDetails;