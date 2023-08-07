
    const toggleBtn = document.querySelector('.toggle_btn');
        const toggleBtnIcon = document.querySelector('.toggle_btn i');
        const DropDownMenu = document.querySelector('.dropdown_menu');

        toggleBtn.onclick = function()  {
            DropDownMenu.classList.toggle('open');
            const isOpen = DropDownMenu.classList.contains('open');

            toggleBtnIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars';
    }
$(".modal-trigger").click(function(e){
e.preventDefault();
dataModal = $(this).attr("data-modal");
$("#" + dataModal).css({"display":"block"});
// $("body").css({"overflow-y": "hidden"}); //Prevent double scrollbar.
});

$(".close-modal, .modal-sandbox").click(function(){
$(".modal").css({"display":"none"});
// $("body").css({"overflow-y": "auto"}); //Prevent double scrollbar.
});