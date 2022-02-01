import React, {useState} from "react";
import Image from "../assets/avatar.png";

const CharacterCreateForm = () => {
  const [form, setForm] = useState({
    name: "",
    gender: "",
    species: "",
    episode: ""
  })


  const handleChange = ({target: {name, value}}) => {
    setForm({
      ...form,
      [name]: value,
    })
  }

  return (
    <div>
      <img src={Image} alt="character img" />
      <label htmlFor="name">Name:</label>
      <input name="name" onChange={handleChange} type="text" value={form.name} />
      <label htmlFor="gender" >Gender:</label>
      <input name="gender" onChange={handleChange} type="text" value={form.gender} />
      <label htmlFor="species">Species:</label>
      <input name="species" onChange={handleChange} type="text" value={form.species} />
      <label htmlFor="episode">Episodes:</label>
      <input name="episode" onChange={handleChange} type="text" value={form.episode} />
    </div>
  );
};

export default CharacterCreateForm;
