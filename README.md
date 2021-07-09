# MachEight

### How it works?

  The user input a number in the input field, this gets saved in a variable, the input field is cleared and the **showData()** function is call passing to it the value of the input text that we saved before as a parameter.

  This project use the fecth API to get the data of NBA players from this endpoint
  [NBA Players](https://mach-eight.uc.r.appspot.com/). Converts it to JSON format.
  
  Inside the asynchronous function **showData()** we target the div with id **results** where the data will be show and clear any HTML inside. we call, pass the value of the users input and **await** for the response of the asynchronous function **pairedPlayers()**.

  Inside the **pairedPlayers()** the asynchronous function **getData()** is called and the data from the **await** of is response will be save in a variable.
  
  #### The loop
   


## Live Demo

  ### Wanna see it on live? 
  [Visit Now](https://ryudesire.github.io/nba-project-macheight/ "Live Demo")

## Get the source code

  ### To download: [Download](https://github.com/RyuDesire/nba-project-macheight/archive/refs/heads/main.zip)
    
  ### To Clone:
  *NOTE: As a requirement to clone this repository Git must be installed in you PC*
      Use you prefered command prompt and navigate to the folder where you want to donwload the copy of this repository
  **Copy and paste the following code in your command prompt:**
  *git clone https://github.com/RyuDesire/nba-project-macheight.git*

#### Things to improve
   * Write the tests cases
      * User's input should be a integer
   * User can't press look up button without data in the input
   * Solve issues with overload of data. example: input_data = 156 => result 6630
      lazyload ? pagination ?
   * Responsive design 
