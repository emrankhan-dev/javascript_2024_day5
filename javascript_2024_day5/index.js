/* 
This Christmas, you’ve been tasked with running an anagram quiz at 
the family gathering.

You have been given a list of anagrams, but you suspect that some 
of the anagram pairs might be incorrect.

Your job is to write a JavaScript function to loop through the array
and filter out any pairs that aren’t actually anagrams.

For this challenge, spaces will be ignored, so "Be The Helm" would 
be considered a valid anagram of "Bethlehem".
*/ 

let anagrams = [
    ["Can Assault", "Santa Claus"],
    ["Refreshed Erudite Londoner", "Rudolf the Red Nose Reindeer"],
    ["Frosty The Snowman", "Honesty Warms Front"],
    ["Drastic Charms", "Christmas Cards"],
    ["Congress Liar", "Carol Singers"],
    ["The Tin Glints", "Silent Night"],
    ["Be The Helm", "Betlehem"],
    ["Is Car Thieves", "Christmas Eve"], 
];

function findAnagrams(array){
    array.forEach(pair => {
        // console.log(pair[0])
        // console.log(pair[1])
        const stringOne = pair[0]
        const stringTwo = pair[1]
        
        const processedStringOne = processingString(stringOne)
        const processedStringTwo = processingString(stringTwo)
        
        console.log(
        processedStringOne === processedStringTwo
        ? `${stringOne} and ${stringTwo} are anagrams`
        : `${stringOne} and ${stringTwo} are not anagrams`
        )
    })
}

function processingString(str) {
// trim for removing leading and trailing spaces 
// make lowercase 
// use split and join for removing spaces from middle 
// sort is for arranging charecters alphabetically 
// then join again 
    return str.trim().toLowerCase().split(' ').join('').split('').sort().join('')
}

findAnagrams(anagrams)


 