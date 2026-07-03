const mixer = document.getElementById("mixer");

for(let i=1;i<=24;i++){

    mixer.innerHTML += criarCanal(i);

}

mixer.innerHTML += criarMaster();

function criarCanal(numero){

return`

    <div class="channel">

    <div class="display">

    Ch ${numero}

    </div>

    <div class="meter">

    <div class="level"></div>

    </div>

    <button>Mute</button>

    <button>Solo</button>

    <input type="range"

    min="0"

    max="100"

    value="15"

    class="fader"

    orient="vertical">

    </div>

    `;

}

function criarMaster(){

return`

        <div class="master">

        <div class="display">

        MASTER

        </div>

        <div class="meter">

        <div class="level"></div>

        </div>

        <input type="range"

        min="0"

        max="100"

        value="80"

        class="fader"

        orient="vertical">

        </div>

        `;

}