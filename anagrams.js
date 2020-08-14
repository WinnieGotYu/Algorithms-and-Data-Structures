/** Give two strings, write a fxn to determine if the second string is an anagram 
 * to of the first
 * 
 * validAnagram("anagram", "nagaram") // true
 * validAnagram("aaz". "zza") // false 
 */

 function validAnagram(first, second){
   if(first.length !== second.length){
     return false;
   }
   
   const lookup = {};
   
   for(let i = 0; i < first.length; i++){
     let letter = first[i];
     //if letter exist, increment otherwise set to 1 
     lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
   }
   console.log(lookup);

   for(let i = 0; i < second.length; i++){
     let letter = second[i]
      //can't find letter or letter is zero then its not an anagram 
     if(!lookup[letter]){
       return false;
     } else {
       lookup[letter] -= 1;
     }
   }
   
   return true;
}



validAnagram('cat', 'tac')