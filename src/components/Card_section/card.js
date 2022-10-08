function subcard(props) {
  return (
    <>
      <div className="card">
        <img
          src={props.img}
          className=" img-fluid card_img ms-5 mt-5"
          alt="profile"
        ></img>
        <p className="card-description mt-5">{props.description}</p>
      </div>
    </>
  );
}

export default subcard;
