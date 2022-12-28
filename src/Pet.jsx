const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <>
      <a href={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={hero} alt={props.name} />
        </div>

        <div className="info">
          <h1>{props.name}</h1>
          <h2>{props.animal} - {props.breed} - {props.location}</h2>
        </div>
      </a>
    </>
  );
};

export default Pet;
