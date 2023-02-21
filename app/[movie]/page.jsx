import Image from "next/image";

export default async function MovieDetail({ params }) {
    const { movie } = params;
    const imgPath = "https://image.tmdb.org/t/p/original";
    const data = await fetch(
        `http://api.themoviedb.org/3/movie/${params.movie}?api_key=${process.env.API_KEY}`,
        { next: { revalidate: 60 } }
    );

    const res = await data.json();
    return (
        <div>
            <h1 className="text-2xl">{res.title}</h1>
            <h1 className="text-lg">{res.release_date}</h1>
            <h1>{res.runtime} minutes</h1>
            <h2 className="text-sm bg-green-600 inline-block py-2 px-4 rounded-lg">
                {res.status}
            </h2>
            <Image
                className="my-12 w-full"
                src={imgPath + res.backdrop_path}
                width={1000}
                height={1000}
                alt={res.title}
            />
            <p>{res.overview}</p>
        </div>
    );
}
