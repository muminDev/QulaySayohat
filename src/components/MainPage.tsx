import "../styles/MainPage.css"; // Import your CSS file
import Carousel from "./Carousel";

const MainPage = () => {
  return (
    <>
      <Carousel />
      <div className="container d-flex justify-content-center align-items-center ">
        <h2 className="text-center">
          Qulaylik.com sayti orqali Polsha davlatidagi o'zingizga kerakli
          bo'lgan xizmatlar va ularning manzillari topishingiz mumkin.
        </h2>
      </div>
    </>
  );
};

export default MainPage;
