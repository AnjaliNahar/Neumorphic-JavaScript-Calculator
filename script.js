const themeToggle = document.getElementById('themeToggle');
const result = document.getElementById('result');
const storedTheme = localStorage.getItem('theme');
if(storedTheme == 'dark'){
   
     document.documentElement.setAttribute("data-theme", "dark");
     themeToggle.checked = true;
   }
   
   // Theme toggle event
   themeToggle.addEventListener("change", function () {
     if (this.checked) {
       document.documentElement.setAttribute("data-theme", "dark");
       localStorage.setItem("theme", "dark");
     } else {
       document.documentElement.setAttribute("data-theme", "light");
       localStorage.setItem("theme", "light");
     }
   });


   function appendToResult(value){
    result.value += value;
    playButtonSound();
   }

   function backSpace(){
    result.value = result.value.slice(0,-1);
    playButtonSound();

   }

   function clearResult(){
    result.value ='';
    playButtonSound();
   }

   function calculateResult(){
      playButtonSound();
      try{
         if(result.value ==' '){
         result.value = '0';}
         result.value = eval(result.value);
      }
     
      catch(e){
         result.value = 'ERROR';
      }
   }

   function playButtonSound(){
    const buttonSound = document.getElementById('buttonSound');
    buttonSound.play();
   }