const form=document.querySelector('form');

form.addEventListener('submit',function (e) {
    e.preventDefault();
    const height=parseInt(document.querySelector('#hieght').value);
    const weight=parseInt(document.querySelector('#Weight').value);
        const result=document.querySelector('#result');
        const g=document.querySelector("#guide")
        if(height<0 || isNaN(height)||height===''){
            result.innerHTML=" OhO ! Enter Valid Height"
        }
        else if(weight<0 || isNaN(weight)||weight===''){
            result.innerHTML=" OhO ! Enter Valid weight"
        }
        else{
            const guid=(weight/((height*height)/10000)).toFixed(2)
            // console.log(guid);
            if(guid<=18.6){
                console.log(guid);
                result.innerHTML=guid;
                g.innerHTML="Under Weight";
            }
            else if(guid>=18.6&&guid<=24.9){
                result.innerHTML=guid;
                g.innerHTML="Normal Weight";
            }
            else {
                result.innerHTML=guid;
                g.innerHTML="Over Weight";
            }
        }

    // console.log(height);
})