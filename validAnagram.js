const isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false
    }

    let map= {}

    for(let i = 0; i < s.length; i++) {
        let letter = s[i];
        if(!map[letter]) {
            map[letter] = 1;
        } else {
            map[letter]++;
        }
    }

    for(let i = 0; i < t.length; i++) {
        let letter = t[i];
        if(map[letter] === undefined) {
            return false
        } else if(map[letter] < 1) {
            return false;
        }
        map[letter]--;
    }

    return true

};

// The function isAnagram takes two strings, s and t, as input.
// It first checks if the lengths of the two strings are not equal. If they are not, it returns false, because anagrams must have the same number of characters.
// The code initializes an empty object, map, to store the frequency of characters in the string s.
// It then iterates through the characters in the string s using a for loop. For each character, it checks if the character is already present in the map object.
// If the character is not present in the map object, it adds the character to the map object and sets its value to 1. This indicates that the character has been encountered once in the string s.
// If the character is already present in the map object, the code increments the value of the map[letter] by 1. This keeps track of the frequency of the character in the string s.
// After the first for loop, the map object contains the frequency of characters in the string s.
// The code then iterates through the characters in the string t using another for loop. For each character, it checks if the map[letter] value is undefined or less than 1. If it is, it returns false, because this indicates that the character is not present in the string s or its frequency is less than the required number of times.
// If the map[letter] value is not undefined or less than 1, the code decrements the map[letter] value by 1. This is done to keep track of the number of times each character in the string s has been encountered in the string t.
// After the second for loop, if all characters in the string t are present in the string s and their frequencies are correct, the code returns true, indicating that the two strings are anagrams of each other.

s = "anagram";
t = "nagaram";
isAnagram(s,t);
