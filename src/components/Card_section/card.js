function subcard(props) {
  return (
    <>
        <div className="row justify-content-center mt-2">
          <div className="col-lg-12 col-md-12 col-sm-8 col-8">
            <div className="card text-center mt-4">
              <div className="cardimg_box">
                <img
                  src={props.img}
                  className={props.className}
                  alt="profile"
                ></img>
              </div>
              <p className="card-description mt-4">{props.description}</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default subcard;
