# MachEight

### How it works?

    1. Whent the user write and integer & clicks on the look up button.
    2. It's value is save in a variable **heigth** as integer
    3. The input field is cleared
    4. The **showData()** function is call with the value of **heigth** as a parameter 
        **function showData()**
        1. Capture the div with id *results* as a target in **result** variable
        2. Clear is inner HTML.
        3. As **showData()** 

    1. This project use the fecth API to get the data of NBA players from this endpoint
  [NBA Players](https://mach-eight.uc.r.appspot.com/).
    2. Converts it to JSON format


## Live Demo

    Wanna see it on live? 
  [Visit Now](https://ryudesire.github.io/nba-project-macheight/ "Live Demo")

## Get the source code

    To download:
  [Download](https://github.com/RyuDesire/nba-project-macheight/archive/refs/heads/main.zip)
    
    To Clone:
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