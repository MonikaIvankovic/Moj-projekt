import { useEffect, useState } from "react";
import Container from "../../../components/container";
import AnimalCard from "./animal-card";
import Loader from "../../../components/loader";
import Pagination from "../../../components/pagination";
import FloatingButton from "../../../components/floating-button";
export type AnimalsType = {
  name: string;
  species: string;
  animalClass: string;
  diet: string;
  habitat: string;
};
const rpp = 8;
const noOfItems = 20;
const numOfPages = Math.ceil(noOfItems / rpp);

const Animals = () => {
  const [animalsData, setAnimalsData] = useState<AnimalsType[]>([]);

  const [page, setPage] = useState<number>(1);
  const getAnimalsData = () => {
    //uzimanje posataka sa servera
    fetch(`http://localhost:3000/animals?_page=${page}&_limit=${rpp}`)
      .then((res) => res.json())
      .then((data) => {
        //ispisivanje posataka u konzolu
        console.log(data);
        setTimeout(() => {
          setAnimalsData(data);
        });
      })
      //ispisivanje errora u slucaju da nesto ne valja
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAnimalsData();
  }, []);
  return (
    <Container>
      <h1>Animals</h1>
      <div className="grid grid--primary">
        {animalsData.map((animal) => {
          return <AnimalCard animal={animal} />;
        })}
      </div>
      <Pagination
        activePage={page}
        numberOfPages={numOfPages}
        onPaginate={(activePage) => setPage(activePage)}
      />
      <FloatingButton />
    </Container>
  );
};

export default Animals;
