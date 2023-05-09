import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const PokemonForm = ({ addPokemon }) => {
  const initialState = {
    name: "",
    hp: 60,
    sprites: {
      front: "",
      back: ""
    }
  }

  const [formData, setFormData] = useState(initialState)
  const { name, hp, sprites: {front, back} } = formData

  const handleChange = (e) => {
    if (e.target.name === "front" || e.target.name === "back") {
      setFormData({...formData, 
        sprites: {...formData.sprites,
        [e.target.name]: e.target.value}
      })
    } else {
      setFormData({...formData, 
        [e.target.name]: e.target.value})
    }
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          console.log("submitting form...");
          e.preventDefault()
          //! FETCH GOES HERE 
          addPokemon(formData)
          setFormData(initialState)
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={handleChange} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={handleChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={front}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={back}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
