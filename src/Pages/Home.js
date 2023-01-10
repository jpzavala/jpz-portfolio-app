import mainPhoto from "../images/mainphoto.JPG";

const Home = () => {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${mainPhoto})`,
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5",
      }}
    ></div>
  );
};

export default Home;
