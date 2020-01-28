//alert("here");
let el = document.getElementById("get");
//alert(el);

    addEventListener("click", async function(){

        try{
            document.getElementById("hide_show_h2").className = "show";
            el.disabled = true;
            let response = await fetch('/orders/getItems');
            let result = await response.json();
            //let text = await response.text()
            alert(response.headers.get('Content-Type'));
            //alert(text.slice(0,80)+'..');
            // for (let [key, value] of response.headers) {
            //     alert(`${key} = ${value}`);
            // }
            //alert("hey");
            let mainContainer = document.getElementById("displayDiv");
            //mainContainer.innerHTML = JSON.stringify(result);
            
            for (var i = 0; i < result.length; i++) {
                let div = document.createElement("div");
                div.innerHTML = '<tr><td>'+result[i].id +' </td><td>'+result[i].name+' </td><td>'+result[i].price +'</td><tr>';
                //div.innerHTML = 'id:'+result[i].id +' name:'+result[i].name+' price'+result[i].price;
                mainContainer.appendChild(div);
            }
        }
        catch(err){
            alert(err.message);
        }
        finally{
            document.getElementById("hide_show_h2").className="hide";
            el.disabled = false;
        }
        
    });

