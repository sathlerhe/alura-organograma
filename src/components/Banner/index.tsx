import "./style.css";

interface IBanner {
  src: string;
  alt?: string;
}
const Banner: React.FC<IBanner> = ({ src, alt }) => {
  return (
    <header className="banner">
      <img src={src} alt={alt} />
    </header>
  );
};

export default Banner;
