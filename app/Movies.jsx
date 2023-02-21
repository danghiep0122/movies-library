import Link from "next/link";
import Image from "next/image";

export default function Movie({ title, release_date, id, poster_path }) {
    const imgPath = "https://image.tmdb.org/t/p/original";
    return (
        <div>
            <h1>{title}</h1>
            <h2>{release_date}</h2>
            <Link href={`/${id}`}>
                <Image
                    src={imgPath + poster_path}
                    alt={title}
                    width={800}
                    height={800}
                />
            </Link>
        </div>
    );
}
