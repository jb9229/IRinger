"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/dev-sstk/IRinger/expo-service-worker.js",{scope:"/dev-sstk/IRinger/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}));