import React from 'react'
import portada from './assets/img/portada.jpg'
import comunidad from './assets/img/comunidad.jpg'

export const Chat = () =>(
  <div style={{marginLeft: 400, marginTop:-10}}>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        {/*---- Include the above in your HEAD tag --------*/}
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        {/*---- Include the above in your HEAD tag --------*/}
        <meta charSet="UTF-8" /><meta name="robots" content="noindex" /><link rel="shortcut icon" type="image/x-icon" href="//production-assets.codepen.io/assets/favicon/favicon-8ea04875e70c4b0bb41da869e81236e54394d63638a1ef12fa558a4a835f1164.ico" /><link rel="mask-icon" type href="//production-assets.codepen.io/assets/favicon/logo-pin-f2d2b6d2c61838f7e76325261b7195c27224080bc099486ddd6dccb469b8e8e6.svg" color="#111" /><link rel="canonical" href="https://codepen.io/emilcarlsson/pen/ZOQZaV?limit=all&page=74&q=contact+" />
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700,300" rel="stylesheet" type="text/css" />
        <link rel="stylesheet prefetch" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" /><link rel="stylesheet prefetch" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.2/css/font-awesome.min.css" />
        <style className="cp-pen-styles" dangerouslySetInnerHTML={{__html: "body {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background: #27ae60;\n  font-family: \"proxima-nova\", \"Source Sans Pro\", sans-serif;\n  font-size: 1em;\n  letter-spacing: 0.1px;\n  color: #32465a;\n  text-rendering: optimizeLegibility;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n  -webkit-font-smoothing: antialiased;\n}\n\n#frame {\n  width: 95%;\n  min-width: 360px;\n  max-width: 1000px;\n  height: 92vh;\n  min-height: 300px;\n  max-height: 720px;\n  background: #E6EAEA;\n}\n@media screen and (max-width: 360px) {\n  #frame {\n    width: 100%;\n    height: 100vh;\n  }\n}\n#frame #sidepanel {\n  float: left;\n  min-width: 280px;\n  max-width: 340px;\n  width: 40%;\n  height: 100%;\n  background: #2c3e50;\n  color: #f5f5f5;\n  overflow: hidden;\n  position: relative;\n}\n@media screen and (max-width: 735px) {\n  #frame #sidepanel {\n    width: 58px;\n    min-width: 58px;\n  }\n}\n#frame #sidepanel #profile {\n  width: 80%;\n  margin: 25px auto;\n}\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile {\n    width: 100%;\n    margin: 0 auto;\n    padding: 5px 0 0 0;\n    background: #32465a;\n  }\n}\n#frame #sidepanel #profile.expanded .wrap {\n  height: 210px;\n  line-height: initial;\n}\n#frame #sidepanel #profile.expanded .wrap p {\n  margin-top: 20px;\n}\n#frame #sidepanel #profile.expanded .wrap i.expand-button {\n  -moz-transform: scaleY(-1);\n  -o-transform: scaleY(-1);\n  -webkit-transform: scaleY(-1);\n  transform: scaleY(-1);\n  filter: FlipH;\n  -ms-filter: \"FlipH\";\n}\n#frame #sidepanel #profile .wrap {\n  height: 60px;\n  line-height: 60px;\n  overflow: hidden;\n  -moz-transition: 0.3s height ease;\n  -o-transition: 0.3s height ease;\n  -webkit-transition: 0.3s height ease;\n  transition: 0.3s height ease;\n}\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap {\n    height: 55px;\n  }\n}\n#frame #sidepanel #profile .wrap img {\n  width: 50px;\n  border-radius: 50%;\n  padding: 3px;\n  border: 2px solid #e74c3c;\n  height: auto;\n  float: left;\n  cursor: pointer;\n  -moz-transition: 0.3s border ease;\n  -o-transition: 0.3s border ease;\n  -webkit-transition: 0.3s border ease;\n  transition: 0.3s border ease;\n}\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap img {\n    width: 40px;\n    margin-left: 4px;\n  }\n}\n#frame #sidepanel #profile .wrap img.online {\n  border: 2px solid #2ecc71;\n}\n#frame #sidepanel #profile .wrap img.away {\n  border: 2px solid #f1c40f;\n}\n#frame #sidepanel #profile .wrap img.busy {\n  border: 2px solid #e74c3c;\n}\n#frame #sidepanel #profile .wrap img.offline {\n  border: 2px solid #95a5a6;\n}\n#frame #sidepanel #profile .wrap p {\n  float: left;\n  margin-left: 15px;\n}\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap p {\n    display: none;\n  }\n}\n#frame #sidepanel #profile .wrap i.expand-button {\n  float: right;\n  margin-top: 23px;\n  font-size: 0.8em;\n  cursor: pointer;\n  color: #435f7a;\n}\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap i.expand-button {\n    display: none;\n  }\n}\n#frame #sidepanel #profile .wrap #status-options {\n  position: absolute;\n  opacity: 0;\n  visibility: hidden;\n  width: 150px;\n  margin: 70px 0 0 0;\n  border-radius: 6px;\n  z-index: 99;\n  line-height: initial;\n  background: #435f7a;\n  -moz-transition: 0.3s all ease;\n  -o-transition: 0.3s all ease;\n  -webkit-transition: 0.3s all ease;\n  transition: 0.3s all ease;\n}\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options {\n    width: 58px;\n    margin-top: 57px;\n  }\n}\n#frame #sidepanel #profile .wrap #status-options.active {\n  opacity: 1;\n  visibility: visible;\n  margin: 75px 0 0 0;\n}\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options.active {\n    margin-top: 62px;\n  }\n}\n#frame #sidepanel #profile .wrap #status-options:before {\n  content: '';\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 8px solid #435f7a;\n  margin: -8px 0 0 24px;\n}\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options:before {\n    margin-left: 23px;\n  }\n}\n#frame #sidepanel #profile .wrap #status-options ul {\n  overflow: hidden;\n  border-radius: 6px;\n}\n#frame #sidepanel #profile .wrap #status-options ul li {\n  padding: 15px 0 30px 18px;\n  display: block;\n  cursor: pointer;\n}\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options ul li {\n    padding: 15px 0 35px 22px;\n  }\n}\n#frame #sidepanel #profile .wrap #status-options ul li:hover {\n  background: #496886;\n}\n#frame #sidepanel #profile .wrap #status-options ul li span.status-circle {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin: 5px 0 0 0;\n}\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options ul li span.status-circle {\n    width: 14px;\n    height: 14px;\n  }\n}\n#frame #sidepanel #profile .wrap #status-options ul li span.status-circle:before {\n  content: '';\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  margin: -3px 0 0 -3px;\n  background: transparent;\n  border-radius: 50%;\n  z-index: 0;\n}\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options ul li span.status-circle:before {\n    height: 18px;\n    width: 18px;\n  }\n}\n#frame #sidepanel #profile .wrap #status-options ul li p {\n  padding-left: 12px;\n}\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options ul li p {\n    display: none;\n  }\n}\n#frame #sidepanel #profile .wrap #status-options ul li#status-online span.status-circle {\n  background: #2ecc71;\n}\n#frame #sidepanel #profile .wrap #status-options ul li#status-online.active span.status-circle:before {\n  border: 1px solid #2ecc71;\n}\n#frame #sidepanel #profile .wrap #status-options ul li#status-away span.status-circle {\n  background: #f1c40f;\n}\n#frame #sidepanel #profile .wrap #status-options ul li#status-away.active span.status-circle:before {\n  border: 1px solid #f1c40f;\n}\n#frame #sidepanel #profile .wrap #status-options ul li#status-busy span.status-circle {\n  background: #e74c3c;\n}\n#frame #sidepanel #profile .wrap #status-options ul li#status-busy.active span.status-circle:before {\n  border: 1px solid #e74c3c;\n}\n#frame #sidepanel #profile .wrap #status-options ul li#status-offline span.status-circle {\n  background: #95a5a6;\n}\n#frame #sidepanel #profile .wrap #status-options ul li#status-offline.active span.status-circle:before {\n  border: 1px solid #95a5a6;\n}\n#frame #sidepanel #profile .wrap #expanded {\n  padding: 100px 0 0 0;\n  display: block;\n  line-height: initial !important;\n}\n#frame #sidepanel #profile .wrap #expanded label {\n  float: left;\n  clear: both;\n  margin: 0 8px 5px 0;\n  padding: 5px 0;\n}\n#frame #sidepanel #profile .wrap #expanded input {\n  border: none;\n  margin-bottom: 6px;\n  background: #32465a;\n  border-radius: 3px;\n  color: #f5f5f5;\n  padding: 7px;\n  width: calc(100% - 43px);\n}\n#frame #sidepanel #profile .wrap #expanded input:focus {\n  outline: none;\n  background: #435f7a;\n}\n#frame #sidepanel #search {\n  border-top: 1px solid #32465a;\n  border-bottom: 1px solid #32465a;\n  font-weight: 300;\n}\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #search {\n    display: none;\n  }\n}\n#frame #sidepanel #search label {\n  position: absolute;\n  margin: 10px 0 0 20px;\n}\n#frame #sidepanel #search input {\n  font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\n  padding: 10px 0 10px 46px;\n  width: calc(100% - 25px);\n  border: none;\n  background: #32465a;\n  color: #f5f5f5;\n}\n#frame #sidepanel #search input:focus {\n  outline: none;\n  background: #435f7a;\n}\n#frame #sidepanel #search input::-webkit-input-placeholder {\n  color: #f5f5f5;\n}\n#frame #sidepanel #search input::-moz-placeholder {\n  color: #f5f5f5;\n}\n#frame #sidepanel #search input:-ms-input-placeholder {\n  color: #f5f5f5;\n}\n#frame #sidepanel #search input:-moz-placeholder {\n  color: #f5f5f5;\n}\n#frame #sidepanel #contacts {\n  height: calc(100% - 177px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts {\n    height: calc(100% - 149px);\n    overflow-y: scroll;\n    overflow-x: hidden;\n  }\n  #frame #sidepanel #contacts::-webkit-scrollbar {\n    display: none;\n  }\n}\n#frame #sidepanel #contacts.expanded {\n  height: calc(100% - 334px);\n}\n#frame #sidepanel #contacts::-webkit-scrollbar {\n  width: 8px;\n  background: #2c3e50;\n}\n#frame #sidepanel #contacts::-webkit-scrollbar-thumb {\n  background-color: #243140;\n}\n#frame #sidepanel #contacts ul li.contact {\n  position: relative;\n  padding: 10px 0 15px 0;\n  font-size: 0.9em;\n  cursor: pointer;\n}\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts ul li.contact {\n    padding: 6px 0 46px 8px;\n  }\n}\n#frame #sidepanel #contacts ul li.contact:hover {\n  background: #32465a;\n}\n#frame #sidepanel #contacts ul li.contact.active {\n  background: #32465a;\n  border-right: 5px solid #435f7a;\n}\n#frame #sidepanel #contacts ul li.contact.active span.contact-status {\n  border: 2px solid #32465a !important;\n}\n#frame #sidepanel #contacts ul li.contact .wrap {\n  width: 88%;\n  margin: 0 auto;\n  position: relative;\n}\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts ul li.contact .wrap {\n    width: 100%;\n  }\n}\n#frame #sidepanel #contacts ul li.contact .wrap span {\n  position: absolute;\n  left: 0;\n  margin: -2px 0 0 -2px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: 2px solid #2c3e50;\n  background: #95a5a6;\n}\n#frame #sidepanel #contacts ul li.contact .wrap span.online {\n  background: #2ecc71;\n}\n#frame #sidepanel #contacts ul li.contact .wrap span.away {\n  background: #f1c40f;\n}\n#frame #sidepanel #contacts ul li.contact .wrap span.busy {\n  background: #e74c3c;\n}\n#frame #sidepanel #contacts ul li.contact .wrap img {\n  width: 40px;\n  border-radius: 50%;\n  float: left;\n  margin-right: 10px;\n}\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts ul li.contact .wrap img {\n    margin-right: 0px;\n  }\n}\n#frame #sidepanel #contacts ul li.contact .wrap .meta {\n  padding: 5px 0 0 0;\n}\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts ul li.contact .wrap .meta {\n    display: none;\n  }\n}\n#frame #sidepanel #contacts ul li.contact .wrap .meta .name {\n  font-weight: 600;\n}\n#frame #sidepanel #contacts ul li.contact .wrap .meta .preview {\n  margin: 5px 0 0 0;\n  padding: 0 0 1px;\n  font-weight: 400;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -moz-transition: 1s all ease;\n  -o-transition: 1s all ease;\n  -webkit-transition: 1s all ease;\n  transition: 1s all ease;\n}\n#frame #sidepanel #contacts ul li.contact .wrap .meta .preview span {\n  position: initial;\n  border-radius: initial;\n  background: none;\n  border: none;\n  padding: 0 2px 0 0;\n  margin: 0 0 0 1px;\n  opacity: .5;\n}\n#frame #sidepanel #bottom-bar {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n}\n#frame #sidepanel #bottom-bar button {\n  float: left;\n  border: none;\n  width: 50%;\n  padding: 10px 0;\n  background: #32465a;\n  color: #f5f5f5;\n  cursor: pointer;\n  font-size: 0.85em;\n  font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\n}\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #bottom-bar button {\n    float: none;\n    width: 100%;\n    padding: 15px 0;\n  }\n}\n#frame #sidepanel #bottom-bar button:focus {\n  outline: none;\n}\n#frame #sidepanel #bottom-bar button:nth-child(1) {\n  border-right: 1px solid #2c3e50;\n}\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #bottom-bar button:nth-child(1) {\n    border-right: none;\n    border-bottom: 1px solid #2c3e50;\n  }\n}\n#frame #sidepanel #bottom-bar button:hover {\n  background: #435f7a;\n}\n#frame #sidepanel #bottom-bar button i {\n  margin-right: 3px;\n  font-size: 1em;\n}\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #bottom-bar button i {\n    font-size: 1.3em;\n  }\n}\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #bottom-bar button span {\n    display: none;\n  }\n}\n#frame .content {\n  float: right;\n  width: 60%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n}\n@media screen and (max-width: 735px) {\n  #frame .content {\n    width: calc(100% - 58px);\n    min-width: 300px !important;\n  }\n}\n@media screen and (min-width: 900px) {\n  #frame .content {\n    width: calc(100% - 340px);\n  }\n}\n#frame .content .contact-profile {\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  background: #f5f5f5;\n}\n#frame .content .contact-profile img {\n  width: 40px;\n  border-radius: 50%;\n  float: left;\n  margin: 9px 12px 0 9px;\n}\n#frame .content .contact-profile p {\n  float: left;\n}\n#frame .content .contact-profile .social-media {\n  float: right;\n}\n#frame .content .contact-profile .social-media i {\n  margin-left: 14px;\n  cursor: pointer;\n}\n#frame .content .contact-profile .social-media i:nth-last-child(1) {\n  margin-right: 20px;\n}\n#frame .content .contact-profile .social-media i:hover {\n  color: #435f7a;\n}\n#frame .content .messages {\n  height: auto;\n  min-height: calc(100% - 93px);\n  max-height: calc(100% - 93px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n@media screen and (max-width: 735px) {\n  #frame .content .messages {\n    max-height: calc(100% - 105px);\n  }\n}\n#frame .content .messages::-webkit-scrollbar {\n  width: 8px;\n  background: transparent;\n}\n#frame .content .messages::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n#frame .content .messages ul li {\n  display: inline-block;\n  clear: both;\n  float: left;\n  margin: 15px 15px 5px 15px;\n  width: calc(100% - 25px);\n  font-size: 0.9em;\n}\n#frame .content .messages ul li:nth-last-child(1) {\n  margin-bottom: 20px;\n}\n#frame .content .messages ul li.sent img {\n  margin: 6px 8px 0 0;\n}\n#frame .content .messages ul li.sent p {\n  background: #435f7a;\n  color: #f5f5f5;\n}\n#frame .content .messages ul li.replies img {\n  float: right;\n  margin: 6px 0 0 8px;\n}\n#frame .content .messages ul li.replies p {\n  background: #f5f5f5;\n  float: right;\n}\n#frame .content .messages ul li img {\n  width: 22px;\n  border-radius: 50%;\n  float: left;\n}\n#frame .content .messages ul li p {\n  display: inline-block;\n  padding: 10px 15px;\n  border-radius: 20px;\n  max-width: 205px;\n  line-height: 130%;\n}\n@media screen and (min-width: 735px) {\n  #frame .content .messages ul li p {\n    max-width: 300px;\n  }\n}\n#frame .content .message-input {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  z-index: 99;\n}\n#frame .content .message-input .wrap {\n  position: relative;\n}\n#frame .content .message-input .wrap input {\n  font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\n  float: left;\n  border: none;\n  width: calc(100% - 90px);\n  padding: 11px 32px 10px 8px;\n  font-size: 0.8em;\n  color: #32465a;\n}\n@media screen and (max-width: 735px) {\n  #frame .content .message-input .wrap input {\n    padding: 15px 32px 16px 8px;\n  }\n}\n#frame .content .message-input .wrap input:focus {\n  outline: none;\n}\n#frame .content .message-input .wrap .attachment {\n  position: absolute;\n  right: 60px;\n  z-index: 4;\n  margin-top: 10px;\n  font-size: 1.1em;\n  color: #435f7a;\n  opacity: .5;\n  cursor: pointer;\n}\n@media screen and (max-width: 735px) {\n  #frame .content .message-input .wrap .attachment {\n    margin-top: 17px;\n    right: 65px;\n  }\n}\n#frame .content .message-input .wrap .attachment:hover {\n  opacity: 1;\n}\n#frame .content .message-input .wrap button {\n  float: right;\n  border: none;\n  width: 50px;\n  padding: 12px 0;\n  cursor: pointer;\n  background: #32465a;\n  color: #f5f5f5;\n}\n@media screen and (max-width: 735px) {\n  #frame .content .message-input .wrap button {\n    padding: 16px 0;\n  }\n}\n#frame .content .message-input .wrap button:hover {\n  background: #435f7a;\n}\n#frame .content .message-input .wrap button:focus {\n  outline: none;\n}\n" }} />
        {/*

A concept for a chat interface.

Try writing a new message! :)


Follow me here:
Twitter: https://twitter.com/thatguyemil
Codepen: https://codepen.io/emilcarlsson/
Website: http://emilcarlsson.se/

*/}
        <div id="frame">
          <div id="sidepanel">
            <div id="profile">
              <div className="wrap">
                <img id="profile-img" src="http://emilcarlsson.se/assets/mikeross.png" className="online" alt="" />
                <p>Mike Ross</p>
                <i className="fa fa-chevron-down expand-button" aria-hidden="true" />
                <div id="status-options">
                  <ul>
                    <li id="status-online" className="active"><span className="status-circle" /> <p>Online</p></li>
                    <li id="status-away"><span className="status-circle" /> <p>Away</p></li>
                    <li id="status-busy"><span className="status-circle" /> <p>Busy</p></li>
                    <li id="status-offline"><span className="status-circle" /> <p>Offline</p></li>
                  </ul>
                </div>
                <div id="expanded">
                  <label htmlFor="twitter"><i className="fa fa-facebook fa-fw" aria-hidden="true" /></label>
                  <input name="twitter" type="text" defaultValue="mikeross" />
                  <label htmlFor="twitter"><i className="fa fa-twitter fa-fw" aria-hidden="true" /></label>
                  <input name="twitter" type="text" defaultValue="ross81" />
                  <label htmlFor="twitter"><i className="fa fa-instagram fa-fw" aria-hidden="true" /></label>
                  <input name="twitter" type="text" defaultValue="mike.ross" />
                </div>
              </div>
            </div>
            <div id="search">
              <label htmlFor><i className="fa fa-search" aria-hidden="true" /></label>
              <input type="text" placeholder="Search contacts..." />
            </div>
            <div id="contacts">
              <ul>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status online" />
                    <img src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
                    <div className="meta">
                      <p className="name">Louis Litt</p>
                      <p className="preview">You just got LITT up, Mike.</p>
                    </div>
                  </div>
                </li>
                <li className="contact active">
                  <div className="wrap">
                    <span className="contact-status busy" />
                    <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                    <div className="meta">
                      <p className="name">Harvey Specter</p>
                      <p className="preview">Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
                    </div>
                  </div>
                </li>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status away" />
                    <img src="http://emilcarlsson.se/assets/rachelzane.png" alt="" />
                    <div className="meta">
                      <p className="name">Rachel Zane</p>
                      <p className="preview">I was thinking that we could have chicken tonight, sounds good?</p>
                    </div>
                  </div>
                </li>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status online" />
                    <img src="http://emilcarlsson.se/assets/donnapaulsen.png" alt="" />
                    <div className="meta">
                      <p className="name">Donna Paulsen</p>
                      <p className="preview">Mike, I know everything! I'm Donna..</p>
                    </div>
                  </div>
                </li>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status busy" />
                    <img src="http://emilcarlsson.se/assets/jessicapearson.png" alt="" />
                    <div className="meta">
                      <p className="name">Jessica Pearson</p>
                      <p className="preview">Have you finished the draft on the Hinsenburg deal?</p>
                    </div>
                  </div>
                </li>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status" />
                    <img src="http://emilcarlsson.se/assets/haroldgunderson.png" alt="" />
                    <div className="meta">
                      <p className="name">Harold Gunderson</p>
                      <p className="preview">Thanks Mike! :)</p>
                    </div>
                  </div>
                </li>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status" />
                    <img src="http://emilcarlsson.se/assets/danielhardman.png" alt="" />
                    <div className="meta">
                      <p className="name">Daniel Hardman</p>
                      <p className="preview">We'll meet again, Mike. Tell Jessica I said 'Hi'.</p>
                    </div>
                  </div>
                </li>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status busy" />
                    <img src="http://emilcarlsson.se/assets/katrinabennett.png" alt="" />
                    <div className="meta">
                      <p className="name">Katrina Bennett</p>
                      <p className="preview">I've sent you the files for the Garrett trial.</p>
                    </div>
                  </div>
                </li>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status" />
                    <img src="http://emilcarlsson.se/assets/charlesforstman.png" alt="" />
                    <div className="meta">
                      <p className="name">Charles Forstman</p>
                      <p className="preview">Mike, this isn't over.</p>
                    </div>
                  </div>
                </li>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status" />
                    <img src="http://emilcarlsson.se/assets/jonathansidwell.png" alt="" />
                    <div className="meta">
                      <p className="name">Jonathan Sidwell</p>
                      <p className="preview"><span>You:</span> That's bullshit. This deal is solid.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div id="bottom-bar">
              <button id="addcontact"><i className="fa fa-user-plus fa-fw" aria-hidden="true" /> <span>Add contact</span></button>
              <button id="settings"><i className="fa fa-cog fa-fw" aria-hidden="true" /> <span>Settings</span></button>
            </div>
          </div>
          <div className="content">
            <div className="contact-profile">
              <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
              <p>Harvey Specter</p>
              <div className="social-media">
                <i className="fa fa-facebook" aria-hidden="true" />
                <i className="fa fa-twitter" aria-hidden="true" />
                <i className="fa fa-instagram" aria-hidden="true" />
              </div>
            </div>
            <div className="messages">
              <ul>
                <li className="sent">
                  <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                  <p>How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!</p>
                </li>
                <li className="replies">
                  <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                  <p>When you're backed against the wall, break the god damn thing down.</p>
                </li>
                <li className="replies">
                  <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                  <p>Excuses don't win championships.</p>
                </li>
                <li className="sent">
                  <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                  <p>Oh yeah, did Michael Jordan tell you that?</p>
                </li>
                <li className="replies">
                  <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                  <p>No, I told him that.</p>
                </li>
                <li className="replies">
                  <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                  <p>What are your choices when someone puts a gun to your head?</p>
                </li>
                <li className="sent">
                  <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                  <p>What are you talking about? You do what they say or they shoot you.</p>
                </li>
                <li className="replies">
                  <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                  <p>Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
                </li>
              </ul>
            </div>
            <div className="message-input">
              <div className="wrap">
                <input type="text" placeholder="Write your message..." />
                <i className="fa fa-paperclip attachment" aria-hidden="true" />
                <button className="submit"><i className="fa fa-paper-plane" aria-hidden="true" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
)
