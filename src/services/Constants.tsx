

export async function getWeatherInfo(searchTerm : any) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=imperial&appid=4c9f2e5389eeea2aa804d6621c88956e`
  let res = await fetch(url);
  let data = await res.json();
  return data;
}