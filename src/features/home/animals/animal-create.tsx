import { useState } from "react";
import { AnimalType } from "./animals";
import Container from "../../../components/container";
import Devider from "../../../components/devider";
import Field from "../../../components/field";
import Button from "../../../components/button";
import { useNavigate } from "react-router-dom";

const initialData: AnimalType = {
  name: "",
  species: "",
  animalClass: "",
  diet: "",
  habitat: "",
};
const dataHeaders = {
  "Content-Type": "application/json",
};
const AnimalCreate = () => {
  const [inputsValue, setInputsValue] = useState<ValuesType>(initialData);
  const [error, setError] = useState("");

  const navigate = useNavigate;
  const handleInputsValue = (value: string, id: string) => {
    const newState: ValuesType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };

  const onSubmit = (inputsValue: ValuesType) => {
    let getOut = false;
    let errorInputs = "";
    const keys = Object.keys(inputsValue);

    //  for (let i = 0; i < Object.keys(inputsValue).length; i++) {
    //     if (Object.keys(inputsValue)[i] === "") {
    //      getOut = true;
    //     break;
    //   }
    //  }
    Object.keys(inputsValue).forEach((key) => {
      if (inputsValue[key] === "") {
        getOut = true;
        errorInputs = errorInputs + key + ", ";
      }
    });
    if (getOut) {
      setError(
        "Moraju svi inputi biti popunjeni kako bi se životinja kreirala" +
          errorInputs.substring(0, errorInputs.length - 2)
      );
      return;
    } else {
      setError("");
    }
    fetch("http://localhost:3000/animals", {
      method: "POST",
      headers: dataHeaders,
      body: JSON.stringify(obj),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log("proslo je sve dobro");
        navigate("      /animals");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <h1>Create a new animal</h1>
      <Devider />
      {error && <div className="message messsage--errror">{error}</div>}
      <div>
        <Field
          id="name"
          value={inputsValue.name}
          label="Name of an animal"
          onChange={(newValue) => handleInputsValue(newValue, "name")}
        />
        <Field
          id="species"
          value={inputsValue.species}
          label="Animal species"
          onChange={(newValue) => handleInputsValue(newValue, "species")}
        />
        <Field
          id="animalClass"
          value={inputsValue.animalClass}
          label="Animal class"
          onChange={(newValue) => handleInputsValue(newValue, "animalClass")}
        />
        <Field
          id="diet"
          value={inputsValue.diet}
          label="What this animal eats"
          onChange={(newValue) => handleInputsValue(newValue, "diet")}
        />
        <Field
          id="habitat"
          value={inputsValue.habitat}
          label="What this animal lives"
          onChange={(newValue) => handleInputsValue(newValue, "habitat")}
        />
      </div>
      <Button text="Dodaj životinju" onClick={() => onSubmit(inputsValue)} />
    </Container>
  );
};

export default AnimalCreate;
