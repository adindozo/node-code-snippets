

document.addEventListener("DOMContentLoaded", function () {
   document.getElementById('interface').style.visibility = 'hidden';

   const url = 'https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/play.php';
   document.getElementById('playList').addEventListener('change', (e) => {



      document.getElementById('interface').style.visibility = 'hidden';
      let selectedPlay = e.target.value;
      if (selectedPlay == 0) return;
      const list = document.getElementById("playList");
      if (list.firstElementChild.value == 0) list.removeChild(list.firstElementChild);
      console.log(selectedPlay)
      fetch(url + '?name=' + selectedPlay).then(res => res.json()).then((data) => {
         document.getElementById('interface').style.visibility = 'visible';
         // <select id="actList"></select>
         let acts = document.getElementById('actList');

         acts.innerHTML = '';

         for (let act of data.acts) {
            let opt = document.createElement('option');
            opt.innerText = act.name;
            opt.value = act.name;
            acts.appendChild(opt);

         }
         const list = document.getElementById("actList");

         let selectedAct = data.acts.find((act) => {
            return act.name == 'ACT I';
         })
         let scenes = selectedAct.scenes;

         let sceneList = document.getElementById('sceneList');
         sceneList.innerHTML = '';

         scenes.forEach(scene => {
            let opt = document.createElement('option');
            opt.innerText = scene.name;
            opt.value = scene.name;
            sceneList.appendChild(opt);
         });
         let speakerSet = new Set;
         scenes[0].speeches.forEach((e) => {
            speakerSet.add(e.speaker);

         })
         document.getElementById('playerList').innerHTML = '';
         for (let speaker of speakerSet) {
            let opt = document.createElement('option');
            opt.innerText = speaker;

            document.getElementById('playerList').appendChild(opt);
         }
         //    <!-- Note you will need to remove or comment out some of this markup; 
         //    it is there to show you the markup that your javascript will need to generate.
         //    -->   
         //  <h2>Play title here</h2>
         //  <article id="actHere">
         //     <h3>Act name here</h3>
         //     <div id="sceneHere">
         //     <h4>Scene name here</h4>
         //     <p class="title">scene title</p>
         //     <p class="direction">stage direction</p>
         //     <div class="speech"><span>BERNARDO</span><p>Who's there?</p></div>		
         //     <div class="speech"><span>FRANCISCO</span><p>Nay, answer me: <b>stand</b>, and unfold yourself.</p></div>		
         //     <div class="speech"><span>MARCELLUS</span><p>'Tis gone!</p><p>We do it wrong, being so majestical,</p><p>To offer it the show of violence;</p><p>For it is, as the air, invulnerable,</p><p>And our vain blows malicious mockery.</p><em>Exit Ghost</em></div>
         //   </div>
         //  </article>
         document.querySelector('#playHere h2').innerText = data.title;
         document.querySelector('#playHere h3').innerText = data.acts[0].name;
         document.querySelector('#playHere h4').innerText = data.acts[0].scenes[0].name;
         document.querySelector('.title').innerText = data.acts[0].scenes[0].title;
         document.querySelector('.direction').innerText = data.acts[0].scenes[0].stageDirection;
      })
   })
   /*
     To get a specific play, add play name via query string, 
      e.g., url = url + '?name=hamlet';
    
    https://www.randyconnolly.com/funwebdev/3rd/api/shakespeare/play.php?name=hamlet
    https://www.randyconnolly.com/funwebdev/3rd/api/shakespeare/play.php?name=jcaesar
     
   */


   /* note: you may get a CORS error if you test this locally (i.e., directly from a
      local file). To work correctly, this needs to be tested on a local web server.  
      Some possibilities: if using Visual Code, use Live Server extension; if Brackets,
      use built-in Live Preview.
   */
});