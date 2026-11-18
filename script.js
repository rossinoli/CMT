// sprite em pixel: escudo com estrela
(function(){
  var rows=["oooooooooooo","opppppppppo","opppppyypppo","oppppyyyyppo","oyyyyyyyyyyo","opyyyyyyyypo","oppyyyyyyppo","oppyyppyyppo","opppyppypppo",".oppppppppo.","..oppppppo..","....oooo...."];
  rows[1]="opppppppppo".replace(/^o|o$/g,"o")+"";rows[1]="o"+"p".repeat(10)+"o";
  var c=document.getElementById("sprite"),x=c.getContext("2d"),s=getComputedStyle(document.documentElement);
  var col={o:s.getPropertyValue("--line").trim()||"#1a1033",p:s.getPropertyValue("--pink").trim()||"#c4155f",y:s.getPropertyValue("--sun").trim()||"#ffb347"};
  rows.forEach(function(r,j){for(var i=0;i<12;i++){var k=r[i];if(col[k]){x.fillStyle=col[k];x.fillRect(i,j,1,1)}}});
})();
// mini jogo de moderação
(function(){
  var chat=document.getElementById("chat"),st=document.getElementById("status"),
      total=chat.querySelectorAll('[data-bad="1"]').length,got=0;
  chat.addEventListener("click",function(e){
    var m=e.target.closest(".msg");if(!m||m.classList.contains("done"))return;
    if(m.dataset.bad==="1"){
      m.classList.add("done");got++;
      st.textContent=m.dataset.why+" ("+got+" de "+total+")";
      if(got===total)st.textContent+=" Chat limpo! É assim que eu trabalho: rápida, justa e sem exagero.";
    }else{
      m.classList.remove("oops");void m.offsetWidth;m.classList.add("oops");
      st.textContent="Essa mensagem estava ok. Moderar também é saber o que deixar passar.";
    }
  });
})();