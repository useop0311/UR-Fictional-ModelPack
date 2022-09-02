//include <scripts/pck_importPackage.js>
 
function onUpdate(su){
    //include <scripts/pck_basicFunction.js>
 
    //include <scripts/M-TREC_VVVF-SiC(Hybrid_Mit).js>
	onUpdate(su);
 
    //include <scripts/pck_plugin/deadsection.js>
    deadsection(entity, dataMap, 0);
	
	//include <scripts/pck_plugin/stationAlert.js>
    stationAlert(entity, dataMap, 0);
	
	//include <scripts/pck_plugin/doorBeep.js>
    doorBeep(entity, dataMap, 0, 5000);
    
}