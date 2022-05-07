import Image from "next/image";
import { POSTER_ASPECTS, POSTER_BASE_URL } from "../libs/config";

interface PosterProps {
  src?: string
  alt?: string
  isThumbnail?: boolean
}

const PLACEHOLDER = {
  THUMBNAIL: 'https://via.placeholder.com/533x300.png/fff/?text=Image+Not+Found',
  POSTER: 'https://via.placeholder.com/533x600.png/fff/?text=Image+Not+Found',
};

const posterPath = (src: string, width: number) => `${POSTER_BASE_URL}/w${width}${src}`;

const Poster = ({ src, alt = 'poster', isThumbnail = false }: PosterProps) => {
  return (
    <Image
      src={src ? posterPath(src, isThumbnail ? 300 : 500) : PLACEHOLDER.THUMBNAIL}
      alt={alt}
      placeholder="blur"
      blurDataURL={isThumbnail ? PLACEHOLDER.THUMBNAIL : PLACEHOLDER.POSTER}
      layout={isThumbnail ? 'responsive' : 'intrinsic'}
      width={isThumbnail ? 300 : 500}
      height={isThumbnail ? 200 : 600}
    />
  )
}

export default Poster;
