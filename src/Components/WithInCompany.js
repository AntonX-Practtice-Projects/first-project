import "./WithInCompany.css";

const WithInCompany = (props) => {
  return (
    <div className="container2">
      <h3 className="head-3__company">AntonX</h3>
      <h3 className="head-3__techStack">{props.techStack}</h3>
    </div>
  );
};

export default WithInCompany;
