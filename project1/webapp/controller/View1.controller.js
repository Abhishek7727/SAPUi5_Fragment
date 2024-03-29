sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Fragment) {
        "use strict";

        return Controller.extend("com.app.project1.controller.View1", {
            onInit: function () {

            },
            OnPress:function(){



                var oView=this.getView();
                var name=this.getView().byId("inputId");
                var age=this.getView().byId("ageId");


                if(!this.byId("dialogId")){
                    Fragment.load({
                        name:"com.app.project1.fragments.data",
                        controller:this,
                        id:oView.getId()
                    }).then(function(oDialog)
                    {
                        oDialog.open();
                        var content=oDialog.getContent();
                        content[1].setValue(name.getValue());
                        content[3].setValue(age.getValue());
                    });
                }
                else{
                    this.byId("dialogId").opne();
                    var content=this.byId("dialogId").getContent();
                    content[1].setValue(name.getValue());
                    content[3].setValue(age.getValue());
                }
            },
            OnClose:function(){
                this.byId("dialogId").close();
            }
        });
    });
