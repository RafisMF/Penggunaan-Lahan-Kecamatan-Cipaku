var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HUTAN_1 = new ol.format.GeoJSON();
var features_HUTAN_1 = format_HUTAN_1.readFeatures(json_HUTAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HUTAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HUTAN_1.addFeatures(features_HUTAN_1);
var lyr_HUTAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HUTAN_1, 
                style: style_HUTAN_1,
                popuplayertitle: "HUTAN",
                interactive: true,
                title: '<img src="styles/legend/HUTAN_1.png" /> HUTAN'
            });
var format_KEBUN_2 = new ol.format.GeoJSON();
var features_KEBUN_2 = format_KEBUN_2.readFeatures(json_KEBUN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KEBUN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KEBUN_2.addFeatures(features_KEBUN_2);
var lyr_KEBUN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KEBUN_2, 
                style: style_KEBUN_2,
                popuplayertitle: "KEBUN",
                interactive: true,
                title: '<img src="styles/legend/KEBUN_2.png" /> KEBUN'
            });
var format_PEMUKIMAN_3 = new ol.format.GeoJSON();
var features_PEMUKIMAN_3 = format_PEMUKIMAN_3.readFeatures(json_PEMUKIMAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_3.addFeatures(features_PEMUKIMAN_3);
var lyr_PEMUKIMAN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_3, 
                style: style_PEMUKIMAN_3,
                popuplayertitle: "PEMUKIMAN",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_3.png" /> PEMUKIMAN'
            });
var format_SAWAH_4 = new ol.format.GeoJSON();
var features_SAWAH_4 = format_SAWAH_4.readFeatures(json_SAWAH_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAWAH_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAWAH_4.addFeatures(features_SAWAH_4);
var lyr_SAWAH_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAWAH_4, 
                style: style_SAWAH_4,
                popuplayertitle: "SAWAH",
                interactive: true,
                title: '<img src="styles/legend/SAWAH_4.png" /> SAWAH'
            });
var format_SEMAK_5 = new ol.format.GeoJSON();
var features_SEMAK_5 = format_SEMAK_5.readFeatures(json_SEMAK_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEMAK_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEMAK_5.addFeatures(features_SEMAK_5);
var lyr_SEMAK_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEMAK_5, 
                style: style_SEMAK_5,
                popuplayertitle: "SEMAK",
                interactive: true,
                title: '<img src="styles/legend/SEMAK_5.png" /> SEMAK'
            });
var format_SUNGAI_6 = new ol.format.GeoJSON();
var features_SUNGAI_6 = format_SUNGAI_6.readFeatures(json_SUNGAI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_6.addFeatures(features_SUNGAI_6);
var lyr_SUNGAI_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_6, 
                style: style_SUNGAI_6,
                popuplayertitle: "SUNGAI",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_6.png" /> SUNGAI'
            });
var format_LADANG_7 = new ol.format.GeoJSON();
var features_LADANG_7 = format_LADANG_7.readFeatures(json_LADANG_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LADANG_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LADANG_7.addFeatures(features_LADANG_7);
var lyr_LADANG_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LADANG_7, 
                style: style_LADANG_7,
                popuplayertitle: "LADANG",
                interactive: true,
                title: '<img src="styles/legend/LADANG_7.png" /> LADANG'
            });

lyr_OSMStandard_0.setVisible(true);lyr_HUTAN_1.setVisible(true);lyr_KEBUN_2.setVisible(true);lyr_PEMUKIMAN_3.setVisible(true);lyr_SAWAH_4.setVisible(true);lyr_SEMAK_5.setVisible(true);lyr_SUNGAI_6.setVisible(true);lyr_LADANG_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_HUTAN_1,lyr_KEBUN_2,lyr_PEMUKIMAN_3,lyr_SAWAH_4,lyr_SEMAK_5,lyr_SUNGAI_6,lyr_LADANG_7];
lyr_HUTAN_1.set('fieldAliases', {'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_KEBUN_2.set('fieldAliases', {'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_PEMUKIMAN_3.set('fieldAliases', {'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_SAWAH_4.set('fieldAliases', {'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_SEMAK_5.set('fieldAliases', {'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_SUNGAI_6.set('fieldAliases', {'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_LADANG_7.set('fieldAliases', {'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_HUTAN_1.set('fieldImages', {'GID_4': '', 'GID_0': '', 'COUNTRY': '', 'GID_1': '', 'NAME_1': '', 'GID_2': '', 'NAME_2': '', 'GID_3': '', 'NAME_3': '', 'NAME_4': '', 'VARNAME_4': '', 'TYPE_4': '', 'ENGTYPE_4': '', 'CC_4': '', });
lyr_KEBUN_2.set('fieldImages', {'GID_4': '', 'GID_0': '', 'COUNTRY': '', 'GID_1': '', 'NAME_1': '', 'GID_2': '', 'NAME_2': '', 'GID_3': '', 'NAME_3': '', 'NAME_4': '', 'VARNAME_4': '', 'TYPE_4': '', 'ENGTYPE_4': '', 'CC_4': '', });
lyr_PEMUKIMAN_3.set('fieldImages', {'GID_4': '', 'GID_0': '', 'COUNTRY': '', 'GID_1': '', 'NAME_1': '', 'GID_2': '', 'NAME_2': '', 'GID_3': '', 'NAME_3': '', 'NAME_4': '', 'VARNAME_4': '', 'TYPE_4': '', 'ENGTYPE_4': '', 'CC_4': '', });
lyr_SAWAH_4.set('fieldImages', {'GID_4': '', 'GID_0': '', 'COUNTRY': '', 'GID_1': '', 'NAME_1': '', 'GID_2': '', 'NAME_2': '', 'GID_3': '', 'NAME_3': '', 'NAME_4': '', 'VARNAME_4': '', 'TYPE_4': '', 'ENGTYPE_4': '', 'CC_4': '', });
lyr_SEMAK_5.set('fieldImages', {'GID_4': '', 'GID_0': '', 'COUNTRY': '', 'GID_1': '', 'NAME_1': '', 'GID_2': '', 'NAME_2': '', 'GID_3': '', 'NAME_3': '', 'NAME_4': '', 'VARNAME_4': '', 'TYPE_4': '', 'ENGTYPE_4': '', 'CC_4': '', });
lyr_SUNGAI_6.set('fieldImages', {'GID_4': '', 'GID_0': '', 'COUNTRY': '', 'GID_1': '', 'NAME_1': '', 'GID_2': '', 'NAME_2': '', 'GID_3': '', 'NAME_3': '', 'NAME_4': '', 'VARNAME_4': '', 'TYPE_4': '', 'ENGTYPE_4': '', 'CC_4': '', });
lyr_LADANG_7.set('fieldImages', {'GID_4': '', 'GID_0': '', 'COUNTRY': '', 'GID_1': '', 'NAME_1': '', 'GID_2': '', 'NAME_2': '', 'GID_3': '', 'NAME_3': '', 'NAME_4': '', 'VARNAME_4': '', 'TYPE_4': '', 'ENGTYPE_4': '', 'CC_4': '', });
lyr_HUTAN_1.set('fieldLabels', {'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_KEBUN_2.set('fieldLabels', {'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_PEMUKIMAN_3.set('fieldLabels', {'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_SAWAH_4.set('fieldLabels', {'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_SEMAK_5.set('fieldLabels', {'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_SUNGAI_6.set('fieldLabels', {'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_LADANG_7.set('fieldLabels', {'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_LADANG_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});