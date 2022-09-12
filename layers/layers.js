ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32717").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_parroquias_2_1 = new ol.format.GeoJSON();
var features_parroquias_2_1 = format_parroquias_2_1.readFeatures(json_parroquias_2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_parroquias_2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parroquias_2_1.addFeatures(features_parroquias_2_1);
var lyr_parroquias_2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parroquias_2_1, 
                style: style_parroquias_2_1,
                interactive: true,
    title: 'parroquias_2<br />\
    <img src="styles/legend/parroquias_2_1_0.png" /> <br />\
    <img src="styles/legend/parroquias_2_1_1.png" /> CONCEPCION<br />\
    <img src="styles/legend/parroquias_2_1_2.png" /> JACINTO JIJON Y CAAMAÑO<br />\
    <img src="styles/legend/parroquias_2_1_3.png" /> JUAN MONTALVO<br />\
    <img src="styles/legend/parroquias_2_1_4.png" /> MIRA<br />'
        });
var format_poblados_2 = new ol.format.GeoJSON();
var features_poblados_2 = format_poblados_2.readFeatures(json_poblados_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_poblados_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poblados_2.addFeatures(features_poblados_2);
var lyr_poblados_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poblados_2, 
                style: style_poblados_2,
                interactive: true,
                title: '<img src="styles/legend/poblados_2.png" /> poblados'
            });
var format_vias_3 = new ol.format.GeoJSON();
var features_vias_3 = format_vias_3.readFeatures(json_vias_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_vias_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vias_3.addFeatures(features_vias_3);
var lyr_vias_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vias_3, 
                style: style_vias_3,
                interactive: true,
                title: '<img src="styles/legend/vias_3.png" /> vias'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_parroquias_2_1.setVisible(true);lyr_poblados_2.setVisible(true);lyr_vias_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_parroquias_2_1,lyr_poblados_2,lyr_vias_3];
lyr_parroquias_2_1.set('fieldAliases', {'DPA_PARROQ': 'DPA_PARROQ', 'DPA_DESPAR': 'DPA_DESPAR', 'DPA_VALOR': 'DPA_VALOR', 'DPA_ANIO': 'DPA_ANIO', 'DPA_CANTON': 'DPA_CANTON', 'DPA_DESCAN': 'DPA_DESCAN', 'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', 'area': 'area', });
lyr_poblados_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'nam': 'nam', 'layout': 'layout', 'PARROQUIA': 'PARROQUIA', 'X': 'X', 'Y': 'Y', });
lyr_vias_3.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'acc': 'acc', 'acc_desc': 'acc_desc', 'rst': 'rst', 'rst_desc': 'rst_desc', 'typ': 'typ', 'typ_desc': 'typ_desc', 'hct': 'hct', 'hct_desc': 'hct_desc', 'wtc': 'wtc', 'wtc_desc': 'wtc_desc', 'loc': 'loc', 'loc_desc': 'loc_desc', 'ltn': 'ltn', 'mes': 'mes', 'mes_desc': 'mes_desc', 'tuc': 'tuc', 'tuc_desc': 'tuc_desc', 'txt': 'txt', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_parroquias_2_1.set('fieldImages', {'DPA_PARROQ': 'TextEdit', 'DPA_DESPAR': 'TextEdit', 'DPA_VALOR': 'Range', 'DPA_ANIO': 'TextEdit', 'DPA_CANTON': 'TextEdit', 'DPA_DESCAN': 'TextEdit', 'DPA_PROVIN': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'area': 'Range', });
lyr_poblados_2.set('fieldImages', {'OBJECTID': 'Range', 'nam': 'TextEdit', 'layout': 'TextEdit', 'PARROQUIA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_vias_3.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'acc': 'Range', 'acc_desc': 'TextEdit', 'rst': 'Range', 'rst_desc': 'TextEdit', 'typ': 'Range', 'typ_desc': 'TextEdit', 'hct': 'Range', 'hct_desc': 'TextEdit', 'wtc': 'Range', 'wtc_desc': 'TextEdit', 'loc': 'Range', 'loc_desc': 'TextEdit', 'ltn': 'Range', 'mes': 'Range', 'mes_desc': 'TextEdit', 'tuc': 'Range', 'tuc_desc': 'TextEdit', 'txt': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_parroquias_2_1.set('fieldLabels', {'DPA_PARROQ': 'inline label', 'DPA_DESPAR': 'inline label', 'DPA_VALOR': 'inline label', 'DPA_ANIO': 'inline label', 'DPA_CANTON': 'inline label', 'DPA_DESCAN': 'inline label', 'DPA_PROVIN': 'inline label', 'DPA_DESPRO': 'inline label', 'area': 'inline label', });
lyr_poblados_2.set('fieldLabels', {'OBJECTID': 'inline label', 'nam': 'inline label', 'layout': 'inline label', 'PARROQUIA': 'inline label', 'X': 'inline label', 'Y': 'inline label', });
lyr_vias_3.set('fieldLabels', {'fcode': 'inline label', 'descripcio': 'inline label', 'acc': 'inline label', 'acc_desc': 'inline label', 'rst': 'inline label', 'rst_desc': 'inline label', 'typ': 'inline label', 'typ_desc': 'inline label', 'hct': 'inline label', 'hct_desc': 'inline label', 'wtc': 'inline label', 'wtc_desc': 'inline label', 'loc': 'inline label', 'loc_desc': 'inline label', 'ltn': 'inline label', 'mes': 'inline label', 'mes_desc': 'inline label', 'tuc': 'inline label', 'tuc_desc': 'inline label', 'txt': 'inline label', 'SHAPE_Leng': 'inline label', });
lyr_vias_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});