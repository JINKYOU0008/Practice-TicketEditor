var vm = new Vue({
  el: "#app",
  data: {
    imgurl: "https://i.ytimg.com/vi/FZMXidFmtpw/maxresdefault.jpg",
    eventtital: "MUTEK JP",
    subtital: "EDITION4",
    person: "_fun.dream00",
    date: "2019-12-15",
    type: " Day Ticket",
    time_start: "19:00",
    time_to: " - ",
    time_end: "23:00",
    day: 1,
    dayprice: 2500,
    site: "LINE CUBE SHIBUYA",
    adress: "東京都渋谷区宇田川町1−1",
    mapurl: "https://goo.gl/maps/JnXDN6azu7jPaV9x6",
    color_st: "#4677b3",
    status: true,
    open: false,
  },
  methods: {
    statuscolor: function(){
      $(".status").css("background-color",this.color_st)
    },
  }
})

$(".bgcolor").click(function(){
  if(vm.open==true){
    $(".info").css("height",0)
    
    $(".out_tital").show()
    $(".out_tital").css("color","#bbb")
    
    $("#down").show()
    
  }else{
    $(".info").css("height",425)
    
    $(".out_tital").css("color","transparent")
    $(".out_tital").hide()
    
    $("#down").hide()
  }
})