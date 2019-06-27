
jQuery(function(){
  $foobar({
    "height" : {
      "bar" : 30,
      "button" : 30
    },
    
    "width": {
      "left": "*",
      "center": "50%",
      "right": "*",
      "button": "80px"
    },

    "position": {
      "ignoreOffsetMargin": false,
      "bar": "top",
      "button": "right",
      "social": "right"
    },    
    
    "display" : {
      "type" : "expanded",
      "delay" : 0,
      "speed": 100,
      "backgroundColor" : "#ffffff",
      "border" : "solid 2px #ff0000",
      "theme": {
        "bar": "triangle-arrow"
      },
      "easing" : "swing",
      "shadow" : false,
      "adjustPageHeight" : true,
      "rtl" : false
    },
    "message": {
      "delay": 5000,
      "fadeDelay": 500,
      "random": false,
      "navigation": false,
      "scroll": {
        "enabled": true,
        "speed": 30,
        "delay": 2000,
        "direction": "left"
      },
      "font": {
        "family": "Courier New",
        "size": "9pt",
        "color": "#000000",
        "shadow" : "none"
      },
      "aFont": {
        "family": "Courier New",
        "size": "9pt",
        "color": "#000000",
        "decoration": "underline",
        "shadow" : "none",
        "hover": {
          "color": "#000000",
          "decoration": "underline",
          "shadow" : "none"
        }
      }
    },
    "social" : {
      "text" : "Find me:",
      "font": {
        "family": "Courier New",
        "size": "9pt",
        "color": "#000000",
        "shadow" : "none"
      },
      "profiles": [
        {"name" : "Twitter","url" : "http://twitter.com/petermahoney","image" : "http://petermahoney.net/wp-content/plugins/foobar/images/social/twitter.png","target" : "_blank"},
        {"name" : "Linkedin","url" : "http://www.linkedin.com/in/peterwm","image" : "http://petermahoney.net/wp-content/plugins/foobar/images/social/linkedin.png","target" : "_blank"},
        {"name" : "Facebook","url" : "http://www.facebook.com/pages/Peter-Mahoney/292120674231560","image" : "http://petermahoney.net/wp-content/plugins/foobar/images/social/facebook.png","target" : "_blank"},
        {"name" : "People Per Hour","url" : " 	 http://www.peopleperhour.com/people/peter/web-designer-developer-16-years/313614","image" : "http://petermahoney.net/wp-content/plugins/foobar/images/social/peopleperhour.png","target" : "_blank"},
        {"name" : "Google Plus","url" : "https://plus.google.com/u/1/110002801838494280534","image" : "http://petermahoney.net/wp-content/plugins/foobar/images/social/googleplus.png","target" : "_blank"},
      ]
    },
    "twitter" : {
      "enabled": true,
      "user": "petermahoney",
      "maxTweets":5
    }
    
  });
  



});