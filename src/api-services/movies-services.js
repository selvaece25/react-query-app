export async function fetchMovies() {
  return (
    await fetch(`http://www.omdbapi.com/?i=tt0944947&s=inc&apikey=22c8cf8b`)
  ).json();
}
