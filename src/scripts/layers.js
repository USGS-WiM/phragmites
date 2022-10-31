
var app = {};
app.version = '2.0.0';
app.mapX = '-97.0';
app.mapY = '40.0';
app.zoomLevel = 4;
var allLayers;

    allLayers = [
        {
            "groupHeading": "Phragmites and Suitable Habitat",
            "showGroupHeading": true,
            "includeInLayerList": true,
            "layers": {
                "Phragmites stands > 0.2 ha":{
                    "url" : "https://gis1.wim.usgs.gov/server/rest/services/GLRI68/Phragmites/MapServer/",
                    "visibleLayers": [1],
                    "options":{
                        "id": "phragStands",
                        // opacity is false because this layer is just being used to show no reduction (nothing for this group of layers)
                        "opacity": 1,
                        "minScale": 4622325,
                        "visible": false
                    },
                    "wimOptions":{
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "includeLegend" : true,
                        "moreinfo": "https://pubs.er.usgs.gov/publication/70048197",
                    }
                },
                "Phragmites habitat suitability": {
                    "url": "https://gis1.wim.usgs.gov/server/rest/services/GLRI68/Phragmites/MapServer/",
                    "visibleLayers": [29],
                    "options": {
                        "id": "habitatSuit",
                        "opacity": 1,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "includeLegend" : true,
                        "moreinfo": "https://pubs.er.usgs.gov/publication/70104177",
                    }
                }
            }
        },
        {
            "groupHeading": "Study Area",
            "showGroupHeading": true,
            "includeInLayerList": true,
            "layers": {
                "Study Area": {
                    "url": "https://gis1.wim.usgs.gov/server/rest/services/GLRI68/Phragmites/MapServer/2",
                    "options": {
                        "type": "layer",
                        "id": "studyArea",
                        "outFields": ["*"],
                        "visible": true
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisFeature",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "includeLegend": true
                    }
                }
            }
        },
        {
            "groupHeading": "ESRI dynamic map services",
            "showGroupHeading": false,
            "includeInLayerList": true,
            "layers": {
                "Surface waters" : {
                    "url": "https://gis1.wim.usgs.gov/server/rest/services/GLRI68/Phragmites/MapServer/",
                    "visibleLayers": [28],
                    "options": {
                        "id": "water",
                        "opacity": 0.75,
                        "minScale": 4622325,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "zoomScale": 144448,
                        "hasOpacitySlider": true,
                        "hasZoomto" : true,
                        "includeLegend" : false
                    }
                }
            }
        },
        {
            "groupHeading": "Distance to Phragmites",
            "showGroupHeading": true,
            "includeInLayerList": true,
            "layers": {
                "No Reduction":{
                    "url" : "https://gis1.wim.usgs.gov/server/rest/services/GLRI68/Phragmites/MapServer/",
                    "visibleLayers": [23],
                    "options":{
                        "id": "none",
                        "opacity": 0,
                        // opacity is 0 because this layer is just being used to show no reduction (nothing for this group of layers)
                        "visible": true
                    },
                    "wimOptions":{
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "exclusiveGroupName": "Distance",
                        /* "hasOpacitySlider": true, */
                        "includeLegend" : false
                    }
                },
                "Contour-base 1m reduction": { 
                    "url": "https://gis1.wim.usgs.gov/server/rest/services/GLRI68/Phragmites/MapServer/",
                    "visibleLayers": [27],
                    "options": {
                        "id": "1m",
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        /* "hasOpacitySlider": true, */
                        "exclusiveGroupName": "Distance",
                        "includeLegend" : false
                    }
                },
                "Lidar-based 1m reduction": {
                    "url": "https://gis1.wim.usgs.gov/server/rest/services/GLRI68/Phragmites/MapServer/",
                    "visibleLayers": [9, 5],
                    "options": {
                        "id": "lidar1m",
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        /* "hasOpacitySlider": true, */
                        "exclusiveGroupName": "Distance",
                        "includeLegend" : false
                    }
                },
                "Lidar-based 50cm reduction": {
                    "url": "https://gis1.wim.usgs.gov/server/rest/services/GLRI68/Phragmites/MapServer/",
                    "visibleLayers": [7, 5],
                    "options": {
                        "id": "lidar50cm",
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true, 
                        /* "hasOpacitySlider": true, */
                        "exclusiveGroupName": "Distance",
                        "includeLegend" : false
                    }
                }
            }
        }
    ]