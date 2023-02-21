import Movie from "./Movies";

export default async function Home() {
    const data = await fetch(
        `http://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    );
    const res = await data.json();
    console.log(res);
    return (
        <main>
            <div className="grid gap-16 grid-cols-fluid">
                {res.results.map(({ id, title, poster_path, release_date }) => (
                    <Movie
                        key={id}
                        id={id}
                        title={title}
                        poster_path={poster_path}
                        release_date={release_date}
                    />
                ))}
            </div>
        </main>
    );
}
