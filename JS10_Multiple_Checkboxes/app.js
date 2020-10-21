const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e){
    //Chech if they had the shift keyDown
    //AND check that they are checking it
    let inBetween=false;
    if(e.shiftKey && this.checked){
        //go ahead and do what we 
        //loop over every single checkbox
        checkboxes.forEach(checkbox => {
            if(checkbox === this || checkbox === lastChecked){
                inBetween=!inBetween;
            }
            if(inBetween){
                checkbox.checked=true;
            }
        });

    }
lastChecked=this;
}

checkboxes.forEach(checkboxes => checkboxes.addEventListener('click',handleCheck));