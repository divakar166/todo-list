$(document).ready(function(){
    console.log('Working!!')
    var btn = $('.btn')
    btn.on("click",function(){
        let task = $('#task_name').val()
        let task_div = $('.task_div')
        console.log('ok')
        task_div.append(`<div class='task'>${task}</div>`)
        console.log(task)
    })
})