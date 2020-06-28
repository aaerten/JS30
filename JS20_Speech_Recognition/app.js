window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults=true;
recognition.lang="en";

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result',e =>{
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')

    p.textContent=transcript;
    if(e.results[0].isFinal){
        p=document
        .createElement('p');
        words.appendChild(p);
    }
    // if(transcript.includes('kartal')){
    //     console.log('🦅🦅🦅🦅🦅🦅🦅🦅🦅🦅')
    // }
    if(transcript.includes('call Mother')){
        console.log('MOTHER CALLİNG')
    }
    console.log(transcript);
});


recognition.addEventListener('end',recognition.start);


recognition.start();

// de	Deutsch
// en	English (United States)
// es	Español	
// it	Italiano
// pt_PT	Português (Portugal)