$("#calculadoras_grupo").click(function(){
    $("#calculadoras_itens").toggleClass("exibirSubMenu")
    $("#calculadoras_seta").toggleClass("gira")
})

$("#lampadas_grupo").click(function(){
    $("#lampadas_itens").toggleClass("exibirSubMenu")
    $("#lampadas_seta").toggleClass("gira")
})

$("#jogos_grupo").click(function(){
    $("#jogos_itens").toggleClass("exibirSubMenu")
    $("#jogos_seta").toggleClass("gira")
})

$("#sistemas_grupo").click(function(){
    $("#sistemas_itens").toggleClass("exibirSubMenu")
    $("#sistemas_seta").toggleClass("gira")
})

$("#php_grupo").click(function(){
    $("#php_itens").toggleClass("exibirSubMenu")
    $("#php_seta").toggleClass("gira")
})

$("#php_cfb_grupo").click(function(){
    $("#php_cfb_itens").toggleClass("exibirSubMenu")
    $("#php_cfb_seta").toggleClass("gira")
})

$("#php_cfb_leonardo_grupo").click(function(){
    $("#php_cfb_leonardo_itens").toggleClass("exibirSubMenu")
    $("#php_cfb_leonardo_seta").toggleClass("gira")
})

$("#php_faetec_grupo").click(function(){
    $("#php_faetec_itens").toggleClass("exibirSubMenu")
    $("#php_faetec_seta").toggleClass("gira")
})

$("#php_faetec_leonardo_grupo").click(function(){
    $("#php_faetec_leonardo_itens").toggleClass("exibirSubMenu")
    $("#php_faetec_leonardo_seta").toggleClass("gira")
})


$("a").click(function(){
    $("a").removeClass('ativo')
    
    $(this).toggleClass("ativo")
})