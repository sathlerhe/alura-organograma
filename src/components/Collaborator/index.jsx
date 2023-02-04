import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import "./styles.css";

function Collaborator({
  name,
  role,
  image,
  bgColor,
  onDelete,
  favorited,
  toggleFavorite,
  id,
}) {
  function handleToggleFavorite() {
    toggleFavorite(id);
  }

  const favoriteProps = {
    size: 40,
    onClick: handleToggleFavorite,
    cursor: 'pointer'
  };

  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        className="delete"
        onClick={() => onDelete(id)}
      />
      <div className="cabecalho" style={{ backgroundColor: bgColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="rodape">
        <h4>{name}</h4>
        <h5>{role}</h5>

        <div className="favorite">
          {favorited ? (
            <AiFillHeart {...favoriteProps} color='#ff0000'/>
          ) : (
            <AiOutlineHeart {...favoriteProps} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Collaborator;
