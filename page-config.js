document.addEventListener("DOMContentLoaded", function () {
  var c = window.__INVITE__.config;
  var title = "دعوة زفاف " + c.groom + " & " + c.bride;
  document.title = title;
  var canonical=document.querySelector('meta[property="og:url"]'); if(canonical)canonical.content=location.href;
  ["og:title"].forEach(function (key) { var m=document.querySelector('meta[property="'+key+'"]'); if(m)m.content=title; });
  var description = c.dateText + " • " + c.venueName;
  ["description","og:description"].forEach(function (key) { var m=document.querySelector('meta[name="'+key+'"],meta[property="'+key+'"]'); if(m)m.content=description; });
  var promo = document.querySelector("#da3wa-democta .dc-order");
  var wa = document.querySelector("#da3wa-democta .dc-wa");
  [promo,wa].forEach(function (a) { if(a){a.href=c.whatsappUrl;a.target="_blank";a.rel="noopener";} });
  var root = document.documentElement;
  root.style.setProperty("--curtain-image", "url(\"../../" + c.assets.curtainWebp + "\")");
  var preload=document.querySelector('link[fetchpriority="high"]'); if(preload)preload.href="../../"+c.assets.curtainWebp;
  var gallery=document.querySelectorAll("#da3wa-mem .mem-cell img"); c.assets.gallery.forEach(function(src,i){if(gallery[i])gallery[i].src="../../"+src;});
  var socialImage="../../"+c.assets.share; ["og:image"].forEach(function(key){var m=document.querySelector('meta[property="'+key+'"]');if(m)m.content=socialImage;});
  var twitterImage=document.querySelector('meta[name="twitter:image"]');if(twitterImage)twitterImage.content=socialImage;
  var cal = document.querySelector("#da3wa-cal .cal");
  if (cal) { var top=cal.querySelector(".cal-top"), wd=cal.querySelector(".cal-wd"), day=cal.querySelector(".cal-day"), time=cal.querySelector(".cal-time");
    var date=new Date(c.date); if(top)top.textContent=new Intl.DateTimeFormat("ar",{month:"long",year:"numeric"}).format(date);
    if(wd)wd.textContent=new Intl.DateTimeFormat("ar",{weekday:"long"}).format(date); if(day)day.textContent=new Intl.DateTimeFormat("ar",{day:"numeric"}).format(date); if(time)time.textContent=c.timeText;
    var gcal=cal.querySelector(".cal-btns a:first-child"); if(gcal){var end=new Date(date.getTime()+4*60*60*1000);var stamp=function(d){return d.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}Z$/,"")};gcal.href="https://calendar.google.com/calendar/render?action=TEMPLATE&text="+encodeURIComponent(title)+"&dates="+stamp(date)+"/"+stamp(end)+"&location="+encodeURIComponent(c.venueName+" — "+c.venueAddr)+"&details="+encodeURIComponent(description);}
    var ical=cal.querySelector(".cal-btns a:last-child"); if(ical){ical.href="#";ical.addEventListener("click",function(e){e.preventDefault();var dt=function(d){return d.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}Z$/,"Z")};var ics=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Wedding Invitation//AR","BEGIN:VEVENT","DTSTART:"+dt(date),"DTEND:"+dt(end),"SUMMARY:"+title,"LOCATION:"+c.venueName+" — "+c.venueAddr,"DESCRIPTION:"+description,"END:VEVENT","END:VCALENDAR"].join("\r\n");var blob=new Blob([ics],{type:"text/calendar;charset=utf-8"});var url=URL.createObjectURL(blob);var a=document.createElement("a");a.href=url;a.download="wedding-invitation.ics";a.click();URL.revokeObjectURL(url);});}
  }
});
