/*No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/

let userNames = ["Admin","Juned","Saif","Bilal","Zeeshan","Asad"]
for (let i=0; i<userNames.length; i++) {
        if (userNames[i] === "Admin"){
            console.log(`Hello admin, would you like to see a status report?`)
        }
        else{
            
            console.log(`Welcome! Hello ${userNames[i]}, thank you for logging in again.`)
        }
     }

    //If the list is empty, print the message We need to find some users!
    console.log(`When array is empty.\n`);
    //Remove all of the usernames from your array
    userNames = []
    if ( userNames.length == 0) {
        console.log(`We need to find some user!`)
    }
    else {

    }
