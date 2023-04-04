
    let input_check = document.getElementById("toggle");

    const linkSobremin = document.getElementById("sobre");
    linkSobremin.addEventListener("click", closeMenu, false);

    const linkProjetos = document.getElementById("projects");
    linkProjetos.addEventListener("click", closeMenu, false);

    function closeMenu(){
        input_check.click();
        
    }
    