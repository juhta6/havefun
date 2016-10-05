var page = new tabris.Page({
  topLevel: true
});

var toolbar = tabris.ui.set("toolbarVisible", false);
var num = 0;

var text = new tabris.Button({
  layoutData:{centerX: 0, centerY: 0},
  text: "press this"
}).on("select", function(select, widget){
  console.error("Have fun")
  timer(widget)
}).appendTo(page)

page.open();
      
function timer(widget){
 text.set("text", (++num));
  text.set("text", (++num));
 text.set("text", (++num));
  text.set("text", (++num));
  setInterval(timer1, 0, widget)
}
function timer1(widget){
 text.set("text", (++num));
  text.set("text", (++num));
 text.set("text", (++num));
  text.set("text", (++num));
  setInterval(timer, 0, widget)
}