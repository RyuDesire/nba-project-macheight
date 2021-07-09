# MachEight

### How it works?

  The user input a number in the input field, this gets saved in a variable, the input field is cleared and the **showData()** function is call passing to it the value of the input text that we saved before as a parameter.

  This project use the fecth API to get the data of NBA players from this endpoint
  [NBA Players](https://mach-eight.uc.r.appspot.com/). Converts it to JSON format.
  
  Inside the asynchronous function **showData()** we target the div with id **results** where the data will be show and clear any HTML inside. we call, pass the value of the users input and **await** for the response of the asynchronous function **pairedPlayers()**.

  Inside the **pairedPlayers()** the asynchronous function **getData()** is called and the data from the **await** of is response will be save in a variable **data**.
  
  #### The loop
  A for loop is used to iterate over each of the one of the positions inside the **data** array using the **firstPlayer** variable as a counter and looping over data as far as *firstPlayers be smaller than the length of the **data** array*

  Inside the loop a **diference** variable is use to save de result of the subtracting of the integer value of the height in inches of the player in the position **firstPlayer** inside the **data** array from the user input value;

  Next a **macthes** variable gets assigned the result of filtering the **data** array where the value of the height as integer is equal in type and value to the **diference** value and the index of the player that is actually been filtered is greater than **firstPlayer** in the actual iteraction (This last condition is to make sure that the same that the iteration don't check back the indices already checked)

  The following step is to check if there is data inside the **matches** array, if there is data with the use of **forEach()** we will iterate over each one of the **matches** array items and use **push()** to add an array consisting of the **first_name** + **last_name** of the player save in the **data** array in the actual position **firstPlayer** as the position [0] of the array that will be **push()** into the **players** array, and as the position [1] the value of the **first_name** + **last_name** of the player that is getting iterate over actually for the **forEach()**  will be save. And the result are two names pushed as an array to the **players** array.

  At the after **for** loop finish it's iterations the **players** array is returned as a result of the **pairedPlayers()** function
  
  **showData()** gets the result of the **pairedPlayers()** function that in this case will be an array.

  #### The conditions
  Next checks if the there is data inside the **data** variable (this is because even if there are not names pushed in the **for** loop iterations, **data** is still an empty array) using the length as the checking condition.

  If there is not the content of the **results** div that was target **result** variable will change to show *Matches not found

  Else if there is content and the content length is less or equal to 100, a **for** loop is use to iterate over each **element** inside the **data** array and create a list item for each **element** in is positions [0] and [1]

  Else in case the **data** lenght exceds the 100, the **results** div will be updated to show *Data exceed the actual limits. Check the console* (the **data** array will be loaded to the console) to prevent a memory overload when the DOM is manipulated to paint the list items inside the **results** div.



## Live Demo

  ### Wanna see it on live? 
  [Visit Now](https://ryudesire.github.io/nba-project-macheight/ "Live Demo")

## Get the source code

  ### To download: 
  [Download](https://github.com/RyuDesire/nba-project-macheight/archive/refs/heads/main.zip)
    
  ### To Clone:
  *NOTE: As a requirement to clone this repository Git must be installed in you PC*

  Use you prefered command prompt and navigate to the folder where you want to donwload the copy of this repository
  **Copy and paste the following code in your command prompt:**
  
  *git clone https://github.com/RyuDesire/nba-project-macheight.git*

  Go inside the folders project on you PC and open the index.html

---
### Things to improve

   * Write the tests cases
      * User's input should be a integer
   * User can't press look up button without data in the input
   * Solve issues with overload of data. example: input_data = 156 => result 6630
      lazyload ? pagination ?
   * Responsive design (Mobile) 
