function addCommas(e){e+="";for(var a=e.split("."),i=a[0],t=a.length>1?"."+a[1]:"",n=/(\d+)(\d{3})/;n.test(i);)i=i.replace(n,"$1,$2");return i+t}function camelize(e){return e.replace(/(?:^\w|[A-Z]|\b\w)/g,function(e,a){return 0==a?e.toLowerCase():e.toUpperCase()}).replace(/\s+/g,"")}var allLayers,defaultExtent=[-83.481,44.867],zoomLevel=require(["esri/map","esri/dijit/HomeButton","esri/dijit/LocateButton","esri/geometry/webMercatorUtils","dojo/on","dojo/domReady!"],function(e,a,i,t,n){if(app.map=new e("mapDiv",{basemap:"gray",center:defaultExtent,zoom:7}),$(document).ready(function(){$("#btnStreets").click(function(){app.map.setBasemap("streets"),ga("send",{hitType:"event",eventCategory:"Basemap",eventAction:"click",eventLabel:"Streets"})}),$("#btnSatellite").click(function(){app.map.setBasemap("satellite"),ga("send",{hitType:"event",eventCategory:"Basemap",eventAction:"click",eventLabel:"Satellite"})}),$("#btnTopo").click(function(){app.map.setBasemap("topo"),ga("send",{hitType:"event",eventCategory:"Basemap",eventAction:"click",eventLabel:"Topo"})}),$("#btnTerrain").click(function(){app.map.setBasemap("terrain"),ga("send",{hitType:"event",eventCategory:"Basemap",eventAction:"click",eventLabel:"Terrain"})}),$("#btnGray").click(function(){app.map.setBasemap("gray"),ga("send",{hitType:"event",eventCategory:"Basemap",eventAction:"click",eventLabel:"Gray"})}),$("#btnNatGeo").click(function(){app.map.setBasemap("national-geographic"),ga("send",{hitType:"event",eventCategory:"Basemap",eventAction:"click",eventLabel:"National Geographic"})})}),new a({map:app.map},"homeButton").startup(),new i({map:app.map},"locateButton").startup(),$("#mobile-main-menu").click(function(){$("body").toggleClass("isOpenMenu")}),$(document).ready(function(){function e(){$("#geosearchModal").modal("show")}$("#geosearchButton").click(function(){e()}),$("#aboutButton").click(function(){$("#aboutModal").modal("show")}),$("#geosearchButton").click(function(){e()}),$("#userGuideButton").click(function(){$("#userGuideModal").modal("show")}),$("#faqButton").click(function(){$("#faqModal").modal("show")})}),search_api.create("geosearch",{on_result:function(e){require(["esri/geometry/Extent"],function(a){var i=["GNIS_MAJOR","GNIS_MINOR","ZIPCODE","AREACODE"],t=i.indexOf(e.result.properties.Source);$("#geosearchModal").modal("hide"),-1==t?app.map.setExtent(new esri.geometry.Extent({xmin:e.result.properties.LonMin,ymin:e.result.properties.LatMin,xmax:e.result.properties.LonMax,ymax:e.result.properties.LatMax,spatialReference:{wkid:4326}}),!0):require(["esri/geometry/Point"],function(a){app.map.centerAndZoom(new a(e.result.properties.Lon,e.result.properties.Lat),12)})})},include_usgs_sw:!0,include_usgs_gw:!0,include_usgs_sp:!0,include_usgs_at:!0,include_usgs_ot:!0,include_huc2:!0,include_huc4:!0,include_huc6:!0,include_huc8:!0,include_huc10:!0,include_huc12:!0,on_failure:function(e){$("#test").html("Sorry, a location could not be found in search for '"+e.val()+"'"),$("#invalidSearchLocationModal").modal("show")}}),$("#aboutModalTitle").append(" <small>v"+app.version+"</small>"),app.map.on("load",function(){var e=app.map.getScale().toFixed(0);$("#scale")[0].innerHTML=addCommas(e);var a=t.webMercatorToGeographic(app.map.extent.getCenter());$("#latitude").html(a.y.toFixed(3)),$("#longitude").html(a.x.toFixed(3))}),app.map.on("zoom-end",function(){var e=app.map.getScale().toFixed(0);$("#scale")[0].innerHTML=addCommas(e)}),app.map.on("mouse-move",function(e){if($("#mapCenterLabel").css("display","none"),null!=e.mapPoint){var a=t.webMercatorToGeographic(e.mapPoint);$("#latitude").html(a.y.toFixed(3)),$("#longitude").html(a.x.toFixed(3))}}),app.map.on("pan-end",function(){$("#mapCenterLabel").css("display","inline");var e=t.webMercatorToGeographic(app.map.extent.getCenter());$("#latitude").html(e.y.toFixed(3)),$("#longitude").html(e.x.toFixed(3))}),!(-1!==navigator.userAgent.indexOf("MSIE")||navigator.appVersion.indexOf("Trident/")>0))return!1;$("#IEwarningModal").modal("show")});require(["esri/dijit/Legend","esri/tasks/locator","esri/tasks/query","esri/tasks/QueryTask","esri/graphicsUtils","esri/geometry/Point","esri/geometry/Extent","esri/layers/ArcGISDynamicMapServiceLayer","esri/layers/FeatureLayer","esri/layers/RasterLayer","esri/SpatialReference","esri/layers/WMSLayer","esri/layers/WMSLayerInfo","esri/layers/WebTiledLayer","dijit/form/CheckBox","dijit/form/RadioButton","dojo/query","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/on"],function(e,a,i,t,n,o,s,l,r,c,p,d,g,f,u,y,m,h,b,v,q,w){function k(e,a,i,t,n,o,s){if(app.map.addLayer(i),T.push([n,camelize(t),i]),n){if(!$("#"+camelize(n)).length){var l;if("Data Source"==n)var l=$('<div id="'+camelize(n+" Root")+'" class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default active" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-check-square-o"></i>&nbsp;&nbsp;'+n+'<span id="info'+camelize(n)+'" title="Data Source identifies the scale, year and emulsion of the imagery that was used to map the wetlands and riparian areas for a given area. It also identifies areas that have Scalable data, which is an interim data product in areas of the nation where standard compliant wetland data is not yet available. Click for more info on Scalable data." class="glyphspan glyphicon glyphicon-question-sign pull-right"></span><span id="opacity'+camelize(n)+'" style="padding-right: 5px" class="glyphspan glyphicon glyphicon-adjust pull-right"></span></button> </div>');else var l=$('<div id="'+camelize(n+" Root")+'" class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default active" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-check-square-o"></i>&nbsp;&nbsp;'+n+"</button> </div>");l.click(function(e){l.find("i.glyphspan").toggleClass("fa-check-square-o fa-square-o"),$.each(T,function(e,a){var i=app.map.getLayer(a[2].id);if(a[0]==n)if($("#"+a[1]).find("i.glyphspan").hasClass("fa-dot-circle-o")&&l.find("i.glyphspan").hasClass("fa-check-square-o")){console.log("adding layer: ",a[1]),app.map.addLayer(a[2]);var i=app.map.getLayer(a[2].id);i.setVisibility(!0)}else if(l.find("i.glyphspan").hasClass("fa-square-o")){console.log("removing layer: ",a[1]);var i=app.map.getLayer(a[2].id);i.setVisibility(!1)}})});var r=$('<div id="'+camelize(n)+'" class="btn-group-vertical" data-toggle="buttons"></div>');$("#toggle").append(r),console.log("here")}if(i.visible)var c=$('<div id="'+camelize(t)+'" class="btn-group-vertical lyrTog radioTog" style="cursor: pointer;" data-toggle="buttons"> <label class="btn btn-default"  style="font-weight: bold;text-align: left"> <input type="radio" name="'+camelize(n)+'" autocomplete="off"><i class="glyphspan fa fa-dot-circle-o '+camelize(n)+'"></i>&nbsp;&nbsp;'+t+"</label> </div>");else var c=$('<div id="'+camelize(t)+'" class="btn-group-vertical lyrTog radioTog" style="cursor: pointer;" data-toggle="buttons"> <label class="btn btn-default"  style="font-weight: bold;text-align: left"> <input type="radio" name="'+camelize(n)+'" autocomplete="off"><i class="glyphspan fa fa-circle-o '+camelize(n)+'"></i>&nbsp;&nbsp;'+t+"</label> </div>");$("#"+camelize(n)).append(c),c.click(function(e){if($(this).find("i.glyphspan").hasClass("fa-circle-o")){$(this).find("i.glyphspan").toggleClass("fa-dot-circle-o fa-circle-o");var a=$(this)[0].id;$.each(T,function(e,i){if(i[0]==n)if(i[1]==a&&$("#"+camelize(n+" Root")).find("i.glyphspan").hasClass("fa-check-square-o")){console.log("adding layer: ",i[1]),app.map.addLayer(i[2]);var t=app.map.getLayer(i[2].id);t.setVisibility(!0),"lidar1m"==t.id?$("#distanceLegend").html('Lidar-based 1m reduction<img class="legendImage" src="images/contour_1m_legend.jpg" /><br>Lidar Availability<img class="legendImage" src="images/lidar_availability.jpg" />'):"lidar50cm"==t.id?$("#distanceLegend").html('Lidar-based 50cm reduction<img class="legendImage" src="images/contour_1m_legend.jpg" /><br>Lidar Availability<img class="legendImage" src="images/lidar_availability.jpg" />'):"1m"==t.id?$("#distanceLegend").html('Contour-based 1m reduction<img class="legendImage" src="images/contour_1m_legend.jpg" />'):$("#distanceLegend").html(" ")}else if(i[1]==a&&$("#"+camelize(n+" Root")).find("i.glyphspan").hasClass("fa-square-o"))console.log("group heading not checked");else{console.log("removing layer: ",i[1]);var t=app.map.getLayer(i[2].id);t.setVisibility(!1),$("#"+i[1]).find("i.glyphspan").hasClass("fa-dot-circle-o")&&$("#"+i[1]).find("i.glyphspan").toggleClass("fa-dot-circle-o fa-circle-o")}})}})}else if(s.includeInLayerList){if(i.visible&&void 0!==s.hasOpacitySlider&&1==s.hasOpacitySlider&&void 0!==s.moreinfo&&s.moreinfo)var c=$('<div class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-check-square-o"></i>&nbsp;&nbsp;'+t+'<span id="info'+camelize(t)+'" title="more info" class="glyphspan glyphicon glyphicon-question-sign pull-right"></span><span id="opacity'+camelize(t)+'" style="padding-right: 5px" class="glyphspan glyphicon glyphicon-adjust pull-right"></span></button></div>');else if(!i.visible&&void 0!==s.hasOpacitySlider&&1==s.hasOpacitySlider&&void 0!==s.moreinfo&&s.moreinfo)var c=$('<div class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-square-o"></i>&nbsp;&nbsp;'+t+'<span id="info'+camelize(t)+'" title="more info" class="glyphspan glyphicon glyphicon-question-sign pull-right"></span><span id="opacity'+camelize(t)+'" style="padding-right: 5px" class="glyphspan glyphicon glyphicon-adjust pull-right"></span></button></div>');else if(i.visible&&void 0!==s.hasOpacitySlider&&1==s.hasOpacitySlider)var c=$('<div class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-check-square-o"></i>&nbsp;&nbsp;'+t+'<span id="info'+camelize(t)+'" title="more info" class="glyphspan glyphicon glyphicon-question-sign pull-right"></button></span></div>');else if(i.visible||void 0===s.hasOpacitySlider||1!=s.hasOpacitySlider)if(i.visible&&void 0!==s.moreinfo&&s.moreinfo)var c=$('<div class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-check-square-o"></i>&nbsp;&nbsp;'+t+'<span id="opacity'+camelize(t)+'" class="glyphspan glyphicon glyphicon-adjust pull-right"></button></span></div>');else if(!i.visible&&void 0!==s.moreinfo&&s.moreinfo)var c=$('<div class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-square-o"></i>&nbsp;&nbsp;'+t+'<span id="info'+camelize(t)+'" title="more info" class="glyphspan glyphicon glyphicon-question-sign pull-right"></button></span></div>');else if(i.visible)var c=$('<div class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default active" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-check-square-o"></i>&nbsp;&nbsp;'+t+"</button></span></div>");else var c=$('<div class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-square-o"></i>&nbsp;&nbsp;'+t+"</button> </div>");else var c=$('<div class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default active" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-square-o"></i>&nbsp;&nbsp;'+t+'<span id="opacity'+camelize(t)+'" class="glyphspan glyphicon glyphicon-adjust pull-right"></button></span></div>');$("#infonetworkBoundaries").prop("title","A network is a set of 20 to 30 wells selected to represent water-quality conditions in a given geographical area, aquifer, and in some cases, a specific land use. A network resampled at approximately 10-year intervals is a decadal trend network"),$("#infomagnitudeOfChange").prop("title","Click on network arrow or dot for more information"),c.click(function(e){$(this).find("i.glyphspan").toggleClass("fa-check-square-o fa-square-o"),$(this).find("button").button("toggle"),i.visible?(i.setVisibility(!1),"water"==i.id&&$("#waterLegend").html("")):(i.setVisibility(!0),"water"==i.id&&$("#waterLegend").html('Within streams, wetlands,<br>and water bodies<img class="legendImage" src="images/contour_1m_legend.jpg" />')),s.otherLayersToggled&&$.each(s.otherLayersToggled,function(e,a){app.map.getLayer(a).setVisibility(i.visible)})})}if(void 0!==a){var p=camelize(e);if(!$("#"+p).length){if(a)var d=$('<div id="'+p+'"><div id="grouphead"><strong>'+e+"</strong></div></div>");else var d=$('<div id="'+p+'"></div>');$("#toggle").append(d)}if(n){if($("#"+p).append(l),$("#"+p).append(r),void 0!==s.moreinfo&&s.moreinfo){var g="#info"+camelize(n),f=$(g);f.click(function(e){window.open(s.moreinfo,"_blank"),e.preventDefault(),e.stopPropagation()})}if($("#opacity"+camelize(n)).length>0){var g="#opacity"+camelize(n);$(g).click(function(e){e.preventDefault(),e.stopPropagation(),$(".opacitySlider").remove();var a=app.map.getLayer(o.id).opacity,i=$('<div class="opacitySlider"><label id="opacityValue">Opacity: '+a+'</label><label class="opacityClose pull-right">X</label><input id="slider" type="range"></div>');$("body").append(i),$("#slider")[0].value=100*a,$(".opacitySlider").css("left",event.clientX-180),$(".opacitySlider").css("top",event.clientY-50),$(".opacitySlider").mouseleave(function(){$(".opacitySlider").remove()}),$(".opacityClose").click(function(){$(".opacitySlider").remove()}),$("#slider").change(function(e){var a=$("#slider")[0].value/100;console.log("o: "+a),$("#opacityValue").html("Opacity: "+a),app.map.getLayer(o.id).setOpacity(a),s.otherLayersToggled&&$.each(s.otherLayersToggled,function(e,i){app.map.getLayer(i).setOpacity(a)})})})}}else{if($("#"+p).append(c),void 0!==s.moreinfo&&s.moreinfo){var g="#info"+camelize(t),f=$(g);f.click(function(e){window.open(s.moreinfo,"_blank"),e.preventDefault(),e.stopPropagation()})}$("#opacity"+camelize(t)).length>0&&$("#opacity"+camelize(t)).click(function(e){e.preventDefault(),e.stopPropagation(),$(".opacitySlider").remove();var a=app.map.getLayer(o.id).opacity,i=$('<div class="opacitySlider"><label id="opacityValue">Opacity: '+a+'</label><label class="opacityClose pull-right">X</label><input id="slider" type="range"></div>');$("body").append(i),$("#slider")[0].value=100*a,$(".opacitySlider").css("left",event.clientX-180),$(".opacitySlider").css("top",event.clientY-50),$(".opacitySlider").mouseleave(function(){$(".opacitySlider").remove()}),$(".opacityClose").click(function(){$(".opacitySlider").remove()}),$("#slider").change(function(e){var a=$("#slider")[0].value/100;console.log("o: "+a),$("#opacityValue").html("Opacity: "+a),app.map.getLayer(o.id).setOpacity(a),s.otherLayersToggled&&$.each(s.otherLayersToggled,function(e,i){app.map.getLayer(i).setOpacity(a)})})})}}else if($("#toggle").append(c),void 0!==s.moreinfo&&s.moreinfo){var g="#info"+camelize(t),f=$(g);f.click(function(e){alert(e.currentTarget.id),e.preventDefault(),e.stopPropagation()})}}var L=[],T=[];$.each(allLayers,function(e,a){console.log("processing: ",a.groupHeading),$.each(a.layers,function(e,i){var t=e;"pest layer"!=t&&"Eco Sites layer"!=t&&"WRTDS Concentration Sites"!=t&&"WRTDS Flux Sites"!=t||(t="Trend results");var n="";if(i.wimOptions.exclusiveGroupName&&(n=i.wimOptions.exclusiveGroupName),"agisFeature"===i.wimOptions.layerType){var o=new r(i.url,i.options);void 0!==i.wimOptions.renderer&&o.setRenderer(i.wimOptions.renderer),i.wimOptions&&1==i.wimOptions.includeLegend&&L.push({layer:o,title:t}),k(a.groupHeading,a.showGroupHeading,o,e,n,i.options,i.wimOptions)}else if("agisWMS"===i.wimOptions.layerType){var o=new d(i.url,{resourceInfo:i.options.resourceInfo,visibleLayers:i.options.visibleLayers},i.options);i.wimOptions&&1==i.wimOptions.includeLegend&&L.push({layer:o,title:t}),k(a.groupHeading,a.showGroupHeading,o,e,n,i.options,i.wimOptions)}else if("webTiledLayer"===i.wimOptions.layerType){var o=new f(i.url,i.options);i.wimOptions&&1==i.wimOptions.includeLegend&&L.push({layer:o,title:t}),k(a.groupHeading,a.showGroupHeading,o,e,n,i.options,i.wimOptions)}else if("agisDynamic"===i.wimOptions.layerType){var o=new l(i.url,i.options);if(i.visibleLayers&&o.setVisibleLayers(i.visibleLayers),i.wimOptions&&i.wimOptions.layerDefinitions){var s=[];$.each(i.wimOptions.layerDefinitions,function(e,a){s[e]=a}),o.setLayerDefinitions(s)}i.wimOptions&&1==i.wimOptions.includeLegend&&L.push({layer:o,title:t}),k(a.groupHeading,a.showGroupHeading,o,e,n,i.options,i.wimOptions)}else if("agisImage"===i.wimOptions.layerType){var o=new ArcGISImageServiceLayer(i.url,i.options);i.wimOptions&&1==i.wimOptions.includeLegend&&L.push({layer:o,title:t}),i.visibleLayers&&o.setVisibleLayers(i.visibleLayers),k(a.groupHeading,a.showGroupHeading,o,e,n,i.options,i.wimOptions)}})}),$(document).ready(function(){$("#distanceRoot").css("display","none"),$("#habitatRoot").css("display","none")}),new e({map:app.map,layerInfos:L},"legendDiv").startup(),$("#faq1header").click(function(){$("#faq1body").slideToggle(250)}),$("#faq2header").click(function(){$("#faq2body").slideToggle(250)}),$("#faq3header").click(function(){$("#faq3body").slideToggle(250)}),$("#faq4header").click(function(){$("#faq4body").slideToggle(250)}),$("#faq5header").click(function(){$("#faq5body").slideToggle(250)}),$("#faq6header").click(function(){$("#faq6body").slideToggle(250)}),$("#faq7header").click(function(){$("#faq7body").slideToggle(250)}),$("#faq8header").click(function(){$("#faq8body").slideToggle(250)}),$("#faq9header").click(function(){$("#faq9body").slideToggle(250)}),$("#faq10header").click(function(){$("#faq10body").slideToggle(250)}),$("#faq11header").click(function(){$("#faq11body").slideToggle(250)}),$("#faq12header").click(function(){$("#faq12body").slideToggle(250)}),$("#faq13header").click(function(){$("#faq13body").slideToggle(250)}),$("#faq14header").click(function(){$("#faq14body").slideToggle(250)}),$("#faq15header").click(function(){$("#faq15body").slideToggle(250)}),$("#faq16header").click(function(){$("#faq16body").slideToggle(250)}),$("#faq17header").click(function(){$("#faq17body").slideToggle(250)}),$("#faq18header").click(function(){$("#faq18body").slideToggle(250)}),$("#faq19header").click(function(){$("#faq19body").slideToggle(250)}),$("#faq20header").click(function(){$("#faq20body").slideToggle(250)}),$("#faq21header").click(function(){$("#faq21body").slideToggle(250)}),$("#faq22header").click(function(){$("#faq22body").slideToggle(250)}),$("#faq23header").click(function(){$("#faq23body").slideToggle(250)}),$("#faq24header").click(function(){$("#faq24body").slideToggle(250)}),$("#faq25header").click(function(){$("#faq25body").slideToggle(250)}),$("#faq26header").click(function(){$("#faq26body").slideToggle(250)}),$("#faq27header").click(function(){$("#faq27body").slideToggle(250)}),$("#faq28header").click(function(){$("#faq28body").slideToggle(250)}),$("#faq1header").click(function(){"none"==$("#angle1").css("transform")?$("#angle1").css("transform","rotate(90deg)"):$("#angle1").css("transform","")}),$("#faq2header").click(function(){"none"==$("#angle2").css("transform")?$("#angle2").css("transform","rotate(90deg)"):$("#angle2").css("transform","")}),$("#faq3header").click(function(){"none"==$("#angle3").css("transform")?$("#angle3").css("transform","rotate(90deg)"):$("#angle3").css("transform","")}),$("#faq4header").click(function(){"none"==$("#angle4").css("transform")?$("#angle4").css("transform","rotate(90deg)"):$("#angle4").css("transform","")}),$("#faq5header").click(function(){"none"==$("#angle5").css("transform")?$("#angle5").css("transform","rotate(90deg)"):$("#angle5").css("transform","")}),$("#faq6header").click(function(){"none"==$("#angle6").css("transform")?$("#angle6").css("transform","rotate(90deg)"):$("#angle6").css("transform","")}),$("#faq7header").click(function(){"none"==$("#angle7").css("transform")?$("#angle7").css("transform","rotate(90deg)"):$("#angle7").css("transform","")}),$("#faq8header").click(function(){"none"==$("#angle8").css("transform")?$("#angle8").css("transform","rotate(90deg)"):$("#angle8").css("transform","")}),$("#faq9header").click(function(){"none"==$("#angle9").css("transform")?$("#angle9").css("transform","rotate(90deg)"):$("#angle9").css("transform","")}),$("#faq10header").click(function(){"none"==$("#angle10").css("transform")?$("#angle10").css("transform","rotate(90deg)"):$("#angle10").css("transform","")})});