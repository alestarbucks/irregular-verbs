import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'engverbs';

  public version:string = "1.0.1";

  private verbs:Array<[string, string, string, string]> = [
    ["arise", "arose", "arisen", "levantarse; surgir"],
    ["awake", "awoke", "awoken", "despertarse"],
    ["be", "was/were", "been", "ser, estar"],
    ["bear", "bore", "born", "soportar; llevar"],
    ["beat", "beat", "beaten", "golpear; vencer"],
    ["become", "became", "become", "llegar a ser;convertirse"],
    ["begin", "began", "begun", "empezar"],
    ["bend", "bent", "bent", "doblar, flexionar"],
    ["bet", "bet", "bet", "apostar"],
    ["bind", "bound", "bound", "vendar; encuadernar"],
    ["bite", "bit", "bitten", "morder"],
    ["bleed", "bled", "bled", "sangrar"],
    ["blow", "blew", "blown", "soplar"],
    ["break", "broke", "broken", "romper"],
    ["bring", "brought", "brought", "traer; llevar"],
    ["broadcast", "broadcast", "broadcast", "emitir"],
    ["build", "built", "built", "construir"],
    ["buy", "bought", "bought", "comprar"],
    ["cast", "cast", "cast", "echar, arrojar"],
    ["catch", "caught", "caught", "coger, atrapar"],
    ["choose", "chose", "chosen", "elegir"],
    ["cling", "clung", "clung", "aferrarse, agarrarse"],
    ["come", "came", "come", "venir"],
    ["cost", "cost", "cost", "costar"],
    ["creep", "crept", "crept", "deslizarse; trepar"],
    ["cut", "cut", "cut", "cortar"],
    ["deal", "dealt", "dealt", "tratar"],
    ["dig", "dug", "dug", "cavar, excavar"],
    ["do", "did", "done", "hacer"],
    ["draw", "drew", "drawn", "dibujar"],
    ["dream", "dreamt/dreamed", "dreamt/dreamed", "soñar"],
    ["drink", "drank", "drunk", "beber"],
    ["drive", "drove", "driven", "conducir"],
    ["dwell", "dwelt/dwelled", "dwelt/dwelled", "morar"],
    ["eat", "ate", "eaten", "comer"],
    ["fall", "fell", "fallen", "caer"],
    ["feed", "fed", "fed", "alimentar"],
    ["feel", "felt", "felt", "sentir"],
    ["fight", "fought", "fought", "luchar"],
    ["find", "found", "found", "encontrar"],
    ["fit", "fit/fitted", "fit/fitted", "encajar, ajustar"],
    ["flee", "fled", "fled", "huir"],
    ["fling", "flung", "flung", "arrojar"],
    ["fly", "flew", "flown", "volar"],
    ["forbid", "forbade", "forbidden", "prohibir"],
    ["forecast", "forecast", "forecast", "prever, predecir"],
    ["forget", "forgot", "forgotten", "olvidar"],
    ["freeze", "froze", "frozen", "congelar(se)"],
    ["get", "got", "got", "obtener"],
    ["give", "gave", "given", "dar"],
    ["go", "went", "gone", "ir"],
    ["grow", "grew", "grown", "crecer; cultivar"],
    ["hang", "hung/hanged", "hung/hanged", "colgar"],
    ["have", "had", "had", "tener"],
    ["hear", "heard", "heard", "oir"],
    ["hide", "hid", "hidden", "ocultar(se)"],
    ["hit", "hit", "hit", "golpear"],
    ["hold", "held", "held", "sostener, coger"],
    ["hurt", "hurt", "hurt", "herir"],
    ["keep", "kept", "kept", "guardar; quedarse"],
    ["kneel", "knelt/kneeld", "knelt/kneeled", "arrodillarse"],
    ["knit", "knit/knitted", "knit/knitted", "tejer, hacer punto"],
    ["know", "knew", "known", "saber, conocer"],
    ["lay", "laid", "laid", "colocar, poner"],
    ["lead", "led", "led", "guiar, llevar"],
    ["lean", "leant/leaned", "leant/leaned", "apoyar(se)"],
    ["leap", "leapt/leaped", "leapt/leaped", "saltar"],
    ["learn", "learnt/learned", "learnt/learned", "aprender"],
    ["leave", "left", "left", "dejar; salir"],
    ["lend", "lent", "lent", "prestar"],
    ["let", "let", "let", "dejar, permitir"],
    ["lie", "lay", "lain", "estar tumbado"],
    ["light", "lit", "lit", "encender"],
    ["lose", "lost", "lost", "perder"],
    ["make", "made", "made", "hacer, fabricar"],
    ["mean", "meant", "meant", "significar"],
    ["meet", "met", "met", "encontrarse; conocer"],
    ["mow", "mowed", "mown/mowed", "cortar, segar"],
    ["pay", "paid", "paid", "pagar"],
    ["prove", "proved", "proven/proved", "probar, demostrar"],
    ["put", "put", "put", "poner"],
    ["quit", "quit", "quit", "dejar"],
    ["read", "read", "read", "leer"],
    ["ride", "rode", "ridden", "montar, cabalgar"],
    ["ring", "rang", "rung", "sonar/tocar timbre/teléfono"],
    ["rise", "rose", "risen", "levantarse"],
    ["run", "ran", "run", "correr"],
    ["saw", "sawed", "sawn/sawed", "serrar"],
    ["say", "said", "said", "decir"],
    ["see", "saw", "seen", "ver"],
    ["seek", "sought", "sought", "buscar"],
    ["sell", "sold", "sold", "vender"],
    ["send", "sent", "sent", "enviar"],
    ["set", "set", "set", "poner"],
    ["sew", "sewd", "sewn/sewed", "coser"],
    ["shake", "shook", "shaken", "agitar"],
    ["shear", "sheared", "shorn/sheared", "esquilar"],
    ["shed", "shed", "shed", "verter, derramar"],
    ["shine", "shone", "shone", "brillar"],
    ["shoot", "shot", "shot", "disparar; filmar"],
    ["show", "showed", "shown", "mostrar"],
    ["shrink", "shrank", "shrunk", "encoger(se)"],
    ["shut", "shut", "shut", "cerrar"],
    ["sing", "sang", "sung", "cantar"],
    ["sink", "sank", "sunk", "hundir(se)"],
    ["sit", "sat", "sat", "sentarse"],
    ["sleep", "slept", "slept", "dormir"],
    ["slide", "slid", "slid", "resbalarse"],
    ["sling", "slung", "slung", "tirar, arrojar"],
    ["smell", "smelt/smelled", "smelt/smelled", "oler"],
    ["sow", "sowed", "sown/sowed", "sembrar"],
    ["speak", "spoke", "spoken", "hablar"],
    ["speed", "sped/speeded", "sped/speeded", "conducir a mucha velocidad"],
    ["spell", "spelt/spelled", "spelt/spelled", "deletrear"],
    ["spend", "spent", "spent", "gastar; pasar tiempo"],
    ["spin", "spun/span", "spun", "girar"],
    ["spit", "spit/spat", "spit/spat", "escupir"],
    ["spill", "spilt/spilled", "spilt/spilled", "derramar"],
    ["split", "split", "split", "dividir"],
    ["spoil", "spoilt", "spoilt", "estropear"],
    ["spread", "spread", "spread", "extender; untar"],
    ["spring", "sprang", "sprung", "brotar, nacer"],
    ["stand", "stood", "stood", "estar de pie"],
    ["steal", "stole", "stolen", "robar"],
    ["stick", "stuck", "stuck", "pegar; encajarse"],
    ["stink", "stank", "stunk", "apestar"],
    ["strike", "struck", "struck", "golpear"],
    ["sting", "stung", "stung", "picar (insecto)"],
    ["strive", "strove", "striven", "esforzarse, luchar"],
    ["swear", "swore", "sworn", "jurar"],
    ["sweep", "swept", "swept", "barrer"],
    ["swell", "swelled", "swollen/swelled", "hinchar(se)"],
    ["swim", "swam", "swum", "nadar"],
    ["swing", "swung", "swung", "balancear"],
    ["take", "took", "taken", "coger"],
    ["teach", "taught", "taught", "enseñar"],
    ["tear", "tore", "torn", "rasgar"],
    ["tell", "told", "told", "decir"],
    ["think", "thought", "thought", "pensar"],
    ["throw", "threw", "thrown", "lanzar"],
    ["thrust", "thrust", "thrust", "empujar"],
    ["tread", "trod", "trodden", "pisar"],
    ["understand", "understood", "understood", "comprender"],
    ["wake", "woke", "woken", "despertar(se)"],
    ["wear", "wore", "worn", "llevar puesto"],
    ["weave", "wove", "woven/weaved", "tejer"],
    ["weep", "wept", "wept", "llorar"],
    ["wet", "wet/wetted", "wet/wetted", "mojar"],
    ["win", "won", "won", "ganar"],
    ["wind", "wound", "wound", "enrollar; dar cuerda"],
    ["wring", "wrung", "wrung", "torcer, retorcer"],
    ["write", "wrote", "written", "escribir"],
  ];

  public score:number = 0;

  public nverbs:number = 10;

  public selected:Array<[string, string, string, string]> = [];
  public shown:Array<number> = [];
  public try:Array<[string, string, string, string]> = [];

  /*
  Checklist:

  - Cambiar 'var' y esas cosas por 'let'

  */

  /* -----FUNCTIONS----- */
  
  public generate() {
    document.getElementById("score").style.display = "none";
    document.getElementsByTagName("input")[0].setAttribute("style", "background-color: transparent");
    let table = document.getElementById("generated");
    table.style.display = "none";

    this.selected = [];
    this.shown = [];
    this.try = [];

    let home = document.getElementById("home");
    let check = document.getElementById("check");
    check.style.display = "inline";
    home.style.display = "none"; // hide generate button and such

    let random:number = 0;
    var already:Array<number> = [] // array of indexes of already picked verbs

    for (var i = 0; i < this.nverbs; i++) {
      this.try.push(["", "", "", ""]);

      // Math.floor(Math.random() * (max - min)) + min;
      random = Math.floor(Math.random() * this.verbs.length); // [0-(length-1)]

      while (already.includes(random)) { // keep generating random indexes until one is not in already
        random = Math.floor(Math.random() * this.verbs.length);
      }

      let shown_form:number = Math.floor(Math.random() * 4); // gen shown form index [0-3]
      this.shown.push(shown_form);
      this.try[i][shown_form] = this.verbs[random][shown_form];
      
      already.push(random); // avoid to repeat verb by storing index
      this.selected.push(this.verbs[random]); // add to selected verbs list
    }

    table.style.display = "flex";
  }

  public check() {
    this.score = 0;
    console.log(this.try);

    for (let i = 0; i < this.nverbs; ++i) {
      for (let j = 0; j < 4; ++j) {
        if (j != this.shown[i]) {
          let id:string = "in" + i.toString() + j.toString();
          if (this.try[i][j] == this.selected[i][j]) {
            ++this.score;
            document.getElementById(id).style.backgroundColor = "#99ff99"; //light green
          } else {
            document.getElementById(id).style.backgroundColor = "#ffcccc"; // light red
            if (this.try[i][j] != "") {
              this.try[i][j] += (" --> " + this.selected[i][j]);
            } else {
              this.try[i][j] = this.selected[i][j];
            }
            
          }
        }
      }
    }

    document.getElementById("score").style.display = "block";
    document.getElementById("check").style.display = "none";

  }

}
