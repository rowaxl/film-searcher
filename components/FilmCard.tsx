import { FilmDetail } from "../interfaces";

interface FilmCardProps {
  detail?: FilmDetail
}

const FilmCard = ({ detail }: FilmCardProps) => {
  return (
    <div>
      { detail && detail.name}
    </div>
  )
}

export default FilmCard;
