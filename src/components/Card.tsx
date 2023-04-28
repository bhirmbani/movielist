import Image from "next/image";

interface CProps {
  src: string;
  alt: string;
  title: string;
  overview: string;
  width: number;
  height: number;
}

const Card = ({ src, alt, title, overview, width, height }: CProps) => (
  <div className="card card-side bg-base-100 shadow-xl overflow-scroll">
    <figure>
      <Image width={width} height={height} src={src} alt={alt} />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p className="text-ellipsis">{overview}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Detail</button>
      </div>
    </div>
  </div>
);

export default Card;
