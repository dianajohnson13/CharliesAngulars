angular.module('parksAndEx.species', ['ngSanitize'])

.controller('speciesController', function($scope, $sce, speciesFactory) {
    $scope.textArea = "LOADING SPECIES";
    $scope.$on('list-set', function(event, args) {
        speciesFactory.generate(args[0].name, $scope, $sce);
    });
    $scope.$on('switch-park', function(event, args) {
       $scope.textArea = "LOADING SPECIES";
        speciesFactory.generate(args.name, $scope, $sce);
    });
}).factory('speciesFactory', function($http) {
    function XMLtoJSON() {
        var me = this;
        me.fromFile = function(xml, rstr) {
            var xhttp = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
            xhttp.open("GET", xml, false);
            xhttp.send(null);
            var json_str = jsontoStr(setJsonObj(xhttp.responseXML));
            return (typeof(rstr) == 'undefined') ? JSON.parse(json_str) : json_str;
        }
        me.fromStr = function(xml, rstr) {
                if (window.DOMParser) {
                    var getxml = new DOMParser();
                    var xmlDoc = getxml.parseFromString(xml, "text/xml");
                } else {
                    var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                    xmlDoc.async = "false";
                }
                var json_str = jsontoStr(setJsonObj(xmlDoc));
                return (typeof(rstr) == 'undefined') ? JSON.parse(json_str) : json_str;
            }
            // receives XML DOM object, returns converted JSON object
        var setJsonObj = function(xml) {
                var js_obj = {};
                if (xml.nodeType == 1) {
                    if (xml.attributes.length > 0) {
                        js_obj["@attributes"] = {};
                        for (var j = 0; j < xml.attributes.length; j++) {
                            var attribute = xml.attributes.item(j);
                            js_obj["@attributes"][attribute.nodeName] = attribute.value;
                        }
                    }
                } else if (xml.nodeType == 3) {
                    js_obj = xml.nodeValue;
                }
                if (xml.hasChildNodes()) {
                    for (var i = 0; i < xml.childNodes.length; i++) {
                        var item = xml.childNodes.item(i);
                        var nodeName = item.nodeName;
                        if (typeof(js_obj[nodeName]) == "undefined") {
                            js_obj[nodeName] = setJsonObj(item);
                        } else {
                            if (typeof(js_obj[nodeName].push) == "undefined") {
                                var old = js_obj[nodeName];
                                js_obj[nodeName] = [];
                                js_obj[nodeName].push(old);
                            }
                            js_obj[nodeName].push(setJsonObj(item));
                        }
                    }
                }
                return js_obj;
            }
        var jsontoStr = function(js_obj) {
            var rejsn = JSON.stringify(js_obj, undefined, 2).replace(/(\\t|\\r|\\n)/g, '').replace(/"",[\n\t\r\s]+""[,]*/g, '').replace(/(\n[\t\s\r]*\n)/g, '').replace(/[\s\t]{2,}""[,]{0,1}/g, '').replace(/"[\s\t]{1,}"[,]{0,1}/g, '').replace(/\[[\t\s]*\]/g, '""');
            return (rejsn.indexOf('"parsererror": {') == -1) ? rejsn : 'Invalid XML format';
        }
    };

    function getSpecies(args, $scope, $sce) {
        var parkID = "";
        for (var i in parkLists) {
            if (parkLists[i].parkName.toLowerCase().includes(args.toLowerCase())) {
                parkID = parkLists[i].parkCode.trim();
            }
        }
        if (!parkID) {
            $scope.textArea = "NO SPECIES DATA FOUND";
            return "NO SPECIES DATA FOUND";
        }
        var xml2json = new XMLtoJSON();
        $scope.textArea = "";
        for (let i = 0; i < species.length; i++) {
            //var others = "";

            var url = 'http://irmaservices.nps.gov/v3/rest/npspecies/fulllist/' + parkID + "/" + species[i];
            var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from xml where url="' + url + '"') + '&format=xml&callback=?';
            
            $.ajax({
                type: 'GET',
                url: yql,
                async: false,
                crossDomain: true,
                dataType: 'json',
                success: function(data) {
                    var others = "";
                    var objson = xml2json.fromStr(data.results[0]);
                     console.log(objson);
                    if(!objson.ArrayOfSpeciesListItem || !objson.ArrayOfSpeciesListItem.SpeciesListItem) return;
                    for (var j = 0; j < objson.ArrayOfSpeciesListItem.SpeciesListItem.length; j++) {
                        var animalCommonName = objson.ArrayOfSpeciesListItem.SpeciesListItem[j].CommonNames["#text"];
                        if(animalCommonName)
                         others += "<div class='animal'> <a href='https://en.wikipedia.org/wiki/"+animalCommonName.split(' ').join('_').split("'").join("%27")+"''>"+animalCommonName+"</a></div>";
                    }
                    //console.log("--------",species[i],"--------", others);
                    let speciesName = species[i];
                    $scope.$apply(function () {
                    $scope.textArea =  $sce.trustAsHtml($scope.textArea+"<div class='speciesHolder'><h4 class='speciesTitle'>"+species[i]+"</h4><div species = '"+speciesName+"'  class='AllAnimals'>"+others+"</div></div>") ;
                 });

                },
                failure: function(err) {
                    console.log("ERR", err);
                }
            });
        }
    }
    return {
        generate: getSpecies
    };
});