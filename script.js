dragula([document.getElementById('1'),
        document.getElementById('2'),
        document.getElementById('3'),
        document.getElementById('4'),
        document.getElementById('5'),
        document.getElementById('6'),
        document.getElementById('7'),
        document.getElementById('board')
    ])
    .on('drag', function (el) {
        el.className = el.className.replace('ex-moved', '');
        el.classList.add('is-moving');
    }).on('drop', function (el) {
        el.className += ' ex-moved';
    }).on('over', function (el, container) {
        container.className += ' ex-over';
    }).on('out', function (el, container) {
        container.className = container.className.replace('ex-over', '');
    }).on('dragend', function (el) {
        el.classList.remove('is-moving');
    });

function set_BG_Color(x) {
    x.style.background = "white";
}

function del_BG_Color(x) {
    x.style.background = "transparent";
}