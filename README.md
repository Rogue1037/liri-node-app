# liri-node-app

**Creator**: `Dylan Davidson`

**Created on**: `April 9th 2019`

- - -

## ABOUT THE APP
LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives back data. The user has the option of using four commands (listed below) in conjuntion with specific parameters associated with the commands. The  `Commands` are:

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`

- - -
## HOW TO USE LIRI
### **Video Guide**

Video link of me running through the functions.


### **Step by Step instructions**

1. Open your terminal such as Bash.
2. Navigate to the folder that contains the `liri.js` file. 
3. Depending on the command you run, the output will vary. 

    **Example 1**: Run the `concert-this` command
    
        node liri.js concert-this <name of artist or band>
    
    Output: The system will display a list of all events and locations where the artist or band will perform. I haven't finished the moment function to fix the date. this will also append to the random.txt file.

     **Example 2**: Run the `spotify-this-song` command
    
        node liri.js spotify-this-song <name of song>
    
    Output: The system will display a list of information associated with the song. I wasn't able to get the info out of the API. It is pseudocoded and I know I am close. I am still working on it now, so I may get it fixed before you get to it.

    

    **Example 3**: Run the `movie-this` command
    
        node liri.js movie-this <name of movie>
    
    Output: The system will display information associated with the movie. The system will also log all the results in the random.txt file. I also cannot get the undeifined to give the info for Mr. Nobody. It is coded, but I think I have it in the wrong spot.

    **Example 4**: Run the `do-what-it-says` command
        
        node liri.js do-what-it-says
        
    Output: The system will read the text in the random.txt file, and perform the comman listed in the random.txt file. ** I am still trying to get the info from the random.txt file. It is another thing I am still working on.
- - -

## TECHNOLOGIES USED
* Javascript
* Nodejs
* Node packages:
    * Node-Spotify-API
    * Request
    * DotEnv
* APIs used:
    * Bands in Town
    * OMDB
    * Axios
* Git
* GitHub