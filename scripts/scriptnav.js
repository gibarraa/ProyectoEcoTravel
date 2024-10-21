
    fetch("../moduloNavBar.html").then(
        function(info){
            return info.text();
        }
    ).then(
        function(modulo){
            console.log(modulo);
            barraNavegacion.innerHTML = modulo;
        }
    )

    fetch("../moduleFooter.html").then(
        function(info){
            return info.text();
        }
    ).then(
        function(modulo){
            console.log(modulo);
            pies.innerHTML = modulo;
        }
    )

    fetch("../moduloBus.html").then(
    function(info){
        return info.text();
    }
    ).then(
    function(modulo){
        console.log(modulo);
        formularioBus.innerHTML = modulo
    }
    )

