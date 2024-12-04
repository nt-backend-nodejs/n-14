// function getHotelDetails() {
//   // Mehmonxona ma'lumotlari olingan.
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, `Mehmonxona ma'lumotlari olingan.`);
//   });
// }
// function getFlightDetails() {
//   // Parvoz ma'lumotlari olingan.
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, `Parvoz ma'lumotlari olingan`);
//   });
// }
// function getWeatherDetails() {
//   // Ob-havo ma'lumotlari olingan.
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, `Ob-havo ma'lumotlari olingan`);
//   });
// }

// async function asyncFunc() {
//   try {
//     console.time("PROMISE");
//     // const hotelData = await getHotelDetails();
//     // const flightData = await getFlightDetails();
//     // const weatherData = await getWeatherDetails();

//     // console.log(hotelData);
//     // console.log(flightData);
//     // console.log(weatherData);

//     const result = await Promise.all([
//       getHotelDetails(),
//       getFlightDetails(),
//       getWeatherDetails(),
//     ]);
//     console.log(result);
//     console.timeEnd("PROMISE");
//   } catch (error) {
//     console.error(error);
//   }
// }

// asyncFunc();

function getCurrentYear() {
  return new Promise((res) => {
    setTimeout(res, 3000, new Date().getFullYear());
  });
}

// const asyncFunc = async () => {
//   const result = await getCurrentYear();
//   console.log(result);
// };

// asyncFunc()

const getMyage = async (born) => {
  const currentYear = await getCurrentYear();

  const result = currentYear - born;
  console.log(result);
};

getMyage(2000);



