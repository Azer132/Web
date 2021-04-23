function getYear() {
    var yearbirth= prompt("Your birth year");
    var ageInDays= (2021-yearbirth)*365;
    var h1=document.createElement('h1');
    var answer=document.createTextNode('Your age is '+ageInDays+' days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(answer);
    document.getElementById("flex-box-result").appendChild(h1);

}

function reset(){
    document.getElementById('ageInDays').remove();
}