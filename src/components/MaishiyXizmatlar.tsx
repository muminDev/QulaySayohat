import dataMain from "../data/data";
import warsaw from "../images/warsaw.png";

const MaishiyXizmatlar = () => {
  return (
    <div className="container">
      <div className="row">
        {dataMain.map((item) => (
          <div key={item.id} className="col-md-3 col-sm-6 mb-3">
            <div className="card" style={{ width: "100%" }}>
              <img src={warsaw} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaishiyXizmatlar;
