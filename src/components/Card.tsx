import Image from "next/image";

interface CProps {
  src: string;
  alt: string;
  title: string;
  overview: string;
  width: number;
  height: number;
  onClick: () => void;
}

const Card = ({ src, alt, title, overview, width, height, onClick }: CProps) => (
  <div data-testid="card" className="card card-side bg-base-100 shadow-xl overflow-scroll">
    <figure className="px-5">
      <Image width={width} height={height} src={src} alt={alt} />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p className="text-ellipsis">{overview}</p>
      <div className="card-actions justify-end">
        <button onClick={onClick} className="btn btn-primary">Detail</button>
      </div>
    </div>
  </div>
);

export default Card;
