//TASKS
// 1. Get user input as integer
const input = document.querySelector("#look-up").addEventListener("click", ()=> {
  const heigth = Number(document.querySelector("#height").value);
  document.querySelector("#height").value = '';
  showData(heigth);
});

// 2. download data from endpoint (https://mach-eight.uc.r.appspot.com/)
const getnbaData = async () => {
  const fecthData = await fetch('https://mach-eight.uc.r.appspot.com/');
  const response = await fecthData.json();
  return response.values;
}

// 3. print list of all players criteria (2 weights that added up to are === user input) if not print ("Not matches found")
// test_data: 139 expected_output [Breving Knight, Nate Robinson, Mike Wilks]
const pairedPlayers = async (value) => {
  const data = await getnbaData();
  let players = [];
  for (let firstPlayer = 0; firstPlayer < data.length; firstPlayer++)
  {
    let diference = value - Number(data[firstPlayer].h_in);
    let matches = data.filter((player) => Number(player.h_in) === diference && data.indexOf(player) > firstPlayer);
      if(matches){
        matches.forEach((player) => players.push([`${data[firstPlayer].first_name} ${data[firstPlayer].last_name}`, `${player.first_name} ${player.last_name}`]))
      }
    // for (let secondPlayer = firstPlayer + 1; secondPlayer < data.length; secondPlayer++) {
    //   if(Number(data[firstPlayer].h_in) + Number(data[secondPlayer].h_in) === value)
    //   {
    //     players.push([`${data[firstPlayer].first_name} ${data[firstPlayer].last_name}`,
    //     `${data[secondPlayer].first_name} ${data[secondPlayer].last_name}`])
    //   }
    }
  return players;
}

const showData = async (value) => {
  const result = document.querySelector('.results')
  result.innerHTML = "";
  const data = await pairedPlayers(value);
  if(!data.length){
    result.innerHTML=`<li>Matches not found</li>`
  }
  else if(data.length <= 100 ){
    for(let i = 0; i < data.length; i++){
      result.innerHTML+=`<li>${data[i][0]} - ${data[i][1]}</li>`
    //data.map( element => result.innerHTML+=`<li>${element[0]} - ${element[1]}</li>`)
  }
}
  else{
    //pending inplementations
    result.innerHTML=`<li>Data exceed the actual limits.<br>Check the console</li>`
    console.log(data);
  }
}
showData();
//CONSTRAINS:
//1. Algorithm must be faster than O(n^2)
//2. All edge cases should be handled
//3. Unit tests

//FINAL PRODUCT
//1. Public GitHub repository
//2. ReadMe file explaining how to run the code