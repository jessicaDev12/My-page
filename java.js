var check=document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="index.html"
    }else{
        location.href="ingles.html"
    }
}

/**Sentencias de si se cumple algún click en los elementos establecidos*/
const body = document.querySelector("body"),
        sidebar = body.querySelector(".sidebar"),
        toggle = body.querySelector(".toggle"),
        searchBtn = body.querySelector(".search-box"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text");

        toggle.addEventListener("click", () =>{
            sidebar.classList.toggle("close"); /*Se cierra la barra*/
        })

        /**Cambio de tema e iconos del switch */
        modeSwitch.addEventListener("click", () =>{
            body.classList.toggle("dark");

            if(body.classList.contains("dark")){
                modeText.innerText = "Modo Claro"
            }else{
                modeText.innerText = "Modo oscuro"
            }
        })

        function redes(){
          var seleccion = document.getElementById("Contacto").value;
          if (seleccion !== "") {
            window.location.href = seleccion;
          }
        }

        
        const expandButton = document.getElementById('expand-button');
        const whiteBox = document.getElementById('white-box');
        
        expandButton.addEventListener('click', () => {
            expandButton.classList.toggle('expanded');
        });
        
        whiteBox.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        document.getElementById('results-button').addEventListener('click', () => {
            const answers = document.querySelectorAll('input[type="radio"]:checked');
            let correctAnswers = 0;
            answers.forEach((answer) => {
                if (answer.value === 'c') {
                    correctAnswers++;
                }
            });
            const resultText = `Has obtenido ${correctAnswers} respuestas correctas de ${answers.length}`;
            document.getElementById('result-box').textContent = resultText;
        });

        var variable=0;

function A1 (){
	if(variable<1){
	var imagen = document.getElementById('img1');
	imagen.className = 'claro';
	variable=variable+1;
	}else{
	var imagen = document.getElementById('img1');
	imagen.className = 'oscuro';
	variable=variable-1;
	}
}



function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss;
    let watch = document.querySelector('#digital');
    watch.innerHTML = time;

    let hhRotation = ((hh % 12) *180) / 6;
    let mmRotation = (mm * 180) / 30;
    let ssRotation = (ss * 180) / 30;

    document.querySelector('#hours').style.transform = "rotate(" + hhRotation + "deg)";
    document.querySelector('#minutes').style.transform = "rotate(" + mmRotation + "deg)";
    document.querySelector('#seconds').style.transform = "rotate(" + ssRotation + "deg)";
}

setInterval(currentTime, 1000);