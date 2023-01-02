(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),i=t.n(r),s=(t(13),t(1)),o=t(2),c=t(4),m=t(3),u=t(5),d=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://drive.google.com/file/d/1nJ7wCczKd8krTCfPJmp1noGKg-vC9Ono/view?usp=sharing",target:"_blank"},"Download Resume")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),l.a.createElement("h3",{style:{color:"white"}},"I am a ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),h=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{src:"images/profilepic.jpeg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.fullName),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.website)))))))}}]),a}(n.Component),p=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"}," ",e.MonthOfStarting," ",e.YearOfStarting," - ",e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"}," ",e.MonthOfStarting," ",e.YearOfStarting,"  - ",e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),f=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("h2",null,"COMMING SOON"),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:"#modal-01"},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))})))))}}]),a}(n.Component),E=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,e.description),l.a.createElement("cite",null,e.name)))})))," ")," ")," "),"  ")}}]),a}(n.Component),v=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions via LinkedIn   ",l.a.createElement("a",{href:e.socialLinks[0].url,target:"_blank"},l.a.createElement("i",{className:e.socialLinks[0].className}))))))}}]),a}(n.Component),g=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))})),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2014 CeeVee"),l.a.createElement("li",null,"Design by ",l.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),b={imagebaseurl:"https://techonoeticsclub.github.io/",name:"Rahil Patel",fullName:"Rahil Vasudev Patel (RVP)",role:"Backend Developer",linkedinId:" patel-rahil",roleDescription:" I like dabbling in various parts of backend development and site reliability, learning about new technologies is something I do in my free time and on travels, I also work on fullstack projects hence I keep up-to-date on the latest developments in the world of UI/UX as well.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/patel-rahil/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/bravoboy03",className:"fa fa-github"}],aboutme:"I have finished my B.Tech. in ICT with minors in Computational Science and have been worked in industry for 1.5 years. Currently pursuing Masters in Computer Science from ASU",address:"USA",website:"https://bravoboy03.github.io/rvp-resume",education:[{UniversityName:"Arizona State University",specialization:"Masters in Computer Science",MonthOfStarting:"August",YearOfStarting:"2022",MonthOfPassing:"May",YearOfPassing:"2024",Achievements:""},{UniversityName:"Dhirubhai Ambani Institiute of ICT (DA-IICT)",specialization:"B. Tech in Information and Communication Technology with Minors in Computational Sciences",MonthOfStarting:"July",YearOfStarting:"2017",MonthOfPassing:"June",YearOfPassing:"2021",Achievements:"Secured 3rd position in the IEEE IAS CMD Humanitarian contest with our project The Eye. Chairperson for IEEE Student Branch "}],work:[{CompanyName:"Zomato Ltd.",specialization:"SDE 1 (Fulltime)",MonthOfStarting:"July",YearOfStarting:"2021",MonthOfLeaving:"July",YearOfLeaving:"2022",Achievements:"Created new features for Fitso's product from scratch using micro-service architecture. As a result, I gained in-depth knowledge of GoLang, PHP, and react. In addition, I was in charge of developing the internal dashboards for the Business teams. In addi]on to working with the rider experience team, I worked closely with PMs and tech leads from other companies to scale Zomato's logis]cs technology for our B2B partners. As a result of this experience, I gained an understanding of Ruby on Rails, mongoDb, and other technologies we use in our legacy codes. Active involvement in bug tracking and monitoring using tools such as NewRelic, Kibana, PagerDuty, DataDog, HoneyBadger, etc. Extensive experience developing gRPC APIs."},{CompanyName:"Zomato Pvt. Ltd.",specialization:"SDE Intern",MonthOfStarting:"Jan",YearOfStarting:"2021",MonthOfLeaving:"June",YearOfLeaving:"2021",Achievements:"Developed a tool for Competitive Analysis, allowing us to monitor real-]me pricing and offers on our products and make pricing decisions. For this, I developed the backend using Node and Amazon Web Services for processing requests. My work involved processing raw data, analyzing it from mul]ple perspec]ves, and designing an algorithm to turn it into understandable graphs and charts. "},{CompanyName:"Amazon Development Center India",specialization:"SDE Intern",MonthOfStarting:"May",YearOfStarting:"2020",MonthOfLeaving:"June",YearOfLeaving:"2020",Achievements:"Collaborated and coordinated with the team on two important projects. Worked on user design interface and development of dashboard for KPI analytics, JavaScript and React were used. Designed and developed the backend for the system that can process large data sets and analyze in real]me. Used AWS SAM, Lambda, API Gateway, RDS and RedshiO to achieve the task. Worked on developing Rest APIs as well."}],skillsDescription:"I code the backend mainly in JavaScript or Golang. However I have also worked with various other languages shown below to create seamless backend flows and create an enriching user experience.",skills:[{skillname:"GoLang"},{skillname:"JavaScript"},{skillname:"Python"},{skillname:"Java"},{skillname:"RubyOnRails"},{skillname:"CPP"}]},w=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,{resumeData:b}),l.a.createElement(h,{resumeData:b}),l.a.createElement(p,{resumeData:b}),l.a.createElement(f,{resumeData:b}),l.a.createElement(E,{resumeData:b}),l.a.createElement(v,{resumeData:b}),l.a.createElement(g,{resumeData:b}))}}]),a}(n.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(l.a.createElement(w,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/rvpResume",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/rvpResume","/service-worker.js");N?(function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):k(e)})}}()},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.75bf3e5f.chunk.js.map