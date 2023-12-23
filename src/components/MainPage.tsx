import "../styles/MainPage.css"; // Import your CSS file

const MainPage = () => {
  return (
    <div className="blur-background">
      <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
        <div className="row">
          <div className="col-md-6 text-center">
            <div className="text-container">
              <h1 className="text-on-main">
                Siz bu sayt orqali Polshadagi o'zingiz uchun kerakli xizmatlarni
                va ularning manzillarini topishingiz mumkin
              </h1>
            </div>
          </div>
          <div className="col-md-6 text-center">Column 2</div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
