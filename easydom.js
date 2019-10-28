
    function windowTemplate(){
        /**
         * creating the template
         */
        let templateWindow = document.createElement("div");
            templateWindow.setAttribute("class", "templateWindow");
            templateWindow.setAttribute("id", "templateWindow");
            document.body.appendChild(templateWindow);
    }

    /*
    * closing window
    * */
    function closeTemplate(buttonClose, templateWindow=null){

        //if button click then
        buttonClose.addEventListener("click", function(){
            templateWindow.classList.add("out");

            setTimeout(()=>{
                templateWindow.remove();
            },200);

        });


        //if template click then
        templateWindow.addEventListener("click", function(){


            templateWindow.classList.add("out");

            setTimeout(()=>{

                templateWindow.remove();
            },200);

        });
    }

    function closeTemplateOnly(buttonClose, templateWindow) {

        //if button click then
        buttonClose.addEventListener("click", function () {
            templateWindow.classList.add("out");

            setTimeout(() => {
                templateWindow.remove();
            }, 200);

        });

    }

    function windowError(title=null, msj=null) {
        windowTemplate();


        //container window
        let containerWindow = document.getElementById("templateWindow");


        if( (msj === null) && (title === null) ){

            title = "Title error";
            msj = "Description error";

        }
        let titleWindow = document.createElement("h1");
            titleWindow.setAttribute("class", "titleWindow");
            titleWindow.setAttribute("id", "titleWindow");
            titleWindow.textContent = title;


        let messageWindow = document.createElement("p");
            messageWindow.setAttribute("class", "messageWindow");
            messageWindow.setAttribute("id", "messageWindow");
            messageWindow.textContent = msj;

        let buttonOk = document.createElement("button");
            buttonOk.setAttribute("class", "buttonOk");
            buttonOk.setAttribute("id", "buttonOk");
            buttonOk.textContent = "OK";

        let windowErr = document.createElement("div");
            windowErr.setAttribute("class", "windowError");
            windowErr.setAttribute("id", "windowError");

            windowErr.appendChild(titleWindow);
            windowErr.appendChild(messageWindow);
            windowErr.appendChild(buttonOk);




        if (containerWindow) {
            containerWindow.appendChild(windowErr);
        }

        let buttonClose = document.getElementById("buttonOk");
        let templateWindow = document.getElementById("templateWindow");

         if(buttonClose && templateWindow){
             closeTemplate(buttonClose, templateWindow);
         }



    }






    function windowAsk(msj="Deseas algo?", toGo) {


        windowTemplate();
        msj = "¿" + msj + "?";

        //container window
        let containerWindow = document.getElementById("templateWindow");




        let messageAsk = document.createElement("p");
            messageAsk.setAttribute("class", "messageWindow");
            messageAsk.setAttribute("id", "messageWindow");
            messageAsk.textContent = msj;

        let buttonAccept = document.createElement("button");
            buttonAccept.setAttribute("class", "buttonAccept");
            buttonAccept.setAttribute("id", "buttonAccept");
            buttonAccept.textContent = "Accept";

        let buttonCancel = document.createElement("button");
            buttonCancel.setAttribute("class", "buttonCancel");
            buttonCancel.setAttribute("id", "buttonCancel");
            buttonCancel.textContent = "Cancel";

        let windowAsk = document.createElement("div");
            windowAsk.setAttribute("class", "windowAsk");
            windowAsk.setAttribute("id", "windowAsk");

            windowAsk.appendChild(messageAsk);
            windowAsk.appendChild(buttonAccept);
            windowAsk.appendChild(buttonCancel);




        if (containerWindow) {
            containerWindow.appendChild(windowAsk);
        }

        let btnCancel = document.getElementById("buttonCancel");

        if(btnCancel){

            closeTemplateOnly(btnCancel, containerWindow)
        }

        let acceptButton = document.getElementById("buttonAccept");

        if(acceptButton){
            closeTemplateOnly(acceptButton, containerWindow);
        }
        acceptButton.addEventListener("click", function(){
            toGo = "http://"+toGo
            location.href=toGo
        })

    }






    /*
    * windowError("title error", "description error"); msj error => muestra un mensaje de error, recibe el titulo del error y el mensaje
    * windowAsk(msjWindow, url); lleva al usuario a cierto sitio, recibe un msj y una url a cual nos llevara
    * */

