//TASKS
// 1. Get user input as integer
const input = document.querySelector("#look-up").addEventListener("click", ()=> {
  const heigth = Number(document.querySelector("#height").value);
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
    for (let secondPlayer = firstPlayer + 1; secondPlayer < data.length; secondPlayer++) {
      if(Number(data[firstPlayer].h_in) + Number(data[secondPlayer].h_in) === value)
      {
        
        players.push([`${data[firstPlayer].first_name} ${data[firstPlayer].last_name}`,`${data[secondPlayer].first_name} ${data[secondPlayer].last_name}`])
      }
    }
  }
  return players;
}

const showData = async (value) => {
  const result = document.querySelector('.results')
  result.innerHTML = "";
  const data = await pairedPlayers(value);
  console.log(data)
  if(!data.length){
    result.innerHTML=`<li>Matches not found</li>`
  }
  else{
    data.map( element => result.innerHTML+=`<li>${element[0]} - ${element[1]}</li>`)
  }
} 
 showData()
//CONSTRAINS:
//1. Algorithm must be faster than O(n^2)
//2. All edge cases should be handled
//3. Unit tests

//FINAL PRODUCT
//1. Public GitHub repository
//2. ReadMe file explaining how to run the code