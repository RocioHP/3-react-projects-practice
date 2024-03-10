import { useParams } from 'react-router-dom'
import { useContext, useEffect } from "react"
import { GlobalContext } from '../../context';

const Details = () => {
  const { id } = useParams();
  const {recipeDetailsData, setRecipeDetailsData} = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${id}`);
      const data = await response.json();

      console.log(data);
      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    } 
    getRecipeDetails();
  }, [])


  return (
    <div className='container mx-auto py-10 grid grid-col-1 lg:grid-col-2 gap-10'>
      <div className='row-start-2 lg:row-start-auto'>
        <div className='h-96 overflow-hidden rounded-xl group'>
          <img src={recipeDetailsData?.recipe?.image_url} className='w-full h-full object-cover block group-hover:scale-105 duration-300' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Details
