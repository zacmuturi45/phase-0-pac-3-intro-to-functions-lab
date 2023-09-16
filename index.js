function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(`${string}`.toUpperCase());
}

logShout('hello')

function logWhisper(string) {
    console.log(`${string}`.toLowerCase());
}
logWhisper('HELLO');

function sayHiToHeadphonedRoommate(string) {
    return `${string === string.toLowerCase() ? "I can\'t hear you!" : string === string.toUpperCase() ? "YES INDEED!" : "I would love to!"}`;
}
console.log(sayHiToHeadphonedRoommate('hello'));
console.log(sayHiToHeadphonedRoommate('HELLO'));
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));

