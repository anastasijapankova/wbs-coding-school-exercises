// Write your function here:

function tipCalculator(a, b){
    if (a === 'bad'){
      return b * 0.05
    } else if (a === 'ok'){
      return b * 0.15
    } else if (a === 'good'){
      return b * 0.20
    }
    else if (a === 'excellent'){
      return b * 0.30
    } else {
      return b * 0.18
    }
    }
    
    console.log(tipCalculator('good', 10))
    
    
    // Uncomment the line below when you're ready to try out your function
    // console.log(tipCalculator('good', 100)) //should return 20
    
    // We encourage you to add more function calls of your own to test your code!
    