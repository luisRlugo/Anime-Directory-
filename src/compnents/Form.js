import { useState } from "react";

export default function Form(props) {
  // Declare and initialize state variable using useState hook
  const [formData, setFormData] = useState({
    searchTerm: "",
  });

  // Define function to update form data whenever the input changes
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  // Define function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the animesearch function passed in as a prop from the parent component, with the search term from the form data
    props.animesearch(formData.searchTerm);
  };

  return (
    <div className="formBox">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={formData.searchTerm}
          name="searchTerm"
          placeholder="Search Anime..."
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
