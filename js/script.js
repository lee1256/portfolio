function skill(id, percent){
    var bar = new ProgressBar.Circle(id, {
        color: 'red',
        strokeWidth: 10,
        trailWidth: 10,
        duration: 2400,
        step: function(state, bar){
            bar.setText(Math.round(bar.value()*100) + '%');
        },
    });
    
    bar.animate(percent);
}
skill('#ae',0.5)
skill('#pr',0.5)
skill('#ps',0.5)
skill('#han',0.5)
skill('#mos',0.5)
skill('#html',0.5)
skill('#css',0.5)
skill('#js',0.5)
