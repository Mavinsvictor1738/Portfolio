// Typing Effect
const typing = document.getElementById("typing");

if(typing){
  const words = [
    "IT Support Specialist",
    "Web Developer",
    "Graphic Designer",
    "Digital Education Trainer"
  ];

  let i = 0;
  let j = 0;
  let isDeleting = false;
   l
  function type(){
    const currentWord = words[i];

    if(!isDeleting){
      typing.textContent = currentWord.slice(0, ++j);
      if(j === currentWord.length){
        isDeleting = true;
        setTimeout(type,1000);
        return;
      }
    } else {
      typing.textContent = currentWord.slice(0, --j);
      if(j === 0){
        isDeleting = false;
        i = (i+1) % words.length;
      }
    }

    setTimeout(type, isDeleting ? 60 : 120);
  }

  type();
}
