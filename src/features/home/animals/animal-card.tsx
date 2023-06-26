import { AnimalsType } from "./animals";
import imgDiet from "./../../../assets/images/diet.png";
import imgHabitat from "./../../../assets/images/habitat.png";
import imgClass from "./../../../assets/images/class.png";

type AnimalCardProps = {
  animal: AnimalsType;
};

const AnimalCard = ({ animal }: AnimalCardProps) => {
  const { name, animalClass, diet, species, habitat } = animal;
  return (
    <div className="card ">
      <div className="card__header">
        <img
          className="card__header__img"
          width={"100%"}
          src={`https://source.unsplash.com/random/500x500/?${animal.name.replace(
            " ",
            "-"
          )}`}
          alt="Image on animal"
        />
        <div>
          <div className="card__title">{name}</div>
          <div className="card__subtitle">{species}</div>
        </div>
      </div>
      <div className="card__row">
        <img src={imgClass} alt="" />
        <span>{animalClass}</span>
      </div>
      <div className="card__row">
        <img src={imgDiet} alt="" />
        <span>{diet}</span>
      </div>
      <div className="card__row">
        <img src={imgHabitat} alt="" />
        <span>{habitat}</span>
      </div>
    </div>
  );
};
export default AnimalCard;
