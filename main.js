const button = document.querySelector('button')
const joke = document.querySelector('.joke')
let change = [
    'When you have a bladder infection, urine trouble.', 
    "You can't trust a ladder. It will always let you down",
    'Why do bears have hairy coats? Fur protection.', 
    'A ghost walks into a bar and asks for a glass of vodka but the bar tender says, “sorry we don’t serve spirits”',
    'How many kids with ADD does it take to change a lightbulb? Lets go ride bikes!',
    'What do you call a nervous javelin thrower? Shakespeare.',
    'Pie is $2.50 in Jamaica and $3.00 in The Bahamas. These are the pie-rates of the Caribbean.',
    'What did the ocean say to the shore? Nothing, it just waved.',
    'Why should you never trust a pig with a secret? Because its bound to squeal.',
    'Ive started telling everyone about the benefits of eating dried grapes. Its all about raisin awareness.',
    'I used to hate facial hair, but then it grew on me.',
    'I considered building the patio by myself. But I didn\'t have the stones.',
    'I was wondering why the frisbee was getting bigger, then it hit me.'
]

button.addEventListener('click', jokeChange)

function jokeChange(){
const jokelol = Math.floor(Math.random() * change.length)
joke.innerText = change[jokelol]
}