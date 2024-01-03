import Results from '@/components/Results';
import React from 'react'

const API_KEY = process.env.TMBD_API_KEY
export default async function home({searchParams}) {
  const genre = searchParams.genre || 'fetchTrending'
  const res = await fetch(`https://api.themoviedb.org/3/${genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`);
  const data = await res.json()
  // console.log(data);
  if(!res.ok){
    throw new Error('Failed to fetch the data');
  }
  const results = data.results;
  // console.log(result);
  return (
    <div>
        <Results results={results}/>
    </div>
  )
}
