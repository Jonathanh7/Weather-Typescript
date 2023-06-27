import { useState, ChangeEvent, useEffect } from 'react';
import { getWeatherInfo } from '../services/Constants';
import Result, {ResultProps} from './Result';

interface WeatherInfo {
  name: string;
  description: string;
  temp: number;
  feels_like: number;
  speed: number; 
}

function Search(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [tempInfo, setTempInfo] = useState<WeatherInfo | {}>({});


  function handleMessageChange(event: ChangeEvent<HTMLInputElement>): void{
      event.preventDefault();
    setSearchTerm(event.target.value);
  }


  async function handleClick(): Promise<void> {
    try {
      const data = await getWeatherInfo(searchTerm);
      console.log(data)
      if (data && data.weather && data.weather.length > 0 && data.main && data.wind) {

        const { name } = data;
        const { description } = data.weather[0];
        const { temp, feels_like } = data.main;
        const { speed } = data.wind;
  
        const newWeatherInfo: WeatherInfo = {
          name,
          description,
          temp,
          feels_like,
          speed
        }
        setTempInfo(newWeatherInfo);
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {  
      handleClick();
  }, []);

  const handleClickEvent = () => {
    handleClick();
  }

  return (
    <div>
      <div className="container">
        <label>City</label>
      <input
        type="search"
        value={searchTerm}
        placeholder="Search City Weather"
        id="search"
        onChange={handleMessageChange}
      />
        <button className='searchButton' onClick={handleClickEvent}>Search</button>
        
      </div>
      <Result {...tempInfo as ResultProps} />
    </div>
  )
}

export default Search
