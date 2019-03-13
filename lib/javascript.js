(function readyJS(win,doc){

    //Get Root
    function getRoot() {
        return win.location.protocol+"//"+doc.location.hostname+"/";
    }

    //Get brand
    function getBrand()
    {
        $.ajax({
            url: getRoot()+"controller/controllerFipe.php?action=brand",
            type:"post",
            dataType:"json",
            success:function (response) {
                const responseJson=JSON.parse(response);
                for(let i=0; i < responseJson.length; i++){
                    $("#brand").append("<option value='"+responseJson[i].id+"'>"+responseJson[i].name+"</option>");
                }
            }
        });
    }

    getBrand();

})(window,document);

//Function ajax
function ajaxFunction(action,brandId="",vehicleId="")
{
    $.ajax({
        url: getRoot()+"controller/controllerFipe.php?action="+action+brandId+vehicleId+"",
        type:"post",
        dataType:"json",
        success:function (response) {
            const responseJson=JSON.parse(response);
            for(let i=0; i < responseJson.length; i++){
                $("#"+action).append("<option value='"+responseJson[i].id+"'>"+responseJson[i].name+"</option>");
            }
        }
    });
}

//Get brand
function getBrand()
{
    ajaxFunction("brand");
    $("#brand").on("change",function(){
        $("#vehicles").show();
        getVehicles($(this).val());
    });
}

//Get Vehicles
function getVehicles(brandId)
{
    ajaxFunction("vehicles","&brandId="+brandId);
    $("#vehicles").on("change",function(){
        $("#year").show();
        getYear(brandId,$(this).val());
    });
}

//Get Year
function getYear(brandId,vehicleId)
{
    ajaxFunction("year","&brandId="+brandId,"&vehicleId="+vehicleId);
}

getBrand();