var vm = new Vue({
  el: "#app",
  data: {
    //Mode_mode#Del_.btn_mode.delete_mode
    deleteModeOnOff: false,
    events: [
      {
        //Tickets_Ticket_ticket_Cover_cover
        //Ticket & Editor's openning
        cover_infoOpenClose: true,
        editorOpenClose: false,
        
        //Tickets_Ticket_ticket_Cover
        //cover image
        image_url: "https://i.ytimg.com/vi/FZMXidFmtpw/maxresdefault.jpg",
        
        //Tickets_Ticket_ticket_info
        //titel 
        name_title: "MUTEK JP",
        name_subtitle: "EDITION4",
        //person
        content_ans_id: "_fun.dream00",
        //date
        content_ans_date_start: "2019-12-15",
        content_ans_date_to: " - ",
        content_ans_date_end: "2019-12-15",
        //time
        content_ans_time_start: "19:00",
        content_ans_time_to: " - ",
        content_ans_time_end: "23:00",
        //ticket type
        content_ans_type: "一般預售票 ( Regular Ticket )",
        //price
        content_ans_price: "800",
        //site
        content_ans_site: "LINE CUBE SHIBUYA",
        //location & map
        content_ans_adress: "東京都渋谷区宇田川町1−1",
        content_ans_map_url: "'https://goo.gl/maps/JnXDN6azu7jPaV9x6'",
        //Tickets_Ticket_ticket_usingstate
        //state
        state_off: "活動結束 Expired",
        state_on: "憑券入場 QR Code",
        state: true,
      },
      {
        //Tickets_Ticket_ticket_Cover_cover
        //Ticket & Editor's openning
        cover_infoOpenClose: false,
        editorOpenClose: false,
        
        //Tickets_Ticket_ticket_Cover
        //cover image
        image_url: "'https://miro.medium.com/max/5660/1*HoQhlB6qu_9nAx5vEhQaNw.png'",
        
        //Tickets_Ticket_ticket_info
        //titel 
        name_title: "2019 瀨戶內海藝術季",
        name_subtitle: "SETOUCHI 2019",
        //person
        content_ans_id: "Funnnndream_wwww",
        //date
        content_ans_date_start: "2019-03-20",
        content_ans_date_to: " - ",
        content_ans_date_end: "2019-10-20",
        //time
        content_ans_time_start: "10:00",
        content_ans_time_to: " - ",
        content_ans_time_end: "19:30",
        //ticket type
        content_ans_type: "三季票 ( 3 Season Ticket )",
        //price
        content_ans_price: "1300",
        //site
        content_ans_site: "瀨戶內海諸島 ( Seto Inland Sea )",
        //location & map
        content_ans_adress: "主航線船港 宇野港",
        content_ans_map_url: "https://goo.gl/maps/g8pGbQ18DksUuL3k8",
        //Tickets_Ticket_ticket_usingstate
        //state
        state_off: "活動結束 Expired",
        state_on: "憑券入場 QR Code",
        state: false,
      },
    ],
    editors: [
      {
        name: "封面圖片",
        longer: true,
        type: "url",
        holder: "圖片連結 ( Cover Image URL)",
        model: 'image_url',
      },
      {
        name: "活動名稱/主題",
        longer: false,
        type: "text",
        holder: "活動名稱 (Event/Activity Name)",
        model: 'name_title',
      },
      {
        name: "活動副標/簡註",
        longer: false,
        type: "text",
        holder: "副標題 (Subtile)",
        model: "name_subtitle",
      },
      {
        name: "持有者 ID",
        longer: false,
        type: "text",
        holder: "用戶帳號 ( ID Name )",
        model: "content_ans_id",
      },
      {
        name: "活動起始日期",
        longer: false,
        type: "date",
        holder: "",
        model: "content_ans_date_start",
      },
      {
        name: "活動結束日期",
        longer: false,
        type: "date",
        holder: "",
        model: "content_ans_date_end",
      },
      {
        name: "活動開始時間",
        longer: false,
        type: "time",
        holder: "",
        model: "content_ans_time_start",
      },
      {
        name: "活動結束時間",
        longer: false,
        type: "time",
        holder: "",
        model: "content_ans_time_end",
      },
      {
        name: "票券種類",
        longer: false,
        type: "text",
        holder: "票種 ( Ticket Type )",
        model: "content_ans_type",
      },
      {
        name: "票券售價",
        longer: false,
        type: "text",
        holder: "票價 ( Price )",
        model: "content_ans_price",
      },
      {
        name: "活動場地",
        longer: true,
        type: "text",
        holder: "場地 ( Location )",
        model: "content_ans_site",
      },
      {
        name: "活動位址",
        longer: true,
        type: "text",
        holder: "位置 ( Adress & Map )",
        model: "content_ans_adress",
      },
      {
        name: "地圖連結",
        longer: true,
        type: "url",
        holder: "地圖標的連結 ( Map URL )",
        model: "content_ans_map_url",
      },
      {
        name: "有效票券",
        longer: false,
        type: "checkbox",
        holder: "",
        model: "state",
      },
    ]
  },
  methods: {
    cover_click_OpenClose: function(TKid){
      this.events[TKid].editorOpenClose = false
    },
    
    AddTK: function(){
      this.events.push({
        //Tickets_Ticket_ticket_Cover_cover
        //Ticket & Editor's openning
        cover_infoOpenClose: true,
        editorOpenClose: false,
        
        //Tickets_Ticket_ticket_Cover
        //cover image
        image_url: " ",
        
        //Tickets_Ticket_ticket_info
        //titel 
        name_title: "活動名稱 (Event)",
        name_subtitle: "副標題 (Subtile)",
        //person
        content_ans_id: "",
        //date
        content_ans_date: "",
        //time
        content_ans_time_start: "",
        content_ans_time_to: " - ",
        content_ans_time_end: "",
        //ticket type
        content_ans_type: "",
        //price
        content_ans_price: "",
        //site
        content_ans_site: "",
        //location & map
        content_ans_adress: "",
        content_ans_map_url: "",
        //Tickets_Ticket_ticket_usingstate
        //state
        state_off: "活動結束 Expired",
        state_on: "憑券入場 QR Code",
        state: true,
      })
    },
    DeleteTK: function(TKid){
      this.events.splice(TKid,1)
    }
  },
})

