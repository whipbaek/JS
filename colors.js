var Links =  // 객체화
    {
      LinksSetColor:function(color)
      {
        var arr = document.querySelectorAll('a');
        for(var i=0;i<arr.length;i++)
          { arr[i].style.color = color; }
      }

    }
    var Body =  //객체화2
    {
      FontColor:function(color)
     { document.querySelector('body').style.color = color; } ,
      
      BackGroundSetColor:function(color)
      { document.querySelector('body').style.backgroundColor = color; }
    }

    function ModeHanlder(self)
    {
          if(self.value === 'DarkMode') // document.querySelector 를 대신해서 this를 쓴다.
          {
            Body.BackGroundSetColor('#121212');
            Body.FontColor('white');
            Links.LinksSetColor('powderblue');
            self.value = 'DayMode';
          }
          else
          {
            Body.BackGroundSetColor('white');
            Body.FontColor('black');
            Links.LinksSetColor('blue');
            self.value = 'DarkMode'
          }
     }