
var app = {};
app.version = '0.0.0';
app.mapX = '-97.0';
app.mapY = '40.0';
app.zoomLevel = 4;
var allLayers;

    allLayers = [
        {
            "groupHeading": "Study Area",
            "showGroupHeading": true,
            "includeInLayerList": true,
            "layers": {
                "Study Area": {
                    "url": "http://igskmncwfsmap.er.usgs.gov:6080/arcgis/rest/services/GLRI68_Phragmites/MapServer/2",
                    "options": {
                        "type": "layer",
                        "id": "studyArea",
                        /* "visibleLayers": [0], */
                        "outFields": ["*"],
                        /* "orderByFields": [ "network_centroids.P00940_Chloride DESC" ], */
                        "visible": true
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisFeature",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "includeLegend": true,
                    }
                }
            }
        },
        {
            "groupHeading": "ESRI dynamic map services",
            "showGroupHeading": false,
            "includeInLayerList": true,
            "layers": {
                "Within streams, wetlands, and water bodies" : {
                    "url": "http://igskmncwfsmap.er.usgs.gov:6080/arcgis/rest/services/GLRI68_Phragmites/MapServer",
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
                    "url" : "http://igskmncwfsmap.er.usgs.gov:6080/arcgis/rest/services/GLRI68_Phragmites/MapServer",
                    "visibleLayers": [23],
                    "options":{
                        "id": "none",
                        // opacity is false because this layer is just being used to show no reduction (nothing for this group of layers)
                        "opacity": 0,
                        "visible": true
                    },
                    "wimOptions":{
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "exclusiveGroupName": "distance",
                        "includeLegend" : false
                    }
                },
                "Contour-base 1m reduction": {
                    "url": "http://igskmncwfsmap.er.usgs.gov:6080/arcgis/rest/services/GLRI68_Phragmites/MapServer",
                    "visibleLayers": [27],
                    "options": {
                        "id": "1m",
                        "opacity": 1,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "exclusiveGroupName": "distance",
                        "includeLegend" : false
                    }
                },
                "Lida-based 1m reduction": {
                    "url": "http://igskmncwfsmap.er.usgs.gov:6080/arcgis/rest/services/GLRI68_Phragmites/MapServer",
                    "visibleLayers": [9, 5],
                    "options": {
                        "id": "lidar1m",
                        "opacity": 1,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "exclusiveGroupName": "distance",
                        "includeLegend" : false
                    }
                },
                "Lida-based 50m reduction": {
                    "url": "http://igskmncwfsmap.er.usgs.gov:6080/arcgis/rest/services/GLRI68_Phragmites/MapServer",
                    "visibleLayers": [7, 5],
                    "options": {
                        "id": "lidar50cm",
                        "opacity": 1,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "exclusiveGroupName": "distance",
                        "includeLegend" : false
                    }
                }
            }
        },
        {
            "groupHeading": "Phragmites and Suitable Habitat",
            "showGroupHeading": true,
            "includeInLayerList": true,
            "layers": {
                "Phragmites stands > 0.2 ha":{
                    "url" : "http://igskmncwfsmap.er.usgs.gov:6080/arcgis/rest/services/GLRI68_Phragmites/MapServer",
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
                        "includeLegend" : true
                    }
                },
                "Phragmites habitat suitability": {
                    "url": "http://igskmncwfsmap.er.usgs.gov:6080/arcgis/rest/services/GLRI68_Phragmites/MapServer",
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
                        "includeLegend" : true
                    }
                }
            }
        }
    ]