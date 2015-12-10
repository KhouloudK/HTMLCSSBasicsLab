
var diametres = [4878, 12104, 12756, 6787,142800,120000, 51200, 48600];
var names = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
    
    var bloc = document.getElementById("blocks");
        
        for (var j = 0; j < diametres.length; j++) {
            var mondiv = document.createElement('div');
            mondiv.style.width = diametres[j]*(700/170000)+"px";
            mondiv.textContent = names[j];
            mondiv.style.margin = "15px";
            mondiv.style['padding'] = "0 0 0 20px";
            bloc.appendChild(mondiv);
          }