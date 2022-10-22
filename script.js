let select = document.getElementById('route');
let selectAnd = document.getElementById('routeAnd');
let nums = document.getElementById('numbers');
const inputs = document.querySelectorAll('select');
const totalPriceElement = document.getElementById('total')
const numBil = document.getElementById('totalBilet')
const timeAb = document.getElementById('time')
const timeAbAnd = document.getElementById('timeAnd')
const z = document.getElementById('abwhere')
let biletov = document.getElementById('users')


select.addEventListener('change', function(){  
  let getValue = this.value;
  // this в этом контексте - элемент, который запустил фукнцию. То же, что и select.value;
  return getValue;
  
});
nums.addEventListener('change', function(){  
  let getValue2 = this.value;
  // this в этом контексте - элемент, который запустил фукнцию. То же, что и select.value;
  return getValue2;
  
});

timeAb.addEventListener('change', function(){  
  let getValue3 = this.value;
  // this в этом контексте - элемент, который запустил фукнцию. То же, что и select.value;
  return getValue3;
  
});

timeAbAnd.addEventListener('change', function(){  
  let getValue3 = this.value;
  // this в этом контексте - элемент, который запустил фукнцию. То же, что и select.value;
  return getValue3;
  
});


function calcul(){
    let totalPrice = select.value * nums.value + selectAnd.value * nums.value;
    
    const formatter = new Intl.NumberFormat('ru');

    
    totalPriceElement.innerHTML = formatter.format(totalPrice);
    numBil.innerHTML = nums.value;
    
    z.innerHTML = timeAb.value.substring(6, 14);
    // .substring(6, 14);
  
}

calcul();


for (const item of inputs) {
  nums.addEventListener('change', function(){  
    calcul();
    
  })

    select.addEventListener('change', function(){
        calcul();
        
    })

    timeAb.addEventListener('change', function(){  
      
      calcul();
    });

    timeAbAnd.addEventListener('change', function(){  
      
      calcul();
    });
   
}

const allowDrinksCheckbox = document.getElementById("allow-drinks");
const drinkSelect = document.getElementById("timeAnd");

allowDrinksCheckbox.addEventListener("change", (event) => {
  drinkSelect.disabled = !event.target.checked;
}, false);
  
nums.addEventListener('change', 
function(){
  const num = +this.value;
  if (num === 1){
    biletov.textContent = `билет`
  }
}
)