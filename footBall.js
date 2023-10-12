const axios = require("axios");

async function getWinnerTotalGoals(competition, year) {
   const response = await axios.get(`https://jsonmock.hackerrank.com/api/football_competitions?name=${competition}&year=${year}`);
   const result = response.data;
   const winnerTeam = result.data[0].winner;

   const apiCall1 = `https://jsonmock.hackerrank.com/api/football_matches?competition=${competition}&year=${year}&team1=${winnerTeam}`;
   const apiCall2 = `https://jsonmock.hackerrank.com/api/football_matches?competition=${competition}&year=${year}&team2=${winnerTeam}`;

   let counter = 0;
   const response1 = await axios.get(apiCall1);
   const { total_pages: page1 } = response1.data;

   for (const count of Array.from({ length: page1 }, (_, i) => i + 1)) {
      const response = await axios.get(`${apiCall1}&page=${count}`);
      const result = response.data;
      for (const item of result.data) {
         if (item.team1goals) {
            counter = counter + Number(item.team1goals);
         }
      }
   }

   const response2 = await axios.get(apiCall2);
   const { total_pages: page2 } = response2.data;

   for (const count of Array.from({ length: page2 }, (_, i) => i + 1)) {
      const response = await axios.get(`${apiCall2}&page=${count}`);
      const result = response.data;
      console.log(result);

      for (const item of result.data) {
         if (item.team2goals) {
            counter = counter + Number(item.team2goals);
         }
      }
   }

   return counter;
}