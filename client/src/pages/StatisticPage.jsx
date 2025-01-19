import Header from "../components/header/Header";
import StatisticCard from "../components/statistic/StatisticCard";
const StatisticPage = () => {

  return (
    <>
      <Header />
      <h1 className='text-4xl font-bold text-center mb-4'>İstatistiklerim</h1>
      <div className="statistic-section px-6">
        <h2 className="text-lg mb-6">Hoş Geldin <span className="text-green-700 font-bold text-xl">admin</span></h2>
        <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 my-10 md:gap-10 gap-4">
         <StatisticCard title={"Toplam Müşteri"} amount={"10"} img={"logo192.png"}/>
         <StatisticCard title={"Toplam Kazanç"} amount={"9"} img={"logo192.png"}/>
         <StatisticCard title={"Toplam Satış"} amount={"8"} img={"logo192.png"}/>
         <StatisticCard title={"Toplam Ürün"} amount={"7"} img={"logo192.png"}/>
        </div>

        <div>
        </div>
      </div>
    </>
  )
}

export default StatisticPage

