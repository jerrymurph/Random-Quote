let quotes = [
    {
        quote: 'Our greatest glory is not in never falling, but in rising every time we fall.',
        author: 'Confucius'
    },
    {
        quote: 'All our dreams can come true, if we have the courage to pursue them.',
        author: 'Walt Disney'
    },
    {
        quote: 'It does not matter how slowly you go as long as you do not stop',
        author: 'Confucius'
    },
    {
        quote: 'Everything you’ve ever wanted is on the other side of fear.',
        author: 'George Addair'
    },
    {
        quote: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
        author: 'Winston Churchill'
    },
    {
        quote: 'Hardships often prepare ordinary people for an extraordinary destiny.',
        author: 'C.S. Lewis'
    },
    {
        quote: 'I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.',
        author: 'Nelson Mandela'
    },
    {
        quote: 'There is only one thing that makes a dream impossible to achieve: the fear of failure.',
        author: 'Paulo Coelho'
    }
];

function selectQuote() {
    let newQuoteButton = document.getElementById('new-quote');
    let quoteText = document.getElementById('text');
    newQuoteButton.addEventListener('click', function(){
        let randomNum = Math.floor((Math.random() *8));
        document.getElementById('text').innerText = quotes[randomNum].quote;
        document.getElementById('author').innerText = quotes[randomNum].author;
    });
}

selectQuote();